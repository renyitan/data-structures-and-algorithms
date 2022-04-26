
class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:

        nums = arr.copy()
        nums.sort()

        # create the rank
        rank = 1
        hash = {}
        for num in nums:
            if num not in hash:
                hash[num] = rank
                rank += 1

        for i in range(len(arr)):
            arr[i] = hash[arr[i]]

        return arr
