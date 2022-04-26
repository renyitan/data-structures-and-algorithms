public class Solution
{
  public int MissingNumber(int[] nums)
  {
    int[] res = new int[nums.Length + 1];
    Array.Fill(res, 1);

    foreach (int num in nums)
    {
      res[num] = 0;
    }

    for (int i = 0; i < res.Length; i++)
    {
      if (res[i] > 0)
      {
        return i;
      }
    }
    return -1;
  }
}