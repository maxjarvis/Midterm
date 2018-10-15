var space;
var rocket;
var enemy1;
var enemy2;
var x = 40
var y = 40
var w = 100

function preload() {
  space = loadImage('space.jpg');
  rocket = loadImage('rocketship.png');
  enemy1 = loadImage('enemy1.png');
  enemy2 = loadImage('enemy2.png');
}

function setup() {
  createCanvas(1000, 600);

}

function draw() {
  image(space, 0, 0);

  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5
    } else if(keyCode == RIGHT_ARROW) {
      x = x + 5
    }
  }
    image(rocket, x, 550, 50, 50);

 if(keyIsPressed) {
    if(key == 's') {
      stroke(255, 0, 0);
      line(x+12, 565, x+12, 0)
      line(x+37, 565, x+37, 0)
    }
  }

  for(var i = .5; i < 5; i++) {
    noStroke();
    fill(255, 255, 0);
push();
    translate(y += i*.15, 0);
  if(y > 400) {
    y = i/2
  }


    image(enemy1, w*i, 50, 35, 35);
    image(enemy2, w*(i+.5), 100, 35, 35);
    image(enemy1, w*i, 150, 35, 35);
pop();
}
  if(x+25 == w*i) {

  }
}
