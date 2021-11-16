class Node {
  constructor(value, next) {
    this.value = value ? value : 0;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    if (!this.head) {
      this.head = new Node(value, null);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value, null);
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function setup(list) {
  list.add(1);
  list.add(2);
  // list.add(0);
  list.add(2);
  list.add(1);
  // list.add(3)
}

function palindrome(list) {
  let stack = [];
  let current = list.head;
  let runner = list.head;

  // if odd length, runner will be on last element
  // if even length, runner will be on element after last element e.g. null
  while (runner && runner.next !== null) {
    stack.push(current.value);
    current = current.next;
    runner = runner.next.next;
  }

  // this is means linkedlist is odd length,
  // skip the middle element
  if (runner !== null) {
    current = current.next;
  }

  while (current) {
    let value = stack.pop();

    if (current.value !== value) {
      return false;
    }

    current = current.next;
  }

  return stack.length === 0;
}

const list = new LinkedList();
setup(list);
console.log(palindrome(list));
// list.print();
