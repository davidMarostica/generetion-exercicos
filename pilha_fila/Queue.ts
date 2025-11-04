export class Queue<Type> {
  private QueueData: Array<Type> = [];

  isEmpty(): boolean {
    return this.QueueData.length === 0;
  }

  enqueue(dataItem: Type): void {
    this.QueueData.push(dataItem);
  }

  dequeue(): Type | undefined {
    return this.QueueData.shift();
  }

  count(): number {
    return this.QueueData.length;
  }

  printQueue(): void {
    console.log(this.QueueData.join(", "));
  }

  peek(): Type | undefined {
    return this.QueueData[0];
  }

  contains(dataItem: Type): boolean {
    return this.QueueData.includes(dataItem);
  }

  clear(): void {
    this.QueueData.length = 0;
  }

  list(): Type[] {
    return [...this.QueueData];
  }
}
