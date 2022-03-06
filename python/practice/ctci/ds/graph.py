

class Graph:
    def __init__(self):
        self.graph = {}

    def add_vertex(self, vertex):
        if vertex in self.graph:
            print(f"Vertex {vertex} already exists")
        self.graph[vertex] = []

    def add_edge(self, v1, v2):
        self.graph[v1].append(v2)
        self.graph[v2].append(v1)


if __name__ == "__main__":
    g = Graph()
    for v in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'O']:
        g.add_vertex(v)

    g.add_edge('A', 'B')
    g.add_edge('A', 'C')
    g.add_edge('B', 'D')
    g.add_edge('C', 'D')
    g.add_edge('C', 'E')
    g.add_edge('E', 'F')
    g.add_edge('F', 'G')
    g.add_edge('F', 'O')
    g.add_edge('F', 'I')
    g.add_edge('G', 'H')
    g.add_edge('I', 'J')
    g.add_edge('J', 'K')
    g.add_edge('J', 'L')

    print(g.graph)
