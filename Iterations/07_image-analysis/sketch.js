let imageMaterial;
let button;

function preload() {
  imageMaterial = loadImage("img/c.jpg");
}

function setup() {
  createCanvas(640, 640);  

  
}

function draw() {
  background(0);


  button = createButton('DOWNLOAD');
  button.position(650, 650);
  button.mousePressed(downloadImage);





  imageMaterial.loadPixels();
  let base

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {



      let in_color = imageMaterial.get(x, y);
      let r = red(in_color);
      let g = green(in_color);
      let b = blue(in_color);


      base = g

      let out_color;
      if (base < 50) {
        out_color = color(0, 0, 0);
      }

      if (base > 50 && base < 100) {
        out_color = color(0, 218, 180);
      }

      if (base > 100 && base < 150 ) {
        out_color = color(255, 233, 28);
      }

      if (base > 150) {
        out_color = color(255, 3, 80);
      }
      imageMaterial.set(x, y, out_color);
    }
  }

  function downloadImage() {
    imageMaterial.save('regenerative_', 'png');
  
   
    }


    imageMaterial.updatePixels();
    noSmooth();
    image(imageMaterial, 0, 0, imageMaterial.width, imageMaterial.height);
    noLoop();





}
