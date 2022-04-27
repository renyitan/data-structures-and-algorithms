public class Solution
{
  public bool CheckIfExist(int[] arr)
  {
    var dict = new Dictionary<double, int>();

    foreach (double num in arr)
    {
      if (dict.ContainsKey(num / 2) || dict.ContainsKey(num * 2))
      {
        return true;
      }
      else
      {
        if (!dict.ContainsKey(num))
        {
          dict.Add(num, 1);
        }

      }
    }
    return false;
  }
}