public class Solution
{
  public IList<IList<int>> Subsets(int[] nums)
  {
    var res = new List<IList<int>>();

    void Backtrack(List<int> temp, int i)
    {
      res.Add(new List<int>(temp));
      for (int index = i; index < nums.Length; index++)
      {
        temp.Add(nums[index]);
        Backtrack(temp, index + 1);
        temp.RemoveAt(temp.Count - 1);
      }
    }

    Backtrack(new List<int>() { }, 0);
    return res;
  }
}