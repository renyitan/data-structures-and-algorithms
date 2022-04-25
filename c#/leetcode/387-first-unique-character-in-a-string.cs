public class Solution
{
  public class Solution
  {
    public int FirstUniqChar(string s)
    {
      var dict = new Dictionary<char, int>();
      char[] chars = s.ToCharArray();

      for (int i = 0; i < chars.Length; i++)
      {
        if (!dict.ContainsKey(chars[i]))
        {
          dict.Add(chars[i], 1);
        }
        else
        {
          dict[chars[i]]++;
        }
      }

      for (int j = 0; j < chars.Length; j++)
      {
        if (dict.ContainsKey(chars[j]) && dict[chars[j]] == 1)
        {
          return j;
        }
      }
      return -1;
    }
  }
}




