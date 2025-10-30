// Importa o módulo readline para entrada via terminal
const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let contador = 0;

// Função para solicitar cada nota
function lerNota() {
  rl.question(`Nota ${contador + 1}: `, (entrada) => {
    let nota = parseFloat(entrada);
    if (isNaN(nota)) {
      console.log("⚠️ Por favor, digite um número válido.");
      lerNota(); // repete a mesma nota
    } else {
      notas.push(nota);
      contador++;
      if (contador < 4) {
        lerNota(); // próxima nota
      } else {
        // Calcula a média
        let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
        console.log(`\n📊 Média final: ${media.toFixed(1)}`);
        rl.close();
      }
    }
  });
}

// Inicia o processo
lerNota();