using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
  public static void Main()
  {
    string s = "cbaebabacd";
    string p = "abc";

    int[] result = FindAnagrams(s, p);
    foreach (var i in result)
    {
      Console.WriteLine(i.ToString());
    }
  }

  public static int[] FindAnagrams(string s, string p)
  {
    if (p.Length > s.Length)
    {
      return new int[] { };
    }

    var pCount = new Dictionary<char, int>();
    var sCount = new Dictionary<char, int>();

    foreach (var ch in p)
    {
      if (sCount.ContainsKey(ch))
      {
        sCount[ch]++;
      }
      else
      {
        sCount.Add(ch, 1);
      }

      if (pCount.ContainsKey(ch))
      {
        pCount[ch]++;
      }
      else
      {
        pCount.Add(ch, 1);
      }
    }

    var res = IsDictEqual(pCount, sCount) ? new List<int>() { 0 } : new List<int>() { };
    int left = 0;
    for (int right = p.Length; right < s.Length; right++)
    {
      if (sCount.ContainsKey(s[right]))
      {
        sCount[s[right]]++;
      }
      else
      {
        sCount.Add(s[right], 1);
      }

      sCount[s[left]]--;

      if (sCount[s[left]] == 0)
      {
        sCount.Remove(s[left]);
      }

      left++;

      if (IsDictEqual(sCount, pCount))
      {
        res.Add(left);
      }
    }
    return res.ToArray();



  }

  public static bool IsDictEqual(Dictionary<char, int> dict1, Dictionary<char, int> dict2)
  {
    return dict1.Count == dict2.Count && !dict1.Except(dict2).Any();
  }


}