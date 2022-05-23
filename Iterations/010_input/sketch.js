
let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/b.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 50, 50);
  imageMaterial.resize(20, 20);
  fill(200, 50, 50);
  noStroke();
  imageMaterial.loadPixels();

  console.log(imageMaterial.width)

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {
      const in_color = imageMaterial.get(x, y);
      const dot_size = (lightness(in_color) / 255) * 40;
           ellipse(
        x * 500 / imageMaterial.width + 500 / imageMaterial.width * 0.5,
        y * 500 / imageMaterial.width + 500 / imageMaterial.width * 0.5,
        dot_size,
        dot_size
      );
    }
  }

  // bild wird nur als input verwendet, aber nicht dargestellt

  noLoop();
}
