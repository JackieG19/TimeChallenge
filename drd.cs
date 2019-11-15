using System;

public class Dice
{
	public int sides;
	public int value;
	public Random rand;
	
	public Dice(int sides) // obj
	{
		this.sides = 20;
		this.value = 1;
	}
	
	public void Roll(Random rand) // method
	{
		this.value = rand.Next(1, this.sides + 1);
	}
}


public class Program
{	
	public static void Main()
	{
		//Console.WriteLine("Hello World");
		var newDice = new Dice(20);
		var rand = new Random();
		newDice.Roll(rand);
		Console.WriteLine(newDice.value);
	}
}
