let quantity = 40; 
let x = [], y = [], xDir = [], yDir = [];
let angle = [], angleSpeed = [];
let d, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  r = 400;
  g = 100;
  b = 100;
  d = 10;

  for (let i = 0; i < quantity; i++) {
    x[i] = (width / (quantity + 1)) * (i + 1);
    y[i] = height / 2;

     let spd = random(0.5, 4);   // each shape gets its own speed
    let dir = random(360);      // and its own direction
    xDir[i] = cos(dir) * spd;
    yDir[i] = sin(dir) * spd;

    angle[i] = 0;
    angleSpeed[i] = random(3, 25);
  }
}

function draw() {
  background(485, 70, 180, 10);

   r = mapSin(frameCount * 0.5, 0, 255);
  g = mapSin(frameCount * 0.5 + 120, 0, 255);
  b = mapSin(frameCount * 0.5 + 240, 0, 255);

  for (let i = 0; i < quantity; i++) {
    display(i);
    update(i);
    Keepincanvas(i);
  }
}

function display(n) {
  for (let i = 10; i > 0; i--) {
    let offSetX = mapSin(angle[n], -5, 5);
    let offSetY = mapSin(angle[n], -3, 7);
    stroke('blue');
    fill(r, g, b);
    square(x[n] + offSetX * i, y[n] + offSetY * i, d * i);
  }
}

function Keepincanvas(n) {
  if ((x[n] > width) || (x[n] < 0)) {
    xDir[n] = -xDir[n];
  }
  if ((y[n] > height) || (y[n] < 0)) {
    yDir[n] = -yDir[n];
  }
}

function update(n) {
  x[n] += xDir[n];
  y[n] += yDir[n];
  angle[n] += angleSpeed[n];
}

function mapSin(a, target1, target2) {
  return map(sin(a), -1, 1, target1, target2);
}