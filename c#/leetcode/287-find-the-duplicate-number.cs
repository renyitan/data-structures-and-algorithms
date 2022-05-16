public class Solution
{
  public int FindDuplicate(int[] nums)
  {
    int duplicate = 0;
    foreach (var num in nums)
    {
      int current = Math.Abs(num);
      if (nums[current] < 0)
      {
        duplicate = current;
        break;
      }
      nums[current] *= -1;
    }
    return duplicate;
  }
}