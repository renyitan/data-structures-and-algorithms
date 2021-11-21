class MinHeap {
  constructor() {
    this.data = [];
  }

  add(value) {
    if (this.data.length < 1) {
      this.data.push(value);
    } else {
      this.data.push(value);
      this._heapifyUp();
    }
  }

  extractMin(value) {
    if (this.data.length < 1) {
      return null;
    }
    if (this.data.length === 1) {
      return this.data[0];
    }
    let min = this.data[0];
    let end = this.data.pop();
    this.data[0] = end;

    this._heapifyDown();

    return min;
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  _hasParent(index) {
    return this.data[Math.floor((index - 1) / 2)] > 0;
  }

  _getParent(index) {
    let parentIndex = this._getParentIndex(index);
    return this.data[parentIndex];
  }

  _heapifyUp() {
    let index = this.data.length - 1;

    while (
      this._hasParent(index) &&
      this.data[index] < this._getParent(index)
    ) {
      let temp = this.data[index];
      this.data[index] = this.data[this._getParentIndex(index)];
      this.data[this._getParentIndex(index)] = temp;
      index = this._getParentIndex(index);
    }
  }

  _getLeftIndex(index) {
    return index * 2 + 1;
  }

  _hasLeft(index) {
    return this.data[index * 2 + 1] > 0;
  }

  _getLeft(index) {
    let leftIndex = this._getLeftIndex(index);
    return this.data[leftIndex];
  }

  _hasRight(index) {
    return this.data[index * 2 + 2] > 0;
  }

  _getRightIndex(index) {
    return index * 2 + 2;
  }

  _getRight(index) {
    let rightIndex = this._getRightIndex(index);
    return this.data[rightIndex];
  }

  _heapifyDown() {
    let index = 0;
    while (this._hasLeft(index)) {
      let smallerIndex = this._getLeftIndex(index);

      if (
        this._hasRight(index) &&
        this._getRight(index) < this.data[smallerIndex]
      ) {
        smallerIndex = this._getRightIndex(index);
      }

      if (this.data[index] < this.data[smallerIndex]) {
        break;
      }

      let temp = this.data[index];
      this.data[index] = this.data[smallerIndex];
      this.data[smallerIndex] = temp;

      index = smallerIndex;
    }
  }
}

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  bfs(root) {
    let visited = {};
    let queue = [];

    visited[root] = true;
    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      // get neighbours
      let neighbours = this.adjList.get(current);
      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
  }

  dfs(root) {
    let visited = {};
    this.dfsTraverse(root, visited);
  }

  dfsTraverse(node, visited) {
    visited[node] = true;
    console.log(node)
  

    let neighbours = this.adjList.get(node);
  
    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        return this.dfsTraverse(neighbour, visited);
      }
    });
  }
}

// const heap = new MinHeap();
// heap.add(5);
// heap.add(2);
// heap.add(7);
// heap.add(3);
// heap.add(1)
// heap.extractMin();
// console.log(heap);

const graph = new Graph();
const VERTICES = ['A', 'B', 'C', 'D', 'E', 'F'];
VERTICES.forEach((v) => graph.addVertex(v));

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('C', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
// graph.bfs('A');
graph.dfs('A');
// console.log(graph);
