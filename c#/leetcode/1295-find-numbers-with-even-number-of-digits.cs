

public class Solution
{
  public int FindNumbers(int[] nums)
  {
    int evenCount = 0;
    foreach (int num in nums)
    {
      if (Convert.ToString(num).ToCharArray().Length % 2 == 0)
      {
        evenCount += 1;
      }
    }

    return evenCount;
  }
}
