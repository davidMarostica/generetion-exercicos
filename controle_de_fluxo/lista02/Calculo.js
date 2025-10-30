const leia = require("readline-sync");

// Entrada de dados
const numero1 = parseFloat(leia.question("Digite o 1º número: "));
const numero2 = parseFloat(leia.question("Digite o 2º número: "));
const operacao = parseInt(leia.question("Operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): "));

// Processamento com switch
switch (operacao) {
  case 1:
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case 2:
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case 3:
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
  case 4:
    if (numero2 !== 0) {
      console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    } else {
      console.log("Erro: divisão por zero!");
    }
    break;
  default:
    console.log("Operação Inválida!");
}
