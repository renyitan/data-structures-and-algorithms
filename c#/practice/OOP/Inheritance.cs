using System;

public class Animal {
	public string name;
	
	public void display() {
		Console.WriteLine("I am an animal");
	}
}

public class Dog : Animal {
	public void getName() {
		Console.WriteLine("My name is " + name);
	}
}
public class Program
{
	public static void Main()
	{
		Dog labrador = new Dog();
		labrador.name = "Rhou";
		
		labrador.display();
		labrador.getName();
	}
}