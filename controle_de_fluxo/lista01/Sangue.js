const leia = require("readline-sync");

// Entrada de dados
const nome = leia.question("Digite o Nome do doador: ");
const idade = parseInt(leia.question("Digite a Idade do doador: "));
const primeiraDoacaoTexto = leia.question("Primeira doação de sangue? (true/false): ");
const primeiraDoacao = primeiraDoacaoTexto.toLowerCase() === "true";

// Processamento com estrutura condicional
if (idade < 18 || idade > 69) {
  console.log(`\n${nome} não está apto(a) para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && primeiraDoacao) {
  console.log(`\n${nome} não está apto(a) para doar sangue!`);
} else {
  console.log(`\n${nome} está apto(a) para doar sangue!`);
}
