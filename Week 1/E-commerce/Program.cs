
using System;
using System.Collections.Generic;

public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }

    public Product(int id, string name, string category)
    {
        ProductId = id;
        ProductName = name;
        Category = category;
    }

    public override string ToString()
    {
        return $"{ProductId}: {ProductName} - {Category}";
    }
}

class Program
{
    static Product LinearSearch(List<Product> products, string targetName)
    {
        foreach (var product in products)
        {
            if (product.ProductName.Equals(targetName, StringComparison.OrdinalIgnoreCase))
            {
                return product;
            }
        }
        return null;
    }

    static Product BinarySearch(List<Product> products, string targetName)
    {
        int left = 0;
        int right = products.Count - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;
            int comparison = string.Compare(products[mid].ProductName, targetName, StringComparison.OrdinalIgnoreCase);

            if (comparison == 0)
                return products[mid];
            else if (comparison < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    static void Main(string[] args)
    {
        List<Product> products = new List<Product>
        {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Headphones", "Audio"),
            new Product(3, "Coffee Maker", "Home"),
            new Product(4, "Desk Chair", "Furniture"),
            new Product(5, "Smartphone", "Electronics")
        };

        products.Sort((p1, p2) => p1.ProductName.CompareTo(p2.ProductName));

        Console.WriteLine("Enter product name to search:");
        string input = Console.ReadLine();

        Console.WriteLine("\nUsing Linear Search:");
        var result1 = LinearSearch(products, input);
        Console.WriteLine(result1 != null ? result1.ToString() : "Product not found.");

        Console.WriteLine("\nUsing Binary Search:");
        var result2 = BinarySearch(products, input);
        Console.WriteLine(result2 != null ? result2.ToString() : "Product not found.");
    }
}
