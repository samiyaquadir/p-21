var wall,thickness

var bullet,speed,weight

var lbullet,lwall
function setup() {
 createCanvas(1600,400)
 thickness=random(22,83)

 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor=color(80,80,80)

 bullet=createSprite(200,200,50,10)
bullet.shapeColor=color(255)

 speed=random(223,321)
 weight=random(30,52)

 bullet.velocityX=speed;
 bullet.depth=wall.depth-1;
}


function draw() {
  background(0); 
 

 if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5 *weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10){
    wall.shapeColor="green"
  }
  if(damage<10){
    wall.shapeColor="red"
  }

    }
console.log(damage);
  drawSprites();
}

function hasCollided(lbullet,lwall){
 
  bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x

if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}

