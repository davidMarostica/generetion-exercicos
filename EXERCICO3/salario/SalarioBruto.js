// Importa o módulo readline para entrada via terminal
const readline = require('readline');

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos) {
  const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
  return salarioLiquido;
}

// Exemplo de entrada
const salarioBruto = 2000.00;
const adicionalNoturno = 500.00;
const horasExtras = 100.00;
const descontos = 200.00;

// Cálculo
const salarioLiquido = calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos);

// Saída
console.log("Salário Bruto:", salarioBruto.toFixed(2));
console.log("Adicional Noturno:", adicionalNoturno.toFixed(2));
console.log("Horas Extras:", horasExtras.toFixed(2));
console.log("Descontos:", descontos.toFixed(2));
console.log("Salário Líquido:", salarioLiquido.toFixed(2));
