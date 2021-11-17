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

  print() {
    console.log(this.adjList);
  }

  bfs(root) {
    let visited = {};
    let results = {};
    let queue = [];
    let levels = [];

    visited[root] = true;
    queue.push(root);
    levels[root] = 0;
    results[levels[root]] = [root];

    while (queue.length > 0) {
      let current = queue.shift();
      let neighbours = this.adjList.get(current);

      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
          levels[neighbour] = levels[current] + 1;
          // add to results
          if (!results[levels[neighbour]]) {
            results[levels[neighbour]] = [neighbour];
          } else {
            results[levels[neighbour]].push(neighbour);
          }
        }
      });
    }
    return results;
  }
}

const g = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach((v) => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');

console.log(g.bfs('A'));
