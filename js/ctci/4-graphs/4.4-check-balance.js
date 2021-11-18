class BinaryTreeNode {
  constructor(value) {
    this.value = value ? value : 0;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  printInOrder() {
    let current = this.root;
    this._inOrderTraversal(current);
  }

  _inOrderTraversal(node) {
    if (node) {
      this._inOrderTraversal(node.left);
      console.log(node.value);
      this._inOrderTraversal(node.right);
    }
  }

  checkBalance() {
    let current = this.root;
    let leftMaxHeight = this.checkHeight(current.left);
    let rightMaxHeight = this.checkHeight(current.right);

    return Math.abs(leftMaxHeight - rightMaxHeight) <= 1;
  }

  checkHeight(node) {
    if (node === null) return -1;
    let leftHeight = this.checkHeight(node.left);
    let rightHeight = this.checkHeight(node.right);

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
}

const bt = new BinaryTree();
bt.add(12);
bt.add(7);
bt.add(16);
bt.add(13);
bt.add(20);
bt.add(5);
bt.add(1);
bt.add(9);

// bt.printInOrder();
console.log(bt.checkBalance());
