class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []
        rows, cols = len(matrix), len(matrix[0])
        top = left = 0
        right = cols - 1
        bottom = rows - 1

        while len(result) < rows * cols:
            # first row (left to right)
            for col in range(left, right + 1):
                result.append(matrix[top][col])

            # last col (downwards)
            for row in range(top+1, bottom+1):
                result.append(matrix[row][right])

            # last row (right to left)
            if top != bottom:
                for col in range(right-1, left-1, -1):
                    result.append(matrix[bottom][col])

            # first col
            if left != right:
                for row in range(bottom-1, top, -1):
                    result.append(matrix[row][left])

            # increase right, left, top, bottom
            left += 1
            right -= 1
            top += 1
            bottom -= 1

        return result
