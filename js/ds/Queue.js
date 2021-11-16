class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  enqueue(value) {
    this.data.push(value);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.data.shift();
  }

  length() {
    return this.size;
  }

  print() {
    console.log(this.data);
  }

  isEmpty() {
    return this.size === 0;
  }

  getFront() {
    return this.isEmpty() ? null : this.data[0];
  }

  getLast() {
    return this.isEmpty() ? null : this.data[this.size - 1];
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.length());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.length());
