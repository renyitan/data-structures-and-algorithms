using System;
using System.Collections;

public class Node
{
  public int val;
  public Node next;
  public Node(int val = 0, Node next = null)
  {
    this.val = val;
    this.next = null;
  }
}

public class LinkedList
{
  private Node head;
  private int size;
  public LinkedList()
  {
    this.head = null;
  }

  public void append(int val)
  {
    if (this.head == null)
    {
      this.head = new Node(val);
      this.size++;
      return;
    }
    else
    {
      Node current = this.head;
      while (current != null && current.next != null)
      {
        current = current.next;
      }

      current.next = new Node(val);
      this.size++;
    }
  }

  public void prepend(int val)
  {
    if (this.head == null)
    {
      this.head = new Node(val);
      this.size++;
      return;
    }
    else
    {
      Node newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
  }

  public void remove(int index)
  {
    if (index < 0 || index > this.size)
    {
      return;
    }

    int n = 0;
    Node current = this.head;
    Node prev;
    prev = null;

    if (index == 0)
    {
      this.head = current.next;
      this.size--;
      return;
    }

    while (current != null)
    {
      if (n == index)
      {
        prev.next = current.next;
        this.size--;
        return;
      }
      n++;
      prev = current;
      current = current.next;
    }

  }

  public void printList()
  {
    if (this.head == null)
    {
      return;
    }

    Node current = this.head;
    Console.Write(current.val);
    current = current.next;
    while (current != null)
    {
      Console.Write("-->" + current.val);
      current = current.next;
    }

    Console.WriteLine();
  }
}

public class Program
{
  public static void Main()
  {
    LinkedList ll = new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.prepend(4);
    ll.remove(1);
    ll.printList();
  }
}