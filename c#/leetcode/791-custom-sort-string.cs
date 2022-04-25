public class Solution
{
  public string CustomSortString(string S, string T)
  {
    Dictionary<char, int> order = new Dictionary<char, int>();
    for (int i = 0; i < S.Length; i++)
    {
      order.Add(S[i], i);
    }

    for (int i = 0; i < T.Length; i++)
    {
      if (!order.ContainsKey(T[i]))
      {
        order.Add(T[i], -1);
      }
    }

    char[] result = T.ToArray();
    Array.Sort(result, (x, y) => order[x] - order[y]);

    return new String(result);
  }
}

