const leia = require("readline-sync")

// Entrada de dados
let nome = leia.question("Nome do colaborador: ")
let codigoCargo = leia.questionInt("Cargo: ")
let salario = leia.questionFloat("Salário: R$ ")

let cargo = ""
let percentual = 0

// Laço condicional switch
switch (codigoCargo) {
    case 1:
        cargo = "Gerente"
        percentual = 0.10
        break
    case 2:
        cargo = "Vendedor"
        percentual = 0.07
        break
    case 3:
        cargo = "Supervisor"
        percentual = 0.09
        break
    case 4:
        cargo = "Motorista"
        percentual = 0.06
        break
    case 5:
        cargo = "Estoquista"
        percentual = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        percentual = 0.08
        break
    default:
        console.log("Código de cargo inválido!")
        return
}

// Cálculo do novo salário
let novoSalario = salario + (salario * percentual)

// Saída formatada
console.log("Nome do colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log("Salário: R$ " + novoSalario.toFixed(2))
