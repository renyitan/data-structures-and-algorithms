from linkedlist import LinkedList
import math


def delete_middle_node(ll):
    runner = current = ll.head
    previous = None
    # start from negative index for 0-based linked-list
    runner_counter, current_counter = 0, 0

    while runner:
        runner = runner.next
        runner_counter += 1

    if runner_counter < 3:
        print("list not long enough")
        return

    delete_index = math.floor((runner_counter-1) / 2)

    while current:
        if(current_counter == delete_index):

            previous.next = current.next
        current_counter += 1
        previous = current
        current = current.next


if __name__ == "__main__":
    ll = LinkedList()
    ll.append('a')
    ll.append('b')
    ll.append('c')
    ll.append('d')
    # ll.append('e')
    # ll.append('f')
    print(ll)
    delete_middle_node(ll)
    print(ll)
