public class Solution
{
  public int[][] FloodFill(int[][] image, int sr, int sc, int newColor)
  {
    int currentColor = image[sr][sc];
    if (image[sr][sc] == newColor)
    {
      return image;
    }
    fill(image, sr, sc, currentColor, newColor);
    return image;
  }

  public void fill(int[][] image, int r, int c, int currentColor, int newColor)
  {
    int ROWS = image.Length, COLS = image[0].Length;

    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || image[r][c] != currentColor)
    {
      return;
    }
    image[r][c] = newColor;
    fill(image, r, c + 1, currentColor, newColor);
    fill(image, r, c - 1, currentColor, newColor);
    fill(image, r + 1, c, currentColor, newColor);
    fill(image, r - 1, c, currentColor, newColor);
  }

}