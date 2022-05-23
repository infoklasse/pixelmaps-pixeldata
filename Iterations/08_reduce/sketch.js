let img;

// Load the image
function preload() {
  img = loadImage("img/c.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  // Resize the image to fit the canvas
  img.resize(width, height);

  // Disable the stroke
  noStroke();

}

function draw() {
 
  
  
  // Round to the nearest 10
  pixelsize = 20;
  
  // Loop through the pixels X and Y
  for (let y = 0; y < img.height; y += pixelsize) {
    for (let x = 0; x < img.width; x += pixelsize) {
      
      // Get the color at (x, y)
      fill(img.get(x, y));
      
      // Draw a rectangle at (x, y) and the size of a cell
      rect(x, y, pixelsize, pixelsize);
    }
  }
  
}