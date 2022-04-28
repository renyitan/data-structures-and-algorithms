class Solution:
    def countBits(self, n: int) -> List[int]:
        res = []
        for i in range(n+1):
            b = i
            count = 0
            while b:
                if (b & 1):
                    count += 1
                b >>= 1

            res.append(count)
        return res
