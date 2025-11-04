import * as leia from "readline-sync";

// Cria uma Collection Set do tipo number
let numeros: Set<number> = new Set();

// Solicita 10 números inteiros não repetidos
while (numeros.size < 10) {
  let valor = leia.questionInt(
    `Digite o ${numeros.size + 1}º número inteiro (não repetido): `
  );

  if (numeros.has(valor)) {
    console.log(`O número ${valor} já foi digitado. Tente outro.`);
  } else {
    numeros.add(valor);
  }
}

// Exibe os dados do Set
console.log("\nListar dados do Set:");
for (let numero of numeros) {
  console.log(numero);
}
