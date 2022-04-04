class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n = list(str(n))        
        return math.prod([int(x) for x in n]) - sum([int(x) for x in n])