//designersejinoh

var program;
var shaderTexture;
var theta = 0;
var wid = 400;
var hei = 300;

function preload() {
  program = loadShader('shader/vertex.vert', 'shader/fragment.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  shaderTexture = createGraphics(windowWidth, windowHeight, WEBGL);
  shaderTexture.noStroke();
  rectMode(CENTER);

}

function draw() {
  shaderTexture.shader(program);
  program.setUniform('u_resolution', [width, height]);
  program.setUniform('u_time', millis() / 1000.0);
  program.setUniform('u_mouse', [mouseX, map(mouseY, 0, height, height, 0)]);
  shaderTexture.rect(0, 0, width, height);

  background(0);
  orbitControl();
  // rotateX(-0.5);
  // rotateY(-0.5);

  texture(shaderTexture);

  //#1
  push();
  translate(0, 0, -wid / 2);
