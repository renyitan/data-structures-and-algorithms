
using System;
using System.Linq;
using System.Collections.Generic;
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



public class Program
{
  public static void Main()
  {
    char[] tokens = new char[] { '2', '1', '+', '3', '*' };
    Console.WriteLine(Evaluate(tokens));
  }

  public static int Evaluate(char[] tokens)
  {
    var stack = new Stack<int>();
    var operators = new List<char>() { '+', '-', '/', '*' };

    foreach (char token in tokens)
    {
      // if it's a number char
      if (!operators.Contains(token))
      {
        stack.Push((int)char.GetNumericValue(token));
        continue;
      }
      // if it's an operator char
      int op2 = stack.Pop();
      int op1 = stack.Pop();

      if (token == '+')
      {
        stack.Push(op1 + op2);
      }
      else if (token == '-')
      {
        stack.Push(op1 - op2);
      }
      else if (token == '/')
      {
        stack.Push((int)op1 / op2);
      }
      else if (token == '*')
      {
        stack.Push(op1 * op2);
      }
    }
    return stack.Pop();

  }
}