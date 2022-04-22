public class Solution
{
  public IList<IList<string>> GroupAnagrams(string[] strs)
  {
    Dictionary<string, List<string>> dict = new Dictionary<string, List<string>>();
    var result = new List<IList<string>>();

    foreach (string s in strs)
    {
      char[] c = s.ToCharArray();
      Array.Sort(c);
      string temp = new String(c);

      if (dict.ContainsKey(temp))
      {
        dict[temp].Add(s);
      }
      else
      {
        dict.Add(temp, new List<string>() { s });

      }
    }

    var keys = dict.Keys.ToList();

    foreach (var key in keys)
    {
      result.Add(dict[key]);
    }

    return result;
  }
}