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

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
stack.print();
console.log(stack.isEmpty());
