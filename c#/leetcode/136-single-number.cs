public class Solution
{
  public int SingleNumber(int[] nums)
  {
    var dict = new Dictionary<int, int>();

    foreach (int num in nums)
    {
      if (!dict.ContainsKey(num))
      {
        dict.Add(num, 1);
      }
      else
      {
        dict[num]++;
      }
    }

    int[] res = dict.Where(x => x.Value == 1).Select(x => x.Key).ToArray();
    return res[0];
  }
}