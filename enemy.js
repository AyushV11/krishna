class Enemy{
    constructor(x,y){
this.body = createSprite(x,y)
this.image=loadImage("enemy.png")
this.body.addImage(this.image)
this.body.scale=1.5
    }
}