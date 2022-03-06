from collections import deque


class Node:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None
        self.size = 0

    def insert(self, value):
        new_node = Node(value)

        # binary tree has no root
        if self.root is None:
            self.root = new_node
            self.size += 1
            return

        current = self.root

        while current:
            if value <= current.value:
                if current.left is None:
                    current.left = new_node
                    self.size += 1
                    return
                else:
                    current = current.left

            if value >= current.value:
                if current.right is None:
                    current.right = new_node
                    self.size += 1
                    return
                else:
                    current = current.right

    def show(self):
        if self.root is None:
            return
        queue = deque()
        queue.append(self.root)

        while len(queue) > 0:
            current_node = queue.popleft()
            print(current_node.value)

            if current_node.left is not None:
                queue.append(current_node.left)
            if current_node.right is not None:
                queue.append(current_node.right)


if __name__ == "__main__":
    bt = BinaryTree()
    bt.insert(5)
    bt.insert(2)
    bt.insert(6)
    bt.insert(1)
    bt.insert(3)
    bt.insert(4)

    bt.show()
