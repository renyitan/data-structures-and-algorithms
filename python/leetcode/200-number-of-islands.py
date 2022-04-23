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
