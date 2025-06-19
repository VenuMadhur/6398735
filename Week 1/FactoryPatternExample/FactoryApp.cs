using System;

public interface IProduct
{
    void DisplayInfo();
}

public class Electronics : IProduct
{
    public void DisplayInfo()
    {
        Console.WriteLine("This is an Electronics product.");
    }
}

public class Furniture : IProduct
{
    public void DisplayInfo()
    {
        Console.WriteLine("This is a Furniture product.");
    }
}

public class Clothing : IProduct
{
    public void DisplayInfo()
    {
        Console.WriteLine("This is a Clothing product.");
    }
}

public class ProductFactory
{
    public static IProduct CreateProduct(string productType)
    {
        switch (productType.ToLower())
        {
            case "electronics":
                return new Electronics();
            case "furniture":
                return new Furniture();
            case "clothing":
                return new Clothing();
            default:
                throw new ArgumentException("Invalid product type.");
        }
    }
}
public class FactoryApp
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter product type (Electronics / Furniture / Clothing):");
        string input = Console.ReadLine();

        try
        {
            IProduct product = ProductFactory.CreateProduct(input);
            product.DisplayInfo();
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
    }
}
