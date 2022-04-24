public class Solution
{
  public string ReverseOnlyLetters(string s)
  {


    char[] chars = s.ToCharArray();

    int left = 0, right = chars.Length - 1;

    while (left < right)
    {
      while (!Char.IsLetter(chars[left]) && left < right)
      {
        left++;
      }

      while (!Char.IsLetter(chars[right]) && right > left)
      {
        right--;
      }

      char temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;

      left++;
      right--;
    }


    return new string(chars);

  }
}