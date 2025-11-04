export class Stack<Type> {
  private stackData: Type[] = [];

  constructor() {}

  isEmpty(): boolean {
    return this.stackData.length === 0;
  }

  push(item: Type): void {
    this.stackData.push(item);
  }

  pop(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A pilha está vazia");
      return;
    }
    return this.stackData.pop();
  }

  peek(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A pilha está vazia");
      return;
    }
    return this.stackData[this.stackData.length - 1];
  }

  size(): number {
    return this.stackData.length;
  }

  clear(): void {
    this.stackData = [];
  }

  contains(item: Type): boolean {
    return this.stackData.includes(item);
  }

  // ✅ Método necessário para o LivrosPilha.ts funcionar
  getItems(): Type[] {
    return [...this.stackData];
  }
}
