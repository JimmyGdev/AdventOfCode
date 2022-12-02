let listLetter = document.getElementById("rock-paper").innerText;

// const result = listNumber.split(/\n\s*\n/);
const result = listLetter.split(/\r?\n/);

//
let numberSolo = result[0].split(/\r?\n/);

var sommeRockPaper = 0;

//les char sont aux position 6 et 8
// console.log(String(result[0]).charAt(8));

for (let i = 0; i < result.length; i++) {
  switch (String(result[i]).charAt(6)) {
    case "A":
      switch (String(result[i]).charAt(8)) {
        case "Y":
          sommeRockPaper += 4;
          break;
        case "X":
          sommeRockPaper += 3;
          break;
        case "Z":
          sommeRockPaper += 8;
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
          sommeRockPaper += 6;
          break;
        case "X":
          sommeRockPaper += 2;
          break;
        case "Z":
          sommeRockPaper += 7;
          break;
      }
      break;
  }
}
console.log(sommeRockPaper);
