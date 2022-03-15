from linkedlist import LinkedList


def remove_dups(ll):
    current = ll.head
    previous = None
    seen = set()

    while current:
        if current.value in seen:
            previous.next = current.next
        else:
            seen.add(current.value)
            previous = current
        current = current.next

    return ll


if __name__ == "__main__":
    ll = LinkedList()
    ll = LinkedList()
    ll.append(5)
    ll.append(5)
    ll.append(6)
    ll.append(6)
    ll.append(7)
    remove_dups(ll)
    print(ll)
