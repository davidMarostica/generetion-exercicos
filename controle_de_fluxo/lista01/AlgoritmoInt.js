const leia = require("readline-sync")

// Entrada de dados
let numero = leia.questionInt("Digite um número: ")

// Verifica paridade
let paridade = ""
if (numero % 2 === 0) {
    paridade = "par"
} else {
    paridade = "ímpar"
}

// Verifica sinal
let sinal = ""
if (numero >= 0) {
    sinal = "positivo"
} else {
    sinal = "negativo"
}

// Saída formatada
console.log("O Número " + numero + " é " + paridade + " e " + sinal + "!")
