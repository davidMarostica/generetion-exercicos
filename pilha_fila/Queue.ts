interface queueInterface<Type> {
  // Definição da interface genérica para a fila
  enqueue(dataItem: Type): void; // Método para adicionar um item à fila
  dequeue(): Type | undefined; // Método para remover e retornar o item da frente da fila
  isEmpty(): boolean; // Método para verificar se a fila está vazia
  count(): number; // Método para contar o número de itens na fila
  printQueue(): void; // Método para imprimir os itens da fila
  peek(): Type | undefined; // Método para visualizar o item da frente da fila sem removê-lo
  contains(dataItem: Type): boolean; // Método para verificar se um item está na fila
  clear(): void; // Método para limpar todos os itens da fila
}
// Implementação da classe Queue que segue a interface definida acima
export class Queue<Type> implements queueInterface<Type> {
  // Declaração da classe genérica Queue
  private QueueData: Array<Type> = []; // Array privado para armazenar os itens da fila

  constructor() {} // Construtor vazio

  isEmpty(): boolean {
    // Método para verificar se a fila está vazia
    let result = this.QueueData.length <= 0; // Retorna true se a fila estiver vazia, caso contrário false
    return result; // Retorna o resultado da verificação
  }

  enqueue(dataItem: Type): void {
    this.QueueData.push(dataItem);
  }

  dequeue(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.QueueData.shift();
      return element;
    }
  }

  count(): number {
    let len = this.QueueData.length;
    return len;
  }

  printQueue(): void {
    for (let i = 0; i < this.QueueData.length; i++) {
      console.log(this.QueueData[i]);
    }
  }

  peek(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.QueueData[0];
      return element;
    }
  }

  contains(dataItem: Type): boolean {
    if (this.QueueData.includes(dataItem)) {
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.QueueData.length = 0;
  }
}
