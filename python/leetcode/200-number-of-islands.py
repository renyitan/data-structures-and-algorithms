class Solution:
    def dfs(self, grid, r, c):
        rows, cols = len(grid), len(grid[0])

        if (r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0'):
            return
        grid[r][c] = '0'
        self.dfs(grid, r+1, c)
        self.dfs(grid, r-1, c)
        self.dfs(grid, r, c+1)
        self.dfs(grid, r, c-1)

    def numIslands(self, grid: List[List[str]]) -> int:
        num_islands = 0

        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == '1':
                    num_islands += 1
                    self.dfs(grid, row, col)

        return num_islands


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        num_islands = 0
        ROWS, COLS = len(grid), len(grid[0])
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        def dfs(r, c):
            if r < 0 or r >= ROWS or c < 0 or c >= COLS or grid[r][c] != "1":
                return
            grid[r][c] = "0"
            for dr, dc in directions:
                nr, nc = r+dr, c+dc
                dfs(nr, nc)

        for row in range(ROWS):
            for col in range(COLS):
                if grid[row][col] == "1":
                    num_islands += 1
                    dfs(row, col)
        return num_islands
