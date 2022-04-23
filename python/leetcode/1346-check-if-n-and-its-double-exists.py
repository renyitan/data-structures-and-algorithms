class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        hash = {}
        for num in arr:
            if (num/2) in hash or (num*2) in hash:
                return True
            else:
                hash[num] = 1
        return False
