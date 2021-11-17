class Graph {
  constructor() {
    this.numVertices = 0;
    this.adjList = new Map();
  }
  add(v) {
    this.numVertices++;
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  print() {
    console.log(this.adjList);
  }

  bfs(root, target) {
    if (root === target) return true;
    let visited = {};
    let queue = [];

    // initialise starting point
    visited[root] = true;
    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();

      if (current === target) return true;
      else {
        let neighbours = this.adjList.get(current);
        neighbours.forEach((neighbour) => {
          if (!visited[neighbour]) {
            visited[neighbour];
            queue.push(neighbour);
          }
        });
      }
    }
    return false;
  }

  dfs(root, target) {
    if (root === target) return true;
    let visited = {};
    return this._dfsTraverse(root, target, visited);
    // return false;
  }

  _dfsTraverse(vertex, target, visited) {
    if (vertex === target) return true;
    let neighbours = this.adjList.get(vertex);
    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        return this._dfsTraverse(neighbour, target, visited);
      }
    });
  }
}

const g = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach((v) => g.add(v));

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('C', 'D');
g.addEdge('C', 'F');
g.addEdge('D', 'E');

// g.print();
// console.log(g.bfs('E', 'F'));
console.log(g.dfs('A', 'E'));
