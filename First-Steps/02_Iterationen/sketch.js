// Iterationen mit For-Loops
var updatingVariable;
var num = 100;

function setup() {

  createCanvas(800, 800);
  background(255);
  noStroke();

  // LEARNINGS
  // Iterationen
  // Variable Scope

   //updatingVariable= 0;

  for (var i = 0; i < num; i++) {

    fill(random(200));
    ellipse(5, 5*i, 5, 5);
    console.log(i)

    //updatingVariable= updatingVariable+5

  }


}