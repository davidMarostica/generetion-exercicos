import * as leia from "readline-sync";

// Inicializa o Set com 10 valores inteiros
const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Exibe os índices e os valores da Collection
console.log("\nÍndices:");
for (let i = 0; i < 10; i++) {
  process.stdout.write(i + " ");
}

console.log("\n\nList:");
for (let numero of numeros) {
  process.stdout.write(numero + " ");
}

// Solicita ao usuário um número para buscar
const busca = leia.questionInt(
  "\n\nDigite o número que você deseja encontrar: "
);

// Verifica se o número está presente no Set
if (numeros.has(busca)) {
  console.log(`\nO número ${busca} foi encontrado!`);
} else {
  console.log(`\nO número ${busca} não foi encontrado!`);
}
