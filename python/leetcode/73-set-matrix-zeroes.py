from collections import defaultdict


class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows, cols = len(matrix), len(matrix[0])

        original_zeroes = []
        seen = defaultdict()

        def set_to_zeroes(target_row, target_col):
            # set row to zeroes
            for i in range(0, cols):
                if matrix[target_row][i] not in seen:
                    matrix[target_row][i] = 0
                    seen[(target_row, i)] = 1

            # set cols to zeroes
            for i in range(0, rows):
                if matrix[i][target_col] not in seen:
                    matrix[i][target_col] = 0
                    seen[(i, target_col)] = 1

        for row in range(len(matrix)):
            for col in range(len(matrix[row])):
                if matrix[row][col] == 0:
                    original_zeroes.append((row, col))

        for zeroes in original_zeroes:
            row, col = zeroes
            set_to_zeroes(row, col)
