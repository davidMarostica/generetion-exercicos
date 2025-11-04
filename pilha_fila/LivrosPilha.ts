import { Stack } from "./Stack";

// @ts-ignore
const prompt = require("readline-sync").question;

const pilhaLivros = new Stack<string>();

function exibirMenu(): void {
  console.log(`
********************************************
*                                          *
*  1 - Adicionar Livro na pilha            *
*  2 - Listar todos os Livros              *
*  3 - Retirar Livro da pilha              *
*  0 - Sair                                *
*                                          *
********************************************
`);
}

function mostrarPilha(): void {
  const lista = pilhaLivros.list();
  console.log("\nPilha:");
  if (lista.length === 0) {
    console.log("(vazia)");
  } else {
    lista.forEach((livro: string) => console.log(livro));
  }
}

function menu(): void {
  let opcao = "";

  while (opcao !== "0") {
    exibirMenu();
    opcao = prompt("Entre com a opção desejada: ");

    switch (opcao) {
      case "1":
        const nome = prompt("\nDigite o nome do livro: ");
        pilhaLivros.push(nome);
        mostrarPilha();
        console.log("\nLivro adicionado!");
        break;
      case "2":
        console.log("\nLista de Livros na Pilha:");
        mostrarPilha();
        break;
      case "3":
        if (pilhaLivros.isEmpty()) {
          console.log("\nA Pilha está vazia!");
        } else {
          pilhaLivros.pop();
          mostrarPilha();
          console.log("\nUm Livro foi retirado da pilha!");
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
