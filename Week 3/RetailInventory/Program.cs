using Microsoft.EntityFrameworkCore;
using RetailInventory.Contexts;
using RetailInventory.Models;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        await context.Database.MigrateAsync(); // ✅ Works after installing correct package

        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        var product1 = new Product { Name = "Laptop", Price = 999.99m, Quantity = 10, Category = electronics };
        var product2 = new Product { Name = "Apple", Price = 0.99m, Quantity = 100, Category = groceries };

        await context.Categories.AddAsync(electronics);
        await context.Categories.AddAsync(groceries);
        await context.Products.AddRangeAsync(product1, product2);

        await context.SaveChangesAsync();

        Console.WriteLine("✅ Initial data added successfully.");
    }
}
