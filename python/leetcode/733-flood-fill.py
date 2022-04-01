class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:

        ROWS, COLS = len(image), len(image[0])
        color = image[sr][sc]

        if image[sr][sc] == newColor:
            return image

        def fill(r, c):
            if r < 0 or r >= ROWS or c < 0 or c >= COLS:
                return
            elif image[r][c] == color:
                image[r][c] = newColor
                fill(r+1, c)
                fill(r-1, c)
                fill(r, c+1)
                fill(r, c-1)

        fill(sr, sc)
        return image
