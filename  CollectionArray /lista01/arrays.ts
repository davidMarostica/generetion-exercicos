import * as leia from "readline-sync";

// Cria uma Collection Array de strings
let cores: Array<string> = [];

// Entrada de dados: solicita 5 cores ao usuário
for (let i = 0; i < 5; i++) {
  let cor = leia.question(`Digite a ${i + 1}ª cor: `);
  cores.push(cor);
}

// Exibe todas as cores adicionadas
console.log("\nListar todas as cores:");
for (let cor of cores) {
  console.log(cor);
}

// Ordena as cores em ordem crescente (alfabética)
cores.sort();

console.log("\nOrdenar as cores:");
for (let cor of cores) {
  console.log(cor);
}
