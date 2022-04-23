public class Solution
{
  public IList<IList<string>> GroupAnagrams(string[] strs)
  {
    Dictionary<string, List<string>> dict = new Dictionary<string, List<string>>();

    foreach (string s in strs)
    {
      char[] c = s.ToCharArray();
      Array.Sort(c);
      string key = new string(c);

      if (dict.ContainsKey(key))
      {
        dict[key].Add(s);
      }
      else
      {
        dict.Add(key, new List<string>() { s });
      }
    }

    var res = dict.Select(x => x.Value).ToArray();
    return res;
  }
}