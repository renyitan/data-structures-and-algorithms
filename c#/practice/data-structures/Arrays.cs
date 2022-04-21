using System;
using System.Linq;
					
public class Program
{
	public static void Main()
	{
		// declaration 
		int[] numbers = {51, 1, 3, 4, 98};
		
		// iteration
		foreach(int number in numbers) {
			Console.WriteLine(number);
		}
		Console.WriteLine();
		// iteration
		for (int i=0; i < numbers.Length; i++) {
			Console.WriteLine(numbers[i]);
		}
		Console.WriteLine();
		
		// Linq operators
		// get min element
		Console.WriteLine("Smallest Element: {0}", numbers.Min());
		
		// get max element
		Console.WriteLine("Largest Element: {0}", numbers.Max());
		
		// get average of all elements
		int sum = numbers.Sum();
		int count = numbers.Count();
		float average = sum/count;
		Console.WriteLine("Average: {0}", average);
		
	}
}