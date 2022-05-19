using System;
using System.Collections.Generic;
					
public class Program
{
	public static void Main()
	{
		int[][] intervals = new int[][] {
			new int[]{1,3},
			new int[]{2,6},
			new int[]{8,10},
			new int[]{15,18}
		};
		
		int[][] result = MergeIntervals(intervals);
		PrintList(result);
		
		
		
	}
	
	public static void PrintList(int[][] intervals) {
		var res = new List<string>();
		foreach(var interval in intervals) {
			string s = $"[{interval[0]}, {interval[1]}]";
			res.Add(s);
		}
		string result = String.Join(",",res.ToArray());
		Console.WriteLine($"[{result}]");
	}
}