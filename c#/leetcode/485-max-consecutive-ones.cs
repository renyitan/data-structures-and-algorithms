public class Solution
{
  public int FindMaxConsecutiveOnes(int[] nums)
  {
    int longest = 0;
    int current = 0;

    for (int i = 0; i < nums.Length; i++)
    {
      if (nums[i] == 1)
      {
        current++;
        longest = Math.Max(longest, current);
      }
      else
      {
        current = 0;
      }
    }
    return longest;
  }

}