const leia = require("readline-sync");

// Entrada das três características
const tipo = leia.question("Digite o tipo (vertebrado/invertebrado): ").toLowerCase();
const classe = leia.question("Digite a classe (ave/mamífero/inseto/anelídeo): ").toLowerCase();
const alimentacao = leia.question("Digite o tipo de alimentação (carnívoro/onívoro/herbívoro/hematófago): ").toLowerCase();

// Processamento: identificação do animal
let animal = "";

if (tipo === "vertebrado") {
  if (classe === "ave") {
    if (alimentacao === "carnívoro") {
      animal = "Águia";
    } else if (alimentacao === "onívoro") {
      animal = "Pomba";
    }
  } else if (classe === "mamífero") {
    if (alimentacao === "onívoro") {
      animal = "Homem";
    } else if (alimentacao === "herbívoro") {
      animal = "Vaca";
    }
  }
} else if (tipo === "invertebrado") {
  if (classe === "inseto") {
    if (alimentacao === "hematófago") {
      animal = "Pulga";
    } else if (alimentacao === "herbívoro") {
      animal = "Lagarta";
    }
  } else if (classe === "anelídeo") {
    if (alimentacao === "hematófago") {
      animal = "Sanguessuga";
    } else if (alimentacao === "onívoro") {
      animal = "Minhoca";
    }
  }
}

// Saída
if (animal !== "") {
  console.log(`\nO animal escolhido é: ${animal}`);
} else {
  console.log("\nNenhum animal corresponde às características informadas.");
}
