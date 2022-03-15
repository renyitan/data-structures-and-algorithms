from linkedlist import LinkedList
import math


def sum_list(ll_1: LinkedList, ll_2: LinkedList):
    current_1, current_2 = ll_1.head, ll_2.head
    sum_ll = LinkedList()
    carry = 0

    while current_1 or current_2:
        result = carry
        if current_1:
            result += current_1.value
            current_1 = current_1.next
        if current_2:
            result += current_2.value
            current_2 = current_2.next
        sum_ll.append(result % 10)
        carry = result // 10

    if carry:
        sum_ll.append(carry)

    print(sum_ll)


if __name__ == "__main__":
    ll_1 = LinkedList()
    ll_1.append(7)
    ll_1.append(1)
    ll_1.append(6)
    print(ll_1)
    ll_2 = LinkedList()
    ll_2.append(5)
    ll_2.append(9)
    ll_2.append(2)
    print(ll_2)

    sum_list(ll_1, ll_2)
