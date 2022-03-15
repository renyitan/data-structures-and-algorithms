from asyncio import FastChildWatcher
from linkedlist import LinkedList


def check_palindrome(ll: LinkedList):
    runner = current = ll.head
    stack = []

    while runner and runner.next:
        stack.append(current.value)
        current = current.next
        runner = runner.next.next

    if runner:
        current = current.next

    while current:
        top = stack.pop()

        if top != current.value:
            return False
        current = current.next

    return True


if __name__ == "__main__":
    ll = LinkedList()
    ll.from_list(['a', 'b', 'c', 'b', 'a'])
    print(check_palindrome(ll))
