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
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
      return;
    }

    let current = this.root;
    let newNode = new BinaryTreeNode(value);
    while (current) {
      if (value < current.value) {
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

  find(value) {
    if (this.root.value === value) return true;
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
    return;
  }

  printInOrder() {
    let current = this.root;
    this.inOrder(current);
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.inOrder(root.left);
      this.inOrder(root.right);
    }
  }

  printPreOrder() {
    let current = this.root;
    this.preOrder(current);
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  printPostOrder() {
    let current = this.root;
    this.postOrder(current);
  }
}

const bt = new BinaryTree();
bt.add(5);
bt.add(6);
bt.add(2);
bt.add(1);
bt.add(3);
bt.add(4);
bt.add(8);
bt.add(9);
// console.log(bt);

// console.log(bt.find(3));
// bt.printInOrder();
// bt.printPreOrder();
bt.printPostOrder();
