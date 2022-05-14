public class Solution
{
  public int FindMaxConsecutiveOnes(int[] nums)
  {
    int left = 0;
    int longest = 0;
    int zeroes = 0;

    for (int right = 0; right < nums.Length; right++)
    {
      if (nums[right] == 0)
      {
        zeroes++;
      }

      while (zeroes > 1)
      {
        if (nums[left] == 0)
        {
          zeroes--;
        }
        left++;
      }
      longest = Math.Max(longest, right - left + 1);
    }
    return longest;
  }
}