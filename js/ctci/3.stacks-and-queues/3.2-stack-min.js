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

class StackWithMin {
  constructor() {
    this.data = [];
    this.size = 0;

    this.minStack = new Stack();
  }

  push(value) {
    this.data.push(value);
    this.size++;
    if (this.minStack.isEmpty()) {
      this.minStack.push(value);
    }

    if (value < this.minStack.peek()) {
      this.minStack.push(value);
    }
  }

  print() {
    console.log(this.data);
  }

  min() {
    return this.minStack.peek();
  }

  pop() {
    this.size--;
    const pop = this.data.pop();
    if (pop === this.minStack.peek()) {
      this.minStack.pop();
    }
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

const stack = new StackWithMin();
stack.push(3);
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(1);
stack.push(7);

stack.pop();
console.log(stack.min()); // 1

stack.pop();
console.log(stack.min()); // 2

stack.pop();
stack.pop();
stack.pop();
console.log(stack.min()); // 3
