let wrench01;
let wrench02;
let wrench03;
let wrench04;
let wrench05;
let wrench06;

let spacer = 100;


function preload() {
  wrench01 = loadModel('wrench3D/wrench01.obj', true);
  // wrench02 = loadModel('wrench3D/wrench02.obj', true);
  wrench03 = loadModel('wrench3D/wrench03.obj', true);
  wrench04 = loadModel('wrench3D/wrench04.obj', true);
  wrench05 = loadModel('wrench3D/wrench05.obj', true);
  wrench06 = loadModel('wrench3D/wrench06.obj', true);
}

let wrenchArray = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  wrenchArray = [wrench01, wrench03, wrench04, wrench05, wrench06];

  for (x = -width/2; x < width/2; x+= spacer) {
    for (y = -height/2; y < height/2; y+= spacer) {
      strokeWeight(5);
      stroke(255);
      point(x*spacer, y*spacer);
    }
  }
}

function draw() {
  background(0);
  ortho();

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(125);
  pointLight(250, 250, 250, locX, locY, 50);

  for (x = 0; x <= width; x+= spacer) {
    for (y = 0; y <= height; y+= spacer) {
      push();
      translate(x - width/2, y - height/2);
      noStroke();
      rotateX(frameCount * 0.01 * x/spacer);
      rotateY(frameCount * 0.01 * y/spacer);
      scale(1);
      ambientMaterial(255, 0, 150);
      model(wrenchArray[0]);
      pop();
    }

  }
}
