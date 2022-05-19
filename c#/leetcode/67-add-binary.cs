public class Solution
{
  public string AddBinary(string a, string b)
  {
    char[] digitA = a.ToCharArray();
    char[] digitB = b.ToCharArray();

    int carry = 0;
    int i = digitA.Length - 1;
    int j = digitB.Length - 1;

    var res = new List<int>();

    while (i >= 0 || j >= 0)
    {
      int result = carry;
      if (i >= 0)
      {
        result += (int)char.GetNumericValue(digitA[i]);
        i--;
      }
      if (j >= 0)
      {
        result += (int)char.GetNumericValue(digitB[j]);
        j--;
      }
      res.Add(result % 2);
      carry = result / 2;

    }

    while (carry > 0)
    {
      res.Add(carry % 2);
      carry = carry / 2;
    }

    res.Reverse();



    return string.Join("", res);

  }
}