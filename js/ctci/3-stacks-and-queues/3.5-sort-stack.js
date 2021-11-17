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

class SortStack {
  constructor() {
    this.data = [];
    this.size = 0;
    this.temp = new Stack();
  }

  push(value) {
    if (this.isEmpty()) {
      this.data.push(value);
      this.size++;
      return;
    }

    if (value > this.peek()) {
      while (value > this.peek()) {
        this.temp.push(this.pop());
      }

      this.data.push(value);
      this.size++;

      while (!this.temp.isEmpty()) {
        this.data.push(this.temp.pop());
        this.size++;
      }
      return;
    } else {
      this.data.push(value);
      this.size++;
      return;
    }
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

const sortStack = new SortStack();

sortStack.push(3);
sortStack.push(5);

sortStack.push(4);
sortStack.push(2);
sortStack.push(1);
sortStack.push(6);
sortStack.push(7);

sortStack.print();
