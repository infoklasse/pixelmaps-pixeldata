function setup() {
  createCanvas(500, 500);



}

function draw() {

let r = 0
let g = 0
let b = 0

let ourMappedVariableX = map(mouseX,0,width,0,255)
let ourMappedVariableY = map(mouseY,0,width,0,255)

r = ourMappedVariableX
g = ourMappedVariableY

background(r,g,b)
//console.log(r,g,b)

}