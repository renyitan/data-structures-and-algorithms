from ds.binary_tree import BinaryTree, Node


def check_balance(bt: BinaryTree):
    diff_treshold = 2
    if bt.root is None:
        return True
    max_left = _get_max_depth(bt.root.left, 0)
    max_right = _get_max_depth(bt.root.right, 0)
    return True if abs(max_left - max_right) <= diff_treshold else False


def _get_max_depth(node: Node, level: int):
    if node is None:
        return level
    else:
        left_depth = _get_max_depth(node.left, level+1)
        right_depth = _get_max_depth(node.right, level+1)
        return left_depth if left_depth > right_depth else right_depth


if __name__ == "__main__":
    bt_balance = BinaryTree()

    bt_balance = BinaryTree()
    bt_balance.add(20)
    bt_balance.add(9)
    bt_balance.add(25)
    bt_balance.add(5)
    bt_balance.add(12)
    bt_balance.add(11)
    bt_balance.add(14)

    bt_unbalanced = BinaryTree()
    bt_unbalanced.add(1)
    bt_unbalanced.add(2)
    bt_unbalanced.add(3)
    bt_unbalanced.add(4)
    bt_unbalanced.add(5)
    bt_unbalanced.add(6)

    print(check_balance(bt_balance))  # True
    print(check_balance(bt_unbalanced))  # False
