// https://www.geeksforgeeks.org/implementation-graph-javascript/
class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w); // vertex w denotes edge between v and w

    // for undirected graph, add edge between w to v as well
    this.adjList.get(w).push(v);
  }

  printGraph() {
    this.adjList.forEach((edges, vertex) => {
      console.log(`${vertex} => ${edges}`);
    });
  }

  bfs(root) {
    let visited = {};
    let queue = [];

    // initialise the queue with root vertex
    visited[root] = true;
    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      // for now just print out
      console.log(current);

      // get current's neighbours
      let neighbours = this.adjList.get(current);
      // push them to the queue
      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
  }

  printLevelsUsingBFS(root) {
    let visited = {};
    let queue = [];
    let levels = [];

    // initialise the queue with root vertex
    visited[root] = true;
    queue.push(root);
    levels[root] = 0;

    while (queue.length > 0) {
      let current = queue.shift();
      // for now just print out
      console.log(`level: ${levels[current]} - ${current}`);

      // get current's neighbours
      let neighbours = this.adjList.get(current);
      // push them to the queue
      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);

          // level of neighbour = level of current + 1
          levels[neighbour] = levels[current] + 1;
        }
      });
    }
  }

  dfs(root) {
    let visited = {};
    this.dfTraverse(root, visited);
  }

  dfTraverse(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    let neighbours = this.adjList.get(vert);
    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        this.dfTraverse(neighbour, visited);
      }
    });
  }
}

const graph = new Graph();

const VERTICIES = ['A', 'B', 'C', 'D', 'E', 'F'];
VERTICIES.forEach((v) => graph.addVertex(v));

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('C', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

// graph.printGraph();

// graph.bfs('A');
graph.printLevelsUsingBFS('A');
graph.dfs('A');
