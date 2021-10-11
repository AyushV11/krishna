var newx=700

function setup() {
  createCanvas(1200,800);

 krishna = new Player(200,500)
 rockgroup= new Group()
 for(var i=0;i<=10;i++){
 rock1 = new Rock(newx)
 rockgroup.add(rock1.body)
 newx+=400
 }
 edges = createEdgeSprites()
 enemy = new Enemy(newx,500)
}

function draw() {
  background(0);  
  drawSprites();
  rockgroup.bounceOff(edges)
  camera.position.x= krishna.body.x

  if(keyDown(RIGHT_ARROW)){
    krishna.body.x+=5
  }

  if(keyDown(LEFT_ARROW)){
    krishna.body.x-=5
  }

  if(keyDown(UP_ARROW)){
    krishna.body.y-=5
  }

  if(keyDown(DOWN_ARROW)){
    krishna.body.y+=5
  }
}