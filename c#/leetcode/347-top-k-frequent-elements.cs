public class Solution
{
  public int[] TopKFrequent(int[] nums, int k)
  {
    Dictionary<int, int> dict = new Dictionary<int, int>();
    // List<List<int>> freq = new List<List<int>>();
    List<int>[] freq = new List<int>[nums.Length + 1];

    foreach (int num in nums)
    {
      if (dict.ContainsKey(num))
      {
        dict[num]++;
      }
      else
      {
        dict.Add(num, 1);
      }
    }

    foreach (KeyValuePair<int, int> entry in dict)
    {
      if (freq[entry.Value] == null)
      {
        freq[entry.Value] = new List<int>() { entry.Key };
      }
      else
      {
        freq[entry.Value].Add(entry.Key);
      }
    }


    var res = new List<int>();

    for (int i = freq.Length - 1; i >= 0; i--)
    {
      List<int> f = freq[i];

      if (f != null)
      {
        foreach (int j in f)
        {
          res.Add(j);

          if (res.Count == k)
          {
            return res.ToArray();
          }
        }
      }
    }
    return new int[] { };

  }
}