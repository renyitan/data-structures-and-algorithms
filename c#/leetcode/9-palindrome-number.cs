public class Solution
{
  public bool IsPalindrome(int x)
  {
    char[] num = Convert.ToString(x).ToCharArray();
    int left = 0, right = num.Length - 1;

    while (left <= right)
    {
      if (num[left] != num[right])
      {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}