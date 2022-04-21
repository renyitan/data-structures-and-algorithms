class Solution:
    def maxArea(self, height: List[int]) -> int:
        n = len(height)
        if n == 0: return 0
        
        most_water = 0
        
        l,r = 0, n-1
        
        while l < r:
            ly, ry = height[l], height[r]
            y = min(ly, ry)
            x = r - l
            water = x*y
            most_water = max(water, most_water)
            
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        
        return most_water
        
        
        