class MinHeap {
  constructor() {
    this.items = [];
  }

  add(value) {
    this.items[this.items.length] = value;

    this.heapifyUp();
  }

  extractMin() {
    let min = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    // remove last element
    this.items.pop();
    this.heapifyDown();
  }

  _hasLeftItem(index) {
    return this.items[index * 2 + 1] > 0;
  }

  _getLeftItem(index) {
    return this.items[index * 2 + 1];
  }

  _getLeftIndex(index) {
    return index * 2 + 1;
  }

  _getRightIndex(index) {
    return this.items[index * 2 + 2];
  }

  _hasRightItem(index) {
    return this.items[index * 2 + 2] > 0;
  }

  _getRightItem(index) {
    return this.items[index * 2 + 2];
  }

  heapifyDown() {
    let index = 0;

    while (this.items[index * 2 + 1] > 0) {
      let smallerIndex = index * 2 + 1;
      if (
        this.items[index * 2 + 2] > 0 &&
        this.items[index * 2 + 2] < this.items[smallerIndex]
      ) {
        smallerIndex = index * 2 + 2;
      }

      if (this.items[index] < this.items[smallerIndex]) {
        break;
      } else {
        let temp = this.items[index];
        this.items[index] = this.items[smallerIndex];
        this.items[smallerIndex] = temp;
      }

      index = smallerIndex;
    }
  }

  _hasParentItem(index) {
    return this.items[(index - 1) / 2] > 0;
  }

  _getParentItem(index) {
    return this.items[(index - 1) / 2];
  }

  _getParentIndex(index) {
    return (index - 1) / 2;
  }

  heapifyUp() {
    let index = this.items.length - 1;

    while (
      this._hasParentItem(index) &&
      this._getParentItem(index) > this.items[index]
    ) {
      let temp = this.items[this._getParentIndex(index)];
      this.items[this._getParentIndex(index)] = this.items[index];
      this.items[index] = temp;
      index = this._getParentIndex(index);
    }
  }
}

const heap = new MinHeap();

heap.add(4);
heap.add(9);
heap.add(5);
heap.add(8);
heap.add(10);
heap.add(2);
heap.extractMin();
console.log(heap.items);
