public class Solution
{
  public int[] Intersect(int[] nums1, int[] nums2)
  {
    var dict = new Dictionary<int, int>();
    var res = new List<int>();

    foreach (int num in nums1)
    {
      if (!dict.ContainsKey(num))
      {
        dict.Add(num, 1);
      }
      else if (dict.ContainsKey(num))
      {
        dict[num]++;
      }
    }

    foreach (int num in nums2)
    {
      if (dict.ContainsKey(num))
      {
        dict[num]--;
        res.Add(num);
        if (dict[num] == 0)
        {
          dict.Remove(num);
        }
      }
    }
    return res.ToArray();
  }
}