class Solution:
    def sumZero(self, n: int) -> List[int]:

        if n <= 1:
            return [0]

        res = []

        if n % 2 == 0:
            n //= 2
            for i in range(1, n+1):
                res.append(i)
                res.append(i*-1)
        else:
            n -= 1
            res.append(0)
            n //= 2
            for i in range(1, n+1):
                res.append(i)
                res.append(i*-1)
        return res
