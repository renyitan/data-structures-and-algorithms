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
  }

  addArrayMinHeight(nums) {
    let mid = (nums.length - 1) / 2;
    this.add(nums[mid]);
    for (let i = 0; i < nums.length; i++) {
      if (i === mid) continue;
      this.add(nums[i]);
    }
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
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(target) {
    let current = this.root;
    while (current) {
      if (current.value === target) return true;
      if (target < current.value) current = current.left;
      if (target > current.value) current = current.right;
    }
    return false;
  }

  inOrder() {
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
}

const bt = new BinaryTree();
bt.addArrayMinHeight([1, 2, 3, 4, 5, 6, 7]);
// bt.add(4);
// bt.add(1);
// bt.add(5)
// console.log(bt.root);
console.log(bt.search(8));
