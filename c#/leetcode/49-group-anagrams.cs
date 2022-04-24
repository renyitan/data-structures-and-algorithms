public class Solution
{
  public IList<IList<string>> GroupAnagrams(string[] strs)
  {
    var dict = new Dictionary<string, List<string>>();

    foreach (string str in strs)
    {
      char[] arr = str.ToCharArray();
      Array.Sort(arr);
      string key = new string(arr);

      if (dict.ContainsKey(key))
      {
        dict[key].Add(str);
      }
      else
      {
        dict[key] = new List<string>() { str };
      }
    }

    return dict.Values.ToArray();
  }
}