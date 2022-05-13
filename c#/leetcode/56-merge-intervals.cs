public class Solution
{
  public int[][] Merge(int[][] intervals)
  {
    intervals = intervals.OrderBy(x => x[0]).ToArray();

    var merged = new List<int[]>();
    foreach (var interval in intervals)
    {
      if (merged.Count == 0 || interval[0] > merged[^1][1])
      {
        merged.Add(interval);
      }
      else
      {
        merged[^1][1] = Math.Max(merged[^1][1], interval[1]);
      }
    }


    return merged.ToArray();
  }
}