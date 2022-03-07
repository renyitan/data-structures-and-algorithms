from ds.binary_tree import BinaryTree, Node
from ds.linked_list import LinkedList
from collections import deque


def create_list_by_depth(bt: BinaryTree):

    levels, queue = {}, deque()
    queue.append((bt.root, 0))

    while len(queue) > 0:
        node, level = queue.popleft()
        print(node.value, level)

        if level not in levels:
            levels[level] = []

        levels[level].append(node)

        if node.left is not None:
            queue.append((node.left, level + 1))
        if node.right is not None:
            queue.append((node.right, level + 1))

    return levels


if __name__ == "__main__":
    # pass

    bt = BinaryTree()

    bt.add(5)
    bt.add(2)
    bt.add(6)
    bt.add(1)
    bt.add(3)
    bt.add(4)
    # bt.show()

    print(create_list_by_depth(bt))
