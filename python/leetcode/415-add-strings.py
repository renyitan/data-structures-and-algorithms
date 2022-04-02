from collections import deque
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        n1 = list(num1)
        n2 = list(num2)
        carry = 0
        d = deque()
        
        while len(n1) > 0 or len(n2) > 0:
            d1 = n1.pop() if len(n1) > 0 else 0
            d2 = n2.pop() if len(n2) > 0 else 0
            
            res = int(d1) + int(d2) + carry
            carry = res // 10
            res = res % 10
            d.appendleft(str(res))
        
        if carry:
            d.appendleft(str(carry))
        
        return "".join(d)
            
        
            
        