public class Solution
{
  public int ClimbStairs(int n)
  {
    if (n == 1 || n == 2)
    {
      return n;
    }

    int[] stairs = new int[n + 1];

    stairs[0] = 0;
    stairs[1] = 1;
    stairs[2] = 2;

    for (int i = 3; i < stairs.Length; i++)
    {
      stairs[i] = stairs[i - 1] + stairs[i - 2];
    }

    return stairs[n];
  }
}