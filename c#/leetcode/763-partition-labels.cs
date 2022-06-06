public class Solution
{
  public IList<int> PartitionLabels(string s)
  {

    var lastIndex = new Dictionary<char, int>();

    for (int i = 0; i < s.Length; i++)
    {
      if (lastIndex.ContainsKey(s[i]))
      {
        lastIndex[s[i]] = i;
      }
      else
      {
        lastIndex.Add(s[i], i);
      }
    }

    int size = 0, end = 0;
    var res = new List<int>() { };
    for (int i = 0; i < s.Length; i++)
    {
      end = Math.Max(end, lastIndex[s[i]]);
      size++;
      if (i == end)
      {
        res.Add(size);
        size = 0;
        continue;
      }
    }
    return res;



  }
}