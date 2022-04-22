public class Solution
{
  public string ReverseWords(string s)
  {
    string[] arr = s.Trim().Split(" ", StringSplitOptions.RemoveEmptyEntries);
    arr = arr.Reverse().ToArray();
    return String.Join(" ", arr);
  }
}