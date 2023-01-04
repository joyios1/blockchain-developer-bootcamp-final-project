class Enemy extends Sprite{
	constructor({position = {x:0, y:0}, givenImagePath }){
		super({position, imageSource: givenImagePath, frames:{max: 7}})
		this.width = 100
		this.height = 100
		this.waypointIndex = 1
		this.movementSpeed = 2
		this.radius = 50
		this.center = {
			x:this.position.x + this.width / 2,
			y:this.position.y + this.height / 2
		}
		this.health = 100
	}
	
	draw(){
		super.draw()
		
		c.fillStyle = 'red'
		c.fillRect(this.position.x, this.position.y -15, this.width, 10)	
		
		c.fillStyle = 'green'
		c.fillRect(this.position.x, this.position.y -15, this.width * this.health/100, 10)	
	}
	
	update(){	
		if(this.waypointIndex >= waypoints.length)
			return
		
		this.draw()
		super.update()
		
		const waypoint = waypoints[this.waypointIndex]
		let directionx = (waypoint.x - this.width/2) - this.position.x
		let directiony = (waypoint.y - this.height/2) - this.position.y
		let length = Math.sqrt(directionx**2 + directiony**2)
		directionx = directionx/length
		directiony = directiony/length
		 
		this.position.x += directionx * this.movementSpeed
		this.position.y += directiony * this.movementSpeed
		
		this.center = {
			x:this.position.x + this.width / 2,
			y:this.position.y + this.height / 2
		}
		
		if(length < 5)
			this.waypointIndex++
	}
}
