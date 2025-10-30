const leia = require("readline-sync");

// Inicializa o saldo
let saldo = 1000.00;

// Exibe opções
console.log("Escolha a operação:");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

let operacao = parseInt(leia.question("Operacao: "));

switch (operacao) {
  case 1:
    console.log("\nOperação - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    break;

  case 2:
    let valorSaque = parseFloat(leia.question("Valor: R$ "));
    console.log("\nOperação - Saque");
    if (valorSaque > saldo) {
      console.log("Saldo Insuficiente!");
    } else {
      saldo -= valorSaque;
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    }
    break;

  case 3:
    let valorDeposito = parseFloat(leia.question("Valor: R$ "));
    console.log("\nOperação - Depósito");
    saldo += valorDeposito;
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    break;

  default:
    console.log("\nOperação Inválida!");
    break;
}
