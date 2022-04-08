using System;

abstract class Animal {
	protected string name;
	
	// abstract method
	public abstract void makeSound();
}

class Dog : Animal {
	public override void makeSound() {
		Console.WriteLine("Bark bark");
	}
}
				
public class Program
{
	public static void Main()
	{
		Dog d = new Dog();
		d.makeSound();
	}
}