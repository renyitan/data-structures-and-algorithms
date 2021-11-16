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

function setup2(list) {
  list.add(5);
  list.add(9);
  list.add(6);
}

function sumList(list1, list2) {
  let carry = 0;
  let head = null;
  let current = null;
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 !== null || current2 !== null) {
    let sum = carry;
    if (current1 !== null) {
      sum += current1.value;
      current1 = current1.next;
    }
    if (current2 !== null) {
      sum += current2.value;
      current2 = current2.next;
    }

    let node = new Node(sum % 10, null);

    carry = Math.floor(sum / 10);

    if (!current) {
      current = head = node;
    } else {
      current.next = node;
      current = current.next;
    }
  }

  if (carry) {
    current.next = new Node(carry);
  }

  let c = head;
  while (c) {
    console.log(c.value);
    c = c.next;
  }
}

const list1 = new LinkedList();
setup1(list1);

const list2 = new LinkedList();
setup2(list2);

sumList(list1, list2);
