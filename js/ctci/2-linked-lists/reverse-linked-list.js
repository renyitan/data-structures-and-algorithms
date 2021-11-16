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

function setup1(list) {
  list.add(7);
  list.add(1);
  list.add(6);
}

function reverse(list) {
  let current = list.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
}

const list = new LinkedList();
setup1(list);
reverse(list);
