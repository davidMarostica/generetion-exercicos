import * as leia from "readline-sync";

// Inicializa a Collection Array com 10 valores inteiros
let numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Exibe os índices e os valores do array
console.log("\nÍndices:");
for (let i = 0; i < numeros.length; i++) {
  process.stdout.write(i + " ");
}

console.log("\n\nArray:");
for (let numero of numeros) {
  process.stdout.write(numero + " ");
}

// Solicita ao usuário um número inteiro
let busca = leia.questionInt("\n\nDigite o número que você deseja encontrar: ");

// Verifica se o número existe no array
let posicao = numeros.indexOf(busca);

if (posicao !== -1) {
  console.log(`\nO número ${busca} está localizado na posição: ${posicao}`);
} else {
  console.log(`\nO número ${busca} não foi encontrado!`);
}
