const leia = require("readline-sync")

// Entrada de dados
let A = leia.questionInt("Digite o número A: ")
let B = leia.questionInt("Digite o número B: ")
let C = leia.questionInt("Digite o número C: ")

// Processamento
let soma = A + B
console.log(A + " + " + B + " = " + soma)

if (soma > C) {
    console.log(soma + " > " + C)
    console.log("A Soma de A + B é Maior do que C")
} else if (soma < C) {
    console.log(soma + " < " + C)
    console.log("A Soma de A + B é Menor do que C")
} else {
    console.log(soma + " = " + C)
    console.log("A Soma de A + B é Igual a C")
}
