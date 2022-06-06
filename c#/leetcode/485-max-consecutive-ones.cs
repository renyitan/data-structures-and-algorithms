public class Solution
{
  public int FindMaxConsecutiveOnes(int[] nums)
  {
    int longest = 0;
    int left = 0;

    for (int right = 0; right < nums.Length; right++)
    {
      if (nums[right] == 0)
      {
        left = right + 1;
        continue;
      }
      longest = Math.Max(longest, right - left + 1);
    }
    return longest;
  }
}