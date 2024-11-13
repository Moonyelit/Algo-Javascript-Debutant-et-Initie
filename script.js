// EXO 1
console.log("Hello World");
console.log("Bienvenue dans le monde de la programmation !");

//EXO 2
let nombre1 = 5;
let nombre2 = 10;

console.log(nombre1 + nombre2);

//EXO 3
const tableauFruits = ["pomme", "banane", "cerise"];
for (let fruit of tableauFruits) {
  console.log(fruit);
}

//EXO 4
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) console.log(i);
}

//EXO 5
const mot = "programmation";
let voyelles = ["a", "e", "i", "o", "u", "y"];
let nombreVoyelles = 0;

for (let i = 0; i < mot.length; i++) {
  if (voyelles.includes(mot[i])) {
    console.log(mot[i]);
    nombreVoyelles = nombreVoyelles + 1;
  }
}
console.log(nombreVoyelles);

//EXO 6
const alphabet = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "K",
  "k",
  "L",
  "l",
  "M",
  "m",
  "N",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
];
const phrase = "J'aime beaucoup le jeu Outer Wilds.";
let compteurLettres = {};

for (let i = 0; i < phrase.length; i++) {
  if (alphabet.includes(phrase[i])) {
    if (compteurLettres[phrase[i]]) {
      compteurLettres[phrase[i]] += 1;
    } else {
      compteurLettres[phrase[i]] = 1;
    }
  }
}
  console.log(compteurLettres);
  
  //EXO 7
  const nombresaleatoire= [-2, 9, -32, 39, -45 , 26 , 583, 39, -23];
  let negatif = [];
  let positif = [];

  for (let i = 0; i < nombresaleatoire.length; i++) {
    if (nombresaleatoire[i]>0) {

        result = positif.push(nombresaleatoire[i]);
    } else {
        result = negatif.push(nombresaleatoire[i]);
    }
  }
  console.log(positif);
  console.log(negatif);

  //EXO 8
  