class Projectile extends Sprite {
	constructor({position = {x:0, y:0}, enemyTarget}){
		super({position,  imageSource: '/img/projectile.png'})
		this.radius = 10
		this.velocity = {
			x:0, y:0
		}
		this.movementSpeed= 10
		this.enemyTarget = enemyTarget
	}	
	
	update(){
		this.draw()
		
		const enemyCenter = this.enemyTarget.center
		let directionx = (enemyCenter.x) - this.position.x
		let directiony = (enemyCenter.y) - this.position.y
		let length = Math.sqrt(directionx**2 + directiony**2)
		this.velocity.x = directionx/length
		this.velocity.y = directiony/length
		
		this.position.x += this.velocity.x * this.movementSpeed
		this.position.y += this.velocity.y * this.movementSpeed
	}
}
