const leia = require("readline-sync");

// Entrada
let salario = leia.questionFloat("Digite o salário: ");
let abono = leia.questionFloat("Digite o abono: ");

// Processamento
let novoSalario = salario + abono;

// Saída
console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`);
