
from array import array
from binarytree import BinaryTree


def array_to_binary_tree(arr: list, arr_start: int, arr_end: int, binary_tree: BinaryTree):
    if arr_start > arr_end:
        return None
    mid = (arr_start+arr_end) // 2

    binary_tree.insert(arr[mid])

    array_to_binary_tree(arr, arr_start, mid-1, binary_tree)
    array_to_binary_tree(arr, mid+1, arr_end, binary_tree)

    return binary_tree


if __name__ == "__main__":
    bt = BinaryTree()

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 22, 43, 144, 515, 4123]

    new_bt = array_to_binary_tree(arr, 0, len(arr)-1, bt)
    new_bt.show()
