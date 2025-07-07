using Lab5Inventory.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab5Inventory.Contexts;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=Lab5Db;Trusted_Connection=True;TrustServerCertificate=True;");
    }
}
