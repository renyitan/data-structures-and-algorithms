class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        ROWS, COLS = len(matrix), len(matrix[0])

        if ROWS == 0 or COLS == 0:
            return False

        r, c = ROWS-1, 0

        while r >= 0 and c < COLS:
            if target < matrix[r][c]:
                r -= 1
            elif target > matrix[r][c]:
                c += 1
            else:
                return True

        return False
