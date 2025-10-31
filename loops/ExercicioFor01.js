const leia = require("readline-sync");

let inicio = parseInt(leia.question("Digite o primeiro número do intervalo: "));
let fim = parseInt(leia.question("Digite o último número do intervalo: "));

if (inicio >= fim) {
  console.log("Intervalo inválido!");
} else {
  console.log(`No Intervalo entre ${inicio} e ${fim}:`);
  for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é múltiplo de 3 e 5`);
    }
  }
}
