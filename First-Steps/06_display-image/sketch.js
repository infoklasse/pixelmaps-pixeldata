let img;
function preload() {
  img = loadImage('img/wiki_image.jpg');
}
function setup() {
  createCanvas(500,500);
  background(50);

  // Top-left corner of the img is at (10, 10)
  // Width and height are 50×50
  image(img, 10, 10, 200, 200);
}