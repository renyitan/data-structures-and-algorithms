public class Solution
{
  public int LongestOnes(int[] nums, int k)
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

      while (zeroes > k)
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