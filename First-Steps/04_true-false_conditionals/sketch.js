function setup() {
  createCanvas(500, 500);
  background(0)



}

function draw() {

  var b = false;

  if (mouseY > 250) {
    b = true;
  } else {
    b = false;
  }
  //console.log(b)
  console.log(mouseY)

  if (b == true) {
    ellipse(120, 120, 20, 20)
  }

  if (b == false) {
    background(0)
    ellipse(120, 20, 20, 20)
  }
}