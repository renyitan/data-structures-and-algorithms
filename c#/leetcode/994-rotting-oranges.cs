public class Solution
{
  public int OrangesRotting(int[][] grid)
  {
    int fresh = 0, time = 0;
    var queue = new Queue<(int r, int c)>();
    int ROWS = grid.Length;
    int COLS = grid[0].Length;

    for (int row = 0; row < grid.Length; row++)
    {
      for (int col = 0; col < grid[0].Length; col++)
      {
        if (grid[row][col] == 1)
        {
          fresh++;
        }
        if (grid[row][col] == 2)
        {
          queue.Enqueue((row, col));
        }
      }
    }

    int[][] directions = new int[][]{
      new int[]{1,0},
      new int[]{-1,0},
      new int[]{0,1},
      new int[]{0,-1}
    };

    while (queue.Count > 0 && fresh > 0)
    {
      int size = queue.Count;
      for (int s = 0; s < size; s++)
      {
        (int r, int c) = queue.Dequeue();

        foreach (var direction in directions)
        {
          int nr = r + direction[0];
          int nc = c + direction[1];

          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] != 1)
          {
            continue;
          }

          grid[nr][nc] = 2;
          fresh -= 1;
          queue.Enqueue((nr, nc));
        }

      }
      time++;
    }
    return fresh == 0 ? time : -1;
  }
}