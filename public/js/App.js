
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 768

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'img/TowerDefenseMap.png'
image.onload = () => {
	loadWeb3()
	loadBlockchainData()
	animate()
}

async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts' })
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

function createImage(givenPath, givenName){
	var ul = document.getElementById("nfts-list")
	var li = document.createElement("li")
	li.setAttribute('id', givenName)
	const img = document.createElement("img")
	img.src = givenPath;
	img.width = 130
	img.height = 100
	img.id = givenName + '-img'
	img.style.objectFit = "cover"
	img.style.objectPosition = "51% 100%"
	img.addEventListener('click', function(e) {
		for(let i = 0; i < tokenURIs.length + 1; i++){
			let id = 'orc' + i.toString() + '-img'
			var img1 = document.getElementById(id)
			img1.style.border = "0px solid red"
		}
		img.style.border = "5px solid red";
		currentOrc = givenPath
	})

	li.appendChild(img)
	ul.appendChild(img)
}

async function mintToken(givenPath, index) {
	let hasMinted = token.methods.mint(
		accountAddress,
		window.location.origin + givenPath
	)
		.send({ from: accountAddress })
		.on('transactionHash', (hash) => {
			tokenURIs.push(givenPath)
		})

	hasMinted.then(value => {
		createImage(tokenURIs[index-1], 'orc' + (index).toString())
		prizesLeft--
		alert('congratulations you have unlocked an NFT!!!')
	}).catch(err => {
		alert("NFT not collected!!!")
	});
}

abi = null
token = null
totalSupply = 0
accountAddress = 0
contractAddress = 0
tokenURIs = []
currentOrc = NFTs.orc1
prizesLeft = 0
firstTime = true

async function loadBlockchainData() {
	const web3 = window.web3
	var accounts = await web3.eth.getAccounts();
	accountAddress = accounts[0]
	document.querySelector("#address").innerHTML = accountAddress

	// Load smart contract
	const networkId = await web3.eth.net.getId()
	const networkData = GameToken.networks[networkId]
	if (networkData) {

		abi = GameToken.abi
		contractAddress = networkData.address
		token = new web3.eth.Contract(abi, contractAddress)
		totalSupply = await token.methods.totalSupply().call()

		// Load Tokens
		let balanceOf = await token.methods.balanceOf(accountAddress).call()
		prizesLeft = 2 - balanceOf

		for (let i = 0; i < balanceOf; i++) {
			let id = await token.methods.tokenOfOwnerByIndex(accountAddress, i).call()
			let tokenURI = await token.methods.tokenURI(id).call()
			tokenURIs.push(tokenURI)
		}

		createImage(NFTs.orc1, 'orc0')
		updateNFTs()
	}
}

function updateNFTs(){
	for(let i = 1; i <= tokenURIs.length; i++){
		id = "orc" + i.toString()
		createImage(tokenURIs[i-1], id)
	}
}


const placementTiles = []
placementTilesData2D.forEach((row, i) => {
	row.forEach((symbol, j) => {
		if (symbol == 14)
			placementTiles.push(new PlacementTile({position: {x: j * 64, y: i * 64}}))
	})
})

const enemies = []
function spawnEnemies(spawnCount){
	for(let i = 0; i < spawnCount; i ++){
		const xOffset = i * 150
		enemies.push(new Enemy({position: {x:waypoints[0].x - xOffset - 50, y:waypoints[0].y - 50}, givenImagePath:currentOrc}))
	}
}
let numberOfEnemies = 3
spawnEnemies(numberOfEnemies)
let lives = 10
let money = 100
const explosions = []

function animate(){
	const animationFrameId = requestAnimationFrame(animate)
	c.drawImage(image, 0, 0)
	
	for(let i = enemies.length - 1; i >= 0; i--){
		enemy = enemies[i]
		enemy.update()
		
		if(enemy.position.x > canvas.width){
			lives -= 1
			enemies.splice(i, 1)
			document.querySelector('#hearts').innerHTML = lives
			
			if(lives === 0) {
				console.log('game over')
				document.querySelector('#gameOver').style.display = 'flex'
				cancelAnimationFrame(animationFrameId)
			}
		}
		
		for(let i = explosions.length - 1; i >= 0; i--){
			const explosion = explosions[i]
			explosion.draw()
			explosion.update()
			
			if(explosion.frames.current >= explosion.frames.max - 1){
				explosions.splice(i, 1)
			}
		}
	}
	
	if(enemies.length === 0){
		if(lives === 10 && prizesLeft != 0){
			if(prizesLeft === 2){
				mintToken(NFTs.orc2, 1)
			}
			else if(prizesLeft === 1){
				mintToken(NFTs.orc3, 2)
			}
		}

		numberOfEnemies += 2
		spawnEnemies(numberOfEnemies)
	}
	
	placementTiles.forEach((tile, i) => {
		tile.draw()
	})
	if(activeTileIndex != -1)
		placementTiles[activeTileIndex].update()
	
	
	buildings.forEach(building => {
		building.update()
		building.target = null
	
		const validEnemies = enemies.filter(enemy => {
			const xDifference = enemy.center.x - building.center.x
			const yDifference = enemy.center.y - building.center.y
			const distance = Math.hypot(xDifference, yDifference)
			return distance < building.radius
		})
		
		if(validEnemies.length == 0) building.elapsedSpawnTime = 74
		
		building.target = validEnemies[0]

		for(let i = building.projectiles.length - 1; i >= 0; i--){
			const projectile = building.projectiles[i]
			projectile.update()
			
			const xDifference = projectile.enemyTarget.center.x - projectile.position.x
			const yDifference = projectile.enemyTarget.center.y - projectile.position.y
			const distance = Math.hypot(xDifference, yDifference)
			
			// this is when a projectile hits an enemy
			if(distance < projectile.enemyTarget.radius + projectile.radius){
				projectile.enemyTarget.health -= 20
				if(projectile.enemyTarget.health <= 0){
					const enemyIndex = enemies.findIndex((enemy) => {
						return projectile.enemyTarget === enemy
					})
					if(enemyIndex > -1){
						enemies.splice(enemyIndex, 1)
						money+=50
						document.querySelector('#coins').innerHTML = money
					}
				}		
				explosions.push(new Sprite(
						{position: {x:projectile.position.x, y:projectile.position.y},
						imageSource: '/img/explosion.png',
						frames: {max: 4},
						offset: {x:0, y:0}
					})
				)
				building.projectiles.splice(i, 1)
			}		
		}
	})
}

const mousePosition = {
	x: undefined,
	y: undefined
}

activeTile = null
activeTileIndex = -1
const buildings = []
canvas.addEventListener('click', (event) => {
	if (activeTile && !activeTile.isOccupied && money >= 50){
		money -= 50
		document.querySelector('#coins').innerHTML = money
		buildings.push(new Building({position: {x:activeTile.position.x, y:activeTile.position.y}, givenImageSource:NFTs.stone}))
		activeTile.isOccupied = true
		buildings.sort((a, b) => {
			return a.position.y - b.position.y
		})
	}
})

window.addEventListener('mousemove', (event) => {
	mousePosition.x = event.clientX
	mousePosition.y = event.clientY
	
	for(let i = 0; i < placementTiles.length; i ++){
		const tile = placementTiles[i]
		if(mousePosition.x < tile.position.x + tile.size + 7 &&
	    mousePosition.x > tile.position.x + 7 &&
	    mousePosition.y < tile.position.y + tile.size + 7 &&
	    mousePosition.y > tile.position.y + 7)
		{
			activeTile = tile
			activeTileIndex = i
			break
		}
		else	
			activeTileIndex = -1
			
	}
})