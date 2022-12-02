let listLetter = document.getElementById("rock-paper").innerText;

// const result = listNumber.split(/\n\s*\n/);
const result = listLetter.split(/\r?\n/);

//
let numberSolo = result[0].split(/\r?\n/);

var sommeRockPaper = 0;

//les char sont aux position 6 et 8
// console.log(String(result[0]).charAt(8));

//les points sont cumulés par rapport à l'algorithme défini par l'exercice
for (let i = 0; i < result.length; i++) {
  switch (String(result[i]).charAt(6)) {
    case "A":
      switch (String(result[i]).charAt(8)) {
        case "Y":
          sommeRockPaper += 8;
          break;
        case "X":
          sommeRockPaper += 4;
          break;
        case "Z":
          sommeRockPaper += 3;
          break;
      }
      break;
    case "B":
      switch (String(result[i]).charAt(8)) {
        case "Y":
          sommeRockPaper += 5;
          break;
        case "X":
          sommeRockPaper += 1;
          break;
        case "Z":
          sommeRockPaper += 9;
          break;
      }
      break;
    case "C":
      switch (String(result[i]).charAt(8)) {
        case "Y":
          sommeRockPaper += 2;
          break;
        case "X":
          sommeRockPaper += 7;
          break;
        case "Z":
          sommeRockPaper += 6;
          break;
      }
      break;
  }
}
console.log(sommeRockPaper);

/*algorithme de l'exercice:

A = rock            Y = paper = 2
B = paper           X = rock = 1
C = scissors        z = scissors = 3

Win = 3
Draw = 3
Lose = 0

AY = 8
AX = 4
AZ = 3

BY = 5
BX = 1
BZ = 9

CY = 2
CX = 7
CZ = 6

*/
