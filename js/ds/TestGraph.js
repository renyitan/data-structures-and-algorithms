class Graph {
  constructor(numVertices) {
    this.adjList = new Map();
    this.numVertices = 0;
  }

  add(v) {
    this.adjList.set(v, []);
    this.numVertices++;
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  print() {
    console.log(this.adjList);
  }

  bfs(root) {
    let visited = {};
    let queue = [];

    // initialise root as visited
    visited[root] = true;
    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);

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
    this._dfsTraverse(root, visited);
  }
  _dfsTraverse(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    let neighbours = this.adjList.get(vertex);
    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        this._dfsTraverse(neighbour, visited);
      }
    });
  }
}

const g = new Graph();
const VERTICES = ['A', 'B', 'C', 'D', 'E', 'F'];
VERTICES.forEach((v) => g.add(v));
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'C');
g.addEdge('D', 'E');
g.addEdge('C', 'F');

// g.print();
// g.bfs('A');
g.dfs('A');
