public class Solution
{
  public int DistributeCandies(int[] candyType)
  {
    int allowable = candyType.Length / 2;
    int types = candyType.Distinct().ToArray().Length;

    if (allowable == types)
    {
      return types;
    }
    else if (allowable > types)
    {
      return types;
    }
    else
    {
      return allowable;
    }
  }
}