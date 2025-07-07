using Microsoft.EntityFrameworkCore;
using RetailInventory.Contexts;
using RetailInventory.Models;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // 1. Retrieve all products
        var products = await context.Products.ToListAsync();
        Console.WriteLine("📦 All Products:");
        foreach (var p in products)
            Console.WriteLine($" - {p.Name} - ₹{p.Price}");

        // 2. Find by ID
        var product = await context.Products.FindAsync(1);
        Console.WriteLine($"\n🔍 Found by ID = 1: {product?.Name}");

        // 3. FirstOrDefault with Condition
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"\n💰 Expensive Product > ₹50000: {expensive?.Name ?? "None Found"}");
    }
}
