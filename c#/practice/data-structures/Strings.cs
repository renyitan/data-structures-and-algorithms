using System;
//https://www.programiz.com/csharp-programming/string
public class Program
{
	public static void Main()
	{
		string s = "hello world";
		string[] split = s.Split(' ');
		foreach (string str in split) {
			Console.WriteLine(str);
		}
	}
}