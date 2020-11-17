var form;

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  createSprite(400, 200, 50, 50);

  form = new Form();
}

function draw() {
  background(255,255,255);  

 form.display();

  drawSprites();
}