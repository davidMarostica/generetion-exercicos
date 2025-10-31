const leia = require("readline-sync");

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(leia.question(`Digite o ${i}º número: `));

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
