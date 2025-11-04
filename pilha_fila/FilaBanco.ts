import { Queue } from "./Queue";

// @ts-ignore
const prompt = require("readline-sync").question;

const filaClientes = new Queue<string>();

function mostrarFila(): void {
  const lista = filaClientes.list();
  console.log("\nFila:");
  if (lista.length === 0) {
    console.log("(vazia)");
  } else {
    lista.forEach((cliente) => console.log(cliente));
  }
}

function exibirMenu(): void {
  console.log(`
**************************************
*                                    *
*  1 - Adicionar Cliente na Fila     *
*  2 - Listar todos os Clientes      *
*  3 - Retirar Cliente da Fila       *
*  0 - Sair                          *
*                                    *
**************************************
`);
}

function menu(): void {
  let opcao = "";

  while (opcao !== "0") {
    exibirMenu();
    opcao = prompt("Entre com a opção desejada: ");

    switch (opcao) {
      case "1":
        const nome = prompt("\nDigite o nome do cliente: ");
        filaClientes.enqueue(nome);
        mostrarFila();
        console.log("\nCliente Adicionado!");
        break;
      case "2":
        console.log("\nLista de Clientes na Fila:");
        mostrarFila();
        break;
      case "3":
        if (filaClientes.isEmpty()) {
          console.log("\nA Fila está vazia!");
        } else {
          filaClientes.dequeue();
          mostrarFila();
          console.log("\nO Cliente foi Chamado!");
        }
        break;
      case "0":
        console.log("\nPrograma Finalizado!");
        break;
      default:
        console.log("\nOpção inválida!");
    }
  }
}

menu();
