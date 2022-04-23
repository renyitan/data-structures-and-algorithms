public class Solution
{
  public int[] PlusOne(int[] digits)
  {
    int carry = 0;
    List<int> d = new List<int>(digits);

    for (int i = d.Count - 1; i >= 0; i--)
    {
      if (i == d.Count - 1)
      {
        d[i]++;
      }
      if (carry > 0)
      {
        d[i] += carry;
      }
      carry = d[i] / 10;
      d[i] = d[i] % 10;
    }

    if (carry > 0)
    {
      d.Insert(0, carry);
    }





    return d.ToArray();
  }
}