from collections import deque


def plusOne(digits):
    new_digits = deque()
    carry = 0

    for i in range(len(digits)-1, -1, -1):
        result = carry
        result += digits[i]
        if i == len(digits) - 1:
            result += 1
        new_digits.appendleft(result % 10)
        carry = (result // 10)
        print('result', result)
        print('carry', carry)

    if carry:
        new_digits.appendleft(carry)

    return new_digits


print(plusOne([9]))
