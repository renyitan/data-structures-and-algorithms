using System;

// base class
public class Animal {
  public virtual void eat() { 
    Console.WriteLine("I eat food")
  }
}

// derived class
public class Dog : Animal {
  public override void eat()
  {
    // Console.WriteLine("I eat dog food");
  }
}

public class Program
{
	public static void Main()
	{
		Dog labrador = new Dog();
		labrador.name = "Rhou";

    labrador.eat();
  }
}