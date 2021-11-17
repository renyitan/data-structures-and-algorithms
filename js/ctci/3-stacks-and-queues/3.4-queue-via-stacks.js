class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  push(value) {
    this.data.push(value);

    this.size++;
  }

  print() {
    console.log(this.data);
  }

  pop() {
    this.size--;
    return this.data.pop();
  }

  length() {
    return this.size;
  }

  peek() {
    return this.data[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }
}

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    this.shiftStack();
    return this.stack2.pop();
  }

  shiftStack() {
    // each time it is empty, we do the shift
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
}

const queue = new MyQueue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
