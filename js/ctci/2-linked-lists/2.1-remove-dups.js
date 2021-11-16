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

function removeDups(list) {
  let current = list.head;
  let head = list.head;

  let set = new Set();
  // fill up all available values in hashmap
  while (current.next) {
    set.add(current.value);

    if (set.has(current.next.value)) {
      current.next = current.next.next;
      continue;
    }
    current = current.next;
  }

  return list;
}

function removeDupsNoBuffer(list) {
  let current = list.head;

  while (current) {
    let runner = current;

    while (runner.next) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }
}

// === SETUP ====
const list1 = new LinkedList();
const list2 = new LinkedList();
setup(list1);
setup(list2);

// === Driver ====
removeDups(list1);
list1.print();
removeDupsNoBuffer(list2);
list2.print();
