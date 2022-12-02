let listNumber = document.getElementById("liste").innerText;

const result = listNumber.split(/\n\s*\n/);

let numberSolo = result[0].split(/\r?\n/);

//result[0] = "ensemble de nombre séparé par une ligne, representant un elf"

//numberSolo represente un tableau avec chaque nombre pour un elf

var bestNumber = 0;

// console.log(numberSolo[0]);
var somme;
for (let i = 0; i < result.length; i++) {
  let numberSolo = result[i].split(/\r?\n/);
  for (let i = 0; i < numberSolo.length; i++) {
    somme += Number(numberSolo[i]);
    // console.log(somme);
  }
  if (somme > bestNumber) {
    bestNumber = somme;
  }
  somme = 0;
  //   result[i];
}

console.log(bestNumber);
// console.log(result[0]);
