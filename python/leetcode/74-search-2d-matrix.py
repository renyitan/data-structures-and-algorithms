class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        m, n = len(matrix), len(matrix[0])
        # row = idx // n
        # col = idx % n
        left, right = 0, m*n-1
        while left <= right:
            mid_idx = (left+right)//2
            mid_val = matrix[mid_idx // n][mid_idx % n]
            if target == mid_val:
                return True
            else:
                if target < mid_val:
                    right = mid_idx - 1
                else:
                    left = mid_idx + 1
        return False
