class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        output = []
        def backtrack(first=1, curr=[]):
            # if combination is done
            if len(curr) == k:
                output.append(curr.copy())
            
            for i in range(first, n+1):
                curr.append(i)
                backtrack(i+1, curr)
                curr.pop()
            
        backtrack()
        return output
                
            
            