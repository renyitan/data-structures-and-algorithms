public class Solution
{
  public bool IsValid(string s)
  {

    Stack<char> stack = new Stack<char>();

    for (int i = 0; i < s.Length; i++)
    {
      bool opening = s[i] == '(' || s[i] == '[' || s[i] == '{';
      bool closing = s[i] == ')' || s[i] == ']' || s[i] == '}';

      if (stack.Count == 0 && closing)
      {
        return false;
      }

      if (opening)
      {
        stack.Push(s[i]);
      }

      if (closing)
      {
        char last = stack.Pop();
        if (last == '(' && s[i] != ')')
        {
          return false;
        }
        if (last == '[' && s[i] != ']')
        {
          return false;
        }
        if (last == '{' && s[i] != '}')
        {
          return false;
        }
      }
    }
    return stack.Count == 0;
  }
}