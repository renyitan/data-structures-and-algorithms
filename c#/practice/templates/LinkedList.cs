using System;
using System.Collections.Generic;
using System.Linq;

public class Node {
	public int val;
	public Node next;
	public Node(int val=0, Node next=null) {
		this.val = val;
		this.next = next;
	}
}
					
public class Program
{
	public static void Main()
	{
		// driver code
		
	}

	
	public static void PrintList(Node head) {
		var res = new List<string>();
		while(head!=null) {
			res.Add(head.val.ToString());
			head = head.next;
		}
		string output = string.Join("->", res.Select(x => Convert.ToChar(x)).ToArray());
		Console.WriteLine(output);
	}
	
	public static Node CreateList(int[] nums) {
		Node head = new Node(-1);
		Node current = head;
		foreach(var num in nums) {
			current.next = new Node(num);
			current = current.next;
		}
		return head.next;
	}
}