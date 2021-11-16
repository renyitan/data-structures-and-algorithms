class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None

    def show(self):
        print(self.data)


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def add(self, data):
        temp = self.head
        if temp is None:
            self.head = Node(data)
            return
        while temp.next:
            temp = temp.next
        temp.next = Node(data)

    def add_first(self, data):
        new_node = Node(data)
        temp = self.head
        if temp is None:
            self.head = new_node
            return

        new_node.next = temp
        self.head = new_node

    def delete_node(self, key):
        temp = self.head
        #  if head holds the key
        if temp.data == key:
            self.head = temp.next
            temp = None
            return
        while temp:
            if temp.data == key:
                break
            prev = temp
            temp = temp.next

        if temp is None:
            return

        prev.next = temp.next
        temp = None

    def peek(self):
        return (self.head)

    def poll(self):
        first = self.head
        self.head = first.next
        return first

    def pop(self):
        temp = self.head

        while temp.next.next:
            temp = temp.next

        last_node = temp.next
        temp.next = None

        return last_node

    def show_head(self):
        print(self.head)

    def show_all(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def weave(self, l):
        new_l = LinkedList()
        temp_1 = self.head
        temp_2 = l.head

        while temp_1:
            new_l.add(temp_1.data)
            new_l.add(temp_2.data)

            temp_1 = temp_1.next
            temp_2 = temp_2.next

        new_l.show_all()


# Code execution starts here
if __name__ == '__main__':

    l1 = LinkedList()
    l1.add(1)
    l1.add(2)
    l1.add(3)
    l1.add(4)
    l1.add(5)
    l1.add(6)
    l1.add(7)
    l1.add(8)
    l1.add(9)

    l2 = LinkedList()
    l2.add(10)
    l2.add(20)
    l2.add(30)
    l2.add(40)
    l2.add(50)
    l2.add(60)
    l2.add(70)
    l2.add(80)
    l2.add(90)

    # l2.show_all()
    l1.weave(l2)
