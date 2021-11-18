class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.lastSeen = Number.MIN_VALUE;
  }

  add(value) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
      return;
    }

    let newNode = new BinaryTreeNode(value);
    let current = this.root;
    while (current) {
      if (value <= current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  forceAdd(value) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
      return;
    }
    let current = this.root;
    let newNode = new BinaryTreeNode(value);

    while (current) {
      if (!current.left) {
        current.left = newNode;
        return;
      }
      if (current.left && !current.right) {
        current.right = newNode;
        return;
      }
      current = current.left;
    }
  }

  print() {
    let current = this.root;
    this._inOrderTraverse(current);
  }

  _inOrderTraverse(node) {
    if (node) {
      this._inOrderTraverse(node.left);
      console.log(node.value);
      this._inOrderTraverse(node.right);
    }
  }

  inOrderValidate() {
    let current = this.root;
    return this._inOrderValidateTraversal(current);
  }

  _inOrderValidateTraversal(node) {
    if (node) {
      let checkLeft = this._inOrderValidateTraversal(node.left);
      if (!checkLeft) return false;

      if (this.lastSeen !== null && node.value <= this.lastSeen) {
        return false;
      }
      this.lastSeen = node.value;

      let checkRight = this._inOrderValidateTraversal(node.right);
      if (!checkRight) return false;
      return true;
    }
    return true;
  }
}

const btDisorder = new BinaryTree(); // out of order b-tree
btDisorder.forceAdd(5);
btDisorder.forceAdd(7);
btDisorder.forceAdd(6);
btDisorder.forceAdd(8);
btDisorder.forceAdd(9);
btDisorder.print();
// console.log(btDisorder.inOrderValidate());
// console.log(bt.inOrder());
// console.log(btDisorder);
console.log(btDisorder.inOrderValidate());
console.log('=========');
const btOrder = new BinaryTree();
btOrder.add(5);
btOrder.add(7);
btOrder.add(1);
btOrder.add(2);
btOrder.print();
console.log(btOrder.inOrderValidate());
