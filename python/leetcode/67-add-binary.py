from collections import deque


class Solution:
    def addBinary(self, a: str, b: str) -> str:

        digits_a = [int(ch) for ch in a]
        digits_b = [int(ch) for ch in b]

        carry = 0
        res = deque()

        while digits_a or digits_b:
            result = carry
            if digits_a:
                result += digits_a.pop()
            if digits_b:
                result += digits_b.pop()

            res.appendleft(result % 2)
            carry = result // 2

        if carry:
            res.appendleft(carry)

        return "".join([str(x) for x in list(res)])
