from linkedlist import LinkedList


def kth_to_last(ll: LinkedList, k: int):
    if ll.head is None:
        print('linked list is empty')
    else:
        current = ll.head
        current_index = 0
        while current:
            if current_index >= k:
                print(current.value)
            current = current.next
            current_index += 1


if __name__ == "__main__":
    ll = LinkedList()
    ll.append(5)
    ll.append(5)
    ll.append(6)
    ll.append(6)
    ll.append(7)
    kth_to_last(ll, 3)
