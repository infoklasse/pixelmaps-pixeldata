// LEARNINGS
// Arbeiten mit Arrays
// Javascript Referenzen nutzen
// Erstes Arbeiten mit »Daten«


var meinArrayWorte = ["Friedrich Kittler", "Otl Aicher", "Irma Boom"];
var meinArrayNummer = [1, 2, 3, 4, 5, 6];
var meinLeererArray = [];

function setup() {
  createCanvas(500, 500);

  meinArrayWorte.push("Giorgia Lupi");
  console.log(meinArrayWorte);



  for (var i = 7; i < 21; i++) {
    meinArrayNummer.push(i)
  }
  console.log(meinArrayNummer);
}

