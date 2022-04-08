using System;
using System.Collections;

public class Program
{
  public static void Main()
  {
    Queue q = new Queue();
    q.Enqueue("Hello");
    q.Enqueue("World");

    foreach (string member in q)
    {
      Console.WriteLine(member);
    }
  }
}