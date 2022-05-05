import math
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:

        ROWS, COLS = len(mat), len(mat[0])

        for row in range(ROWS):
            for col in range(COLS):
                if mat[row][col] > 0:
                    top = mat[row-1][col] if row > 0 else math.inf
                    left = mat[row][col-1] if col > 0 else math.inf
                    mat[row][col] = min(top, left) + 1

        for row in range(ROWS-1, -1, -1):
            for col in range(COLS-1, -1, -1):
                if mat[row][col] > 0:
                    bottom = mat[row+1][col] if row < ROWS-1 else math.inf
                    right = mat[row][col+1] if col < COLS-1 else math.inf
                    mat[row][col] = min(mat[row][col], bottom+1, right+1)
        return mat
