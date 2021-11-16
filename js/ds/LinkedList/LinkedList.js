class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    let temp = this.head;
    if (!temp) {
      this.head = newNode;
      return;
    }

    // head to last node
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  prepend(value) {
    let temp = this.head;

    // if list is empty
    if (!temp) {
      this.append(value);
      return;
    }

    let newNode = new Node(value);
    newNode.next = temp;
    this.head = newNode;
  }

  delete(value) {
    let temp = this.head;
    let prev;

    if (!temp) {
      console.log('list is empty');
      return;
    }

    // if value is at the head
    if (temp.value === value) {
      this.head = temp.next;
      temp = null;
    }

    while (temp.next) {
      if (temp.next.value === value) {
        prev = temp;
        break;
      }
      temp = temp.next;
    }

    if (!temp.next) {
      console.log('value not found');
    }

    console.log(prev);
    prev.next = temp.next;
    temp = null;

    // prev.next = temp.next;
    // temp = null;
    return;
  }

  printAll() {
    let temp = this.head;
    if (!temp) {
      console.log('This is an empty Linked List');
      return;
    }

    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const l = new LinkedList();
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => l.append(num));

l.delete(5);
// l.printAll();
