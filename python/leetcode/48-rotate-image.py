class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        ROWS, COLS = len(matrix), len(matrix[0])
        left, right = 0, COLS-1
        
        while left < right:
            for i in range(right-left):
                top, bottom = left, right
                #save the top left
                temp = matrix[top][left+i]
                # move bottom left to top left
                matrix[top][left+i] = matrix[bottom-i][left]
                # move bottom right to bottom left
                matrix[bottom-i][left] = matrix[bottom][right-i]
                # move top right to bottom right
                matrix[bottom][right-i] = matrix[top+i][right]
                # move top left into top right
                matrix[top+i][right] = temp
            right-=1
            left+=1
                
                
            

            
        
            