const leia = require("readline-sync");

let menores21 = 0;
let maiores50 = 0;

let idade = parseInt(leia.question("Digite uma idade: "));

while (idade >= 0) {
  if (idade < 21) {
    menores21++;
  } else if (idade > 50) {
    maiores50++;
  }

  idade = parseInt(leia.question("Digite uma idade: "));
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);
