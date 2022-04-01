class Solution:

    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        max_area = 0

        def dfs(r, c, a):
            if r < 0 or r >= ROWS or c < 0 or c >= COLS or grid[r][c] == 0:
                return a
            grid[r][c] = 0
            return a + 1 + dfs(r+1, c, a) + dfs(r-1, c, a) + dfs(r, c-1, a) + dfs(r, c+1, a)

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    area = dfs(r, c, 0)
                    max_area = max(area, max_area)

        return max_area
