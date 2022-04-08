using System;
using System.Collections.Generic;

public class Program
{
  public static void Main()
  {
    Stack<string> numbers = new Stack<string>();
    numbers.Push("one");
    numbers.Push("two");

    foreach (string number in numbers)
    {
      Console.WriteLine(number);
    }

  }
}