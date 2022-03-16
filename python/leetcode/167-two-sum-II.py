class Solution:
    def twoSumHashMap(self, numbers: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(numbers)):
            diff = target-numbers[i]
            if diff in hash:
                return [hash[diff], i+1]

            elif numbers[i] not in hash:
                hash[numbers[i]] = i+1
