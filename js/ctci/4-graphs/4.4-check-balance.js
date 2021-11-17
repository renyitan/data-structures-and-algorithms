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

bt.printInOrder();
