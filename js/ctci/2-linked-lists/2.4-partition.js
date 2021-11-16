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
  list.add(8);
  list.add(8);
  list.add(7);
  list.add(12);
  list.add(4);
  list.add(5);
  list.add(5);
  list.add(7);
}

function partitionStable(list, x) {
  let lessThanList = [];
  let moreThanList = [];

  let current = list.head;
  while (current) {
    if (current.value < x) {
      lessThanList.push(current.value);
    } else {
      moreThanList.push(current.value);
    }
    current = current.next;
  }

  // reconstruct a linkedlist
  let newList = new LinkedList();
  lessThanList.forEach((value) => newList.add(value));
  moreThanList.forEach((value) => newList.add(value));

  list.head = newList.head;
}

// === SETUP ====
const list = new LinkedList();
setup(list);
partitionStable(list, 8);
list.print()
