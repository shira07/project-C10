var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
var friends = ["amishi", "harshini", "dani"]
console.log(friends[2])
var marks = [100,92,87,85,82.81]
//var mean = (marks[0]+marks[1]+marks[2])/marks.length
var sum = 0
for(var i = 0; i < marks.length; i++){
sum = sum+marks[i]
}
var mean = sum/marks.length
console.log(mean)
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}
