public class Solution
{
  public int EvalRPN(string[] tokens)
  {
    if (tokens == null || tokens.Length == 0)
    {
      return 0;
    }

    Stack<int> stack = new Stack<int>();

    foreach (var token in tokens)
    {
      if (token == "+" || token == "-" || token == "*" || token == "/")
      {

        int n1 = stack.Pop(),
        n2 = stack.Pop();

        if (token == "+")
        {
          stack.Push(n1 + n2);
        }
        else if (token == "-")
        {
          stack.Push(n2 - n1);
        }
        else if (token == "*")
        {
          stack.Push(n2 * n1);
        }
        else if (token == "/")
        {
          stack.Push(n2 / n1);
        }
      }
      else
      {
        stack.Push(Convert.ToInt32(token));
      }
    }
    return stack.Peek();
  }
}