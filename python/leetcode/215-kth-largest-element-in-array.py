import heapq


class Solution:
    def findKthLargestHeap(self, nums: List[int], k: int) -> int:

        heapq.heapify(nums)
        return heapq.nlargest(k, nums)[-1]
class Solution:
    def findKthLargestQuickSelect(self, nums: List[int], k: int) -> int:
        return self.select(nums, k, 0, len(nums)-1)
    
    def select(self, nums, k, start, end):
        
        target_index = len(nums) - k
        
        if start == end:
            return nums[start]
        
        p_index = self.partition(nums, start, end)
        
        if p_index == target_index:
            return nums[target_index]
        elif target_index < p_index:
            return self.select(nums, k, start, p_index-1)
        else:
            return self.select(nums, k, p_index+1, end)
    
    
    def partition(self, nums, start, end):
        
        
        p_index = start
        pivot = nums[end]
        
        for i in range(start, end):
            if nums[i] < pivot:
                nums[p_index], nums[i] = nums[i], nums[p_index]
                p_index+=1
        
        nums[p_index], nums[end] = nums[end], nums[p_index]
        return p_index
    
    
        
    
        