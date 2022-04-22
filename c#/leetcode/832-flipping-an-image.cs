public class Solution
{
  public int[][] FlipAndInvertImage(int[][] image)
  {
    // flip image
    for (int i = 0; i < image.Length; i++)
    {
      image[i] = image[i].Reverse().ToArray();
    }
    for (int i = 0; i < image.Length; i++)
    {
      for (int j = 0; j < image[0].Length; j++)
      {
        image[i][j] = Convert.ToBoolean(image[i][j]) ? 0 : 1;
      }
    }

    return image;
  }
}
