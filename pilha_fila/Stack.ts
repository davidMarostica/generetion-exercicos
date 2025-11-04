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
    return this.stackData.pop();
  }

  peek(): Type | undefined {
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

  list(): Type[] {
    return [...this.stackData];
  }
}
