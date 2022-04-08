using System;
using System.Collections;

public class Program
{
  public static void Main()
  {
    Stack mystack = new Stack();
    mystack.Push("Hello");
    mystack.Push("World");

    PrintValues(mystack);
  }

  public static void PrintValues(IEnumerable myCollection)
  {
    foreach (Object obj in myCollection)
    {
      Console.WriteLine("{0},", obj);
    }
    Console.WriteLine();
  }
}