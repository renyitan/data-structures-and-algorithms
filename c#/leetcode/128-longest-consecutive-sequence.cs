public class Solution
{
  public int LongestConsecutive(int[] nums)
  {
    var numSet = new HashSet<int>(nums);
    int longest = 0;

    foreach (int num in nums)
    {
      int current = num;
      int length = 1;
      if (numSet.Contains(current - 1))
      {
        continue;
      }
      else
      {
        while (numSet.Contains(current + 1))
        {
          current++;
          length++;
        }
        longest = Math.Max(longest, length);
      }

    }
    return longest;

  }
}