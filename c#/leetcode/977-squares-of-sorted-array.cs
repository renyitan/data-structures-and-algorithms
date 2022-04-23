public class Solution
{
  public int[] SortedSquares(int[] nums)
  {
    var results = nums.Select(x => x * x).OrderBy(x => x).ToArray();
    return results;
  }
}