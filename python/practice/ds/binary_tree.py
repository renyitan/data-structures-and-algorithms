import random


class Node:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BinaryTree:
    def __init__(self, root=None):
        self.root = root

    def add(self, value):
        # if binary tree has no root node
        if self.root is None:
            new_node = Node(value)
            self.root = new_node
            return

        current = self.root

        while current:
            if value <= current.value:
                if current.left is None:
                    current.left = Node(value)
                    return
                else:
                    current = current.left

            if value >= current.value:
                if current.right is None:
                    current.right = Node(value)
                    print(current.right)
                    return
                else:
                    current = current.right

    def print_in_order(self):
        current = self.root
        self._in_order(current)

    def _in_order(self, node):
        if node is not None:
            self._in_order(node.left)
            print(node.value)
            self._in_order(node.right)

    def print_pre_order(self):
        current = self.root
        self._pre_order(current)

    def _pre_order(self, node):
        if node is None:
            return
        if node is not None:
            print(node.value)
            self._pre_order(node.left)
            self._pre_order(node.right)

    def print_post_order(self):
        current = self.root
        self._post_order(current)

    def _post_order(self, node):
        if node:
            self._post_order(node.left)
            self._post_order(node.right)
            print(node.value)


bt = BinaryTree()
bt.add(5)
bt.add(6)
bt.add(2)
bt.add(1)
bt.add(3)
bt.add(4)


bt.print_in_order()
print('======')
bt.print_pre_order()
print('======')
bt.print_post_order()