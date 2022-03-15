

class MinHeap():
    def __init__(self):
        self.items = [4, 5, 7, 55, 90, 87]

    """
    Main Functions
    """

    def insert(self, value):
        # insert to back of items list
        self.items.append(value)
        self._heapify_up()
        pass

    def extract_min(self):
        min = self.items[0]
        self.items[0] = self.items[-1]
        self.items.pop()
        self._heapify_down()
        return min

    def _heapify_up(self):
        current_index = len(self.items) - 1

        while self._has_parent(current_index) and self.items[current_index] < self._get_parent(current_index):

            self.items[current_index], self.items[self._get_parent_index(
                current_index)] = self.items[self._get_parent_index(current_index)], self.items[current_index]

            current_index = self._get_parent_index(current_index)

    def _heapify_down(self):
        current_index = 0

        while self._has_left_child(current_index):
            smaller_index = self._get_left_child_index(current_index)

            if self._has_right_child(current_index) and self._get_right_child(current_index) < self.items[smaller_index]:
                smaller_index = self._get_right_child_index(current_index)

            if self.items[current_index] < self.items[smaller_index]:
                break
            else:
                self.items[current_index], self.items[smaller_index] = self.items[smaller_index], self.items[current_index]

            current_index = smaller_index

    """
    Print Functions
    """

    def show(self):
        print(self.items)

    """
    Helper Functions
    """

    def _get_left_child(self, current_index):
        return self.items[self._get_left_child_index(current_index)]

    def _get_right_child(self, current_index):
        return self.items[self._get_right_child_index(current_index)]

    def _get_parent(self, current_index):
        return self.items[self._get_parent_index(current_index)]

    def _get_parent_index(self, current_index):
        return int((current_index - 1) / 2)

    def _get_left_child_index(self, current_index):
        return 2 * current_index + 1

    def _get_right_child_index(self, current_index):
        return 2 * current_index + 2

    def _has_parent(self, current_index):
        if current_index == 0:
            return False
        return self.items[self._get_parent_index(current_index)] > 0

    def _has_left_child(self, current_index):
        left_child_index = self._get_left_child_index(current_index)
        return self.items[left_child_index] > 0 if left_child_index < len(self.items) - 1 else False

    def _has_right_child(self, current_index):
        right_child_index = self._get_right_child_index(current_index)
        return self.items[right_child_index] > 0 if right_child_index < len(self.items) - 1 else False


if __name__ == "__main__":
    heap = MinHeap()
    heap.insert(2)
    heap.extract_min()
    heap.show()
