class PlacementTile{
	constructor({position = {x:0, y:0}})
	{
		this.position = position
		this.size = 64
		this.selectedColor = 'white'
		this.defaultColor = 'rgba(255, 255, 255, 0.15)'
		this.isOccupied = false
	}
	
	draw(givenColor=this.defaultColor)
	{
		c.fillStyle = givenColor
		c.fillRect(this.position.x, this.position.y, this.size, this.size)
	}
	
	update()
	{
		this.draw(this.selectedColor)
	}
}