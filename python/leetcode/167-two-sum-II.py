class Solution:
    def twoSumHashMap(self, numbers: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(numbers)):
            diff = target-numbers[i]
            if diff in hash:
                return [hash[diff], i+1]

            elif numbers[i] not in hash:
                hash[numbers[i]] = i+1


class Solution:
    def twoSumTwoPointers(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers)-1
        
        while left < right:
            if numbers[left] + numbers[right] == target:
                return [left+1, right+1]
            elif numbers[left] + numbers[right] > target:
                right -= 1
            else:
                left += 1
        
        