public class Solution
{
  public int NumIslands(char[][] grid)
  {
    int numIslands = 0;
    for (int i = 0; i < grid.Length; i++)
    {
      for (int j = 0; j < grid[0].Length; j++)
      {
        if (grid[i][j] == '1')
        {
          numIslands++;
          dfs(grid, i, j);
        }
      }
    }
    return numIslands;
  }

  public void dfs(char[][] grid, int r, int c)
  {ds
    int rows = grid.Length, cols = grid[0].Length;

    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == '0')
    {
      return;
    }

    grid[r][c] = '0';
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  }
}