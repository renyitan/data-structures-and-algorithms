from graph import Graph

if __name__ == "__main__":
    g = Graph()
    for v in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'O', 'P', 'Q', 'R']:
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
    # isolated vertex
    g.add_edge('P', 'Q')
    g.add_edge('P', 'R')
    g.add_edge('R', 'Q')


    print(g.find_path('A', 'P'))

    # print(g.graph)
