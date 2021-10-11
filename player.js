class Player{
    constructor(x,y){
this.body = createSprite(x,y)
this.image=loadImage("shadow fight.png")
this.body.addImage(this.image)
this.body.scale=0.5
    }

    
}