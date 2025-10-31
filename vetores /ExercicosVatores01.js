const leia = require("readline-sync");

// Inicializa a matriz 3x3
let matriz = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

// Leitura da matriz
console.log("Digite os elementos da matriz 3x3:");
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let valor = parseInt(leia.question(`Elemento [${i}][${j}]: `));
    matriz[i][j] = valor;

    // Diagonal Principal: índices iguais
    if (i === j) {
      diagonalPrincipal.push(valor);
      somaPrincipal += valor;
    }

    // Diagonal Secundária: soma dos índices igual a 2 (para 3x3)
    if (i + j === 2) {
      diagonalSecundaria.push(valor);
      somaSecundaria += valor;
    }
  }
}

// Saída dos resultados
console.log("\nElementos da Diagonal Principal:");
console.log(diagonalPrincipal.join(" "));

console.log("\nElementos da Diagonal Secundária:");
console.log(diagonalSecundaria.join(" "));

console.log(`\nSoma dos Elementos da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaSecundaria}`);
