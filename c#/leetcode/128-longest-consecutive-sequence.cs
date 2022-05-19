public class Solution
{
  public int LongestConsecutive(int[] nums)
  {
    int longest = 0;
    var numSet = new HashSet<int>(nums);

    foreach (var num in nums)
    {
      int current = num;
      int currentLongest = 1;
      if (!numSet.Contains(current - 1))
      {
        while (numSet.Contains(current + 1))
        {
          current++;
          currentLongest++;
        }
      }
      longest = Math.Max(longest, currentLongest);
    }
    return longest;

  }
}