public class Solution
{
  public int[][] Merge(int[][] intervals)
  {
    intervals = intervals.OrderBy(x => x[0]).ToArray();

    var res = new List<int[]>();

    foreach (var interval in intervals)
    {
      if (res.Count == 0 || res[^1][1] < interval[0])
      {
        res.Add(new int[] { interval[0], interval[1] });
      }
      else
      {
        res[^1][1] = Math.Max(res[^1][1], interval[1]);
      }
    }

    return res.ToArray();
  }
}