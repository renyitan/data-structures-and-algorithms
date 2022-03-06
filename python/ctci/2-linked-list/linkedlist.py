from os import link
from re import L
from tkinter import E

from pip import main


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def __str__(self):
        return f"value: {str(self.value)}"


class LinkedList:
    def __init__(self):
        self.head = None

    def __str__(self):

        if self.head is None:
            print("linked list is empty")
            return

        current = self.head
        message = ""
        while current:
            message += f"{current.value}"
            if current.next is not None:
                message += f" -> "
            current = current.next
        return message

    def from_list(self, l):
        for item in l:
            self.append(item)

    def append(self, value):
        if self.head is None:
            self.head = Node(value)
            return

        current = self.head
        while current.next:
            current = current.next
        current.next = Node(value)

    def prepend(self, value):
        if self.head is None:
            self.head = Node(value)
        else:
            new_node = Node(value)
            new_node.next = self.head
            self.head = new_node

    def size(self):
        if self.head is None:
            return 0
        else:
            size = 0
            current = self.head
            while current:
                size += 1
                current = current.next
            return size

    def remove_by_index(self, remove_index):
        # check if remove_index out of range
        if remove_index > self.size() - 1:
            print("remove index out of range")
            return

        # check if linked list is empty
        if self.head is None:
            return None

        current_index = 0

        # check we should remove head
        if current_index == remove_index:
            temp = self.head
            self.head = self.head.next
            del temp
            return

        # iterate through list to index and remove Node
        current = self.head
        while current:
            if current_index + 1 == remove_index:
                temp = current.next
                current.next = current.next.next

            current = current.next
            current_index += 1
