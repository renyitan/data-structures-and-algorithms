class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:

        new_mat = [[0 for col in range(c)] for row in range(r)]
        ROWS, COLS = len(mat), len(mat[0])

        if ROWS == 0:
            return mat
        if ROWS*COLS != r*c:
            return mat

        i, j = 0, 0

        for row in range(ROWS):
            for col in range(COLS):
                if j >= c:
                    i += 1
                    j = 0
                new_mat[i][j] = mat[row][col]
                j += 1

        return new_mat
