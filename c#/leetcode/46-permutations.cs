public class Solution
{
  public IList<IList<int>> Permute(int[] nums)
  {
    var res = new List<IList<int>>();

    void Backtrack(IList<int> temp, int[] elements)
    {
      if (elements.Length == 0)
      {
        res.Add(new List<int>(temp));
        return;
      }

      foreach (var elem in elements)
      {
        temp.Add(elem);
        int[] newElements = elements.Where(x => x != elem).ToArray();
        Backtrack(temp, newElements);
        temp.RemoveAt(temp.Count - 1);
      }
    }

    Backtrack(new List<int>() { }, nums);
    return res;

  }
}