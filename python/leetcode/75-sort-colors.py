class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def sort(nums, start, end):
            if len(nums) == 1:
                return nums
            
            if start < end:
                p_index = partition(nums, start, end)
                sort(nums, start, p_index-1)
                sort(nums, p_index+1, end)
                
        def partition(arr, start, end):
            p_index = start
            pivot = arr[end]
            
            for i in range(start, end+1):
                if arr[i] < pivot:
                    arr[i], arr[p_index] = arr[p_index], arr[i]
                    p_index += 1
                
            arr[p_index], arr[end] = arr[end], arr[p_index]
            return p_index
        
        sort(nums, 0, len(nums)-1)
        return nums
        