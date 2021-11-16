class Node {
  constructor(value, next) {
    this.value = value ? value : 0;
    this.next = next ? next : 0;
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
  list.add(4);
  list.add(5);
  list.add(5);
  list.add(7);
  list.add(8);
  list.add(8);
  list.add(7);
  list.add(12);
}

function kToLast(list, k) {
  let index = 0;
  let current = list.head;

  while (current) {
    if (index >= k) {
      console.log(current.value);
    }

    current = current.next;
    index++;
  }
}


// === SETUP ====
const list = new LinkedList();
setup(list);
kToLast(list, 3);
// list.print();
