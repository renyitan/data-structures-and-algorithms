public class Solution
{
  public IList<IList<int>> CombinationSum(int[] candidates, int target)
  {
    var res = new HashSet<IList<int>>();

    void Backtrack(List<int> temp, int remaining)
    {
      if (remaining == 0)
      {
        res.Add(new List<int>(temp.OrderBy(x => x).ToList()));
      }
      if (remaining < 0)
      {
        return;
      }

      foreach (var num in candidates)
      {
        temp.Add(num);
        Backtrack(temp, remaining - num);
        temp.RemoveAt(temp.Count - 1);
      }
    }

    Backtrack(new List<int>() { }, target);

    return res.Distinct().ToList();
  }
}