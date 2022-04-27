public class Solution
{
  public int[][] KClosest(int[][] points, int k)
  {
    if (points.Length == 1)
    {
      return points;
    }

    var q = new PriorityQueue<int, double>();

    for (int i = 0; i < points.Length; i++)
    {
      double x = points[i][0];
      double y = points[i][1];
      double d = Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2));
      q.Enqueue(i, d);
    }

    var res = new List<int[]>();
    for (int i = 0; i < k; i++)
    {
      int index = q.Dequeue();
      res.Add(points[index]);

    }


    return res.ToArray();
  }
}