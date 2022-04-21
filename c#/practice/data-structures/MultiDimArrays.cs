using System;
					
public class Program
{
	public static void Main()
	{
		int[,] x = {{1,2,3},{4,5,6}};
		int[,] y = new int[2,3]{{1,2,3},{4,5,6}};
		
		// access (1,0)
		Console.WriteLine(x[1,0]);
		Console.WriteLine();
		
		// iteration
		for (int row=0; row < x.GetLength(0); row++) {
			for (int col=0; col < x.GetLength(1); col++) {
				Console.WriteLine(x[row,col]);
			}
		}
		
	}
}