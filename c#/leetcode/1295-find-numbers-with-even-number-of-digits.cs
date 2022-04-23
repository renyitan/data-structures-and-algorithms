

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

  public int FindNumbersLinQ(int[] nums)
  {
    int numEven = 0;

    int results = nums.Select(x => Convert.ToString(x).ToCharArray()).Where(x => x.Length % 2 == 0).Count();

    return results;
  }
}

