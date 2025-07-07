
# 🛒 Retail Inventory System – EF Core 8.0 Hands-On Labs

This hands-on project explores **Entity Framework Core 8.0** in a retail store scenario. It demonstrates how to map C# classes to SQL Server tables using EF Core, manage schema changes with migrations, seed data, and retrieve it using LINQ queries.

---

## 📁 Folder Structure

```plaintext
RetailInventory/        # Labs 1–4: Setup, models, seeding
Lab5Inventory/          # Lab 5: Querying and data retrieval
````

---

## 🔬 Lab Summary

### 🔹 Lab 1: ORM & EF Core Basics

* Introduced Object-Relational Mapping (ORM)
* Compared EF Core with Entity Framework 6
* Highlighted EF Core 8.0 features (JSON mapping, compiled models, interceptors)

---

### 🔹 Lab 2: Creating Models & DbContext

```csharp
// Category.cs
public class Category {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public List<Product> Products { get; set; } = new();
}

// Product.cs
public class Product {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Quantity { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
}
```

```csharp
// AppDbContext.cs
public class AppDbContext : DbContext {
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlServer("Your_Connection_String_Here");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasPrecision(18, 2); 
    }
}
```

---

### 🔹 Lab 3: EF Core CLI – Migrations & Database Creation

```bash
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update
```

✅ Verified tables created in **SQL Server** (`Products`, `Categories`)

---

### 🔹 Lab 4: Inserting Initial Data

```csharp
var electronics = new Category { Name = "Electronics" };
var groceries = new Category { Name = "Groceries" };

var product1 = new Product { Name = "Laptop", Price = 999.99m, Quantity = 10, Category = electronics };
var product2 = new Product { Name = "Apple", Price = 0.99m, Quantity = 100, Category = groceries };

await context.Categories.AddRangeAsync(electronics, groceries);
await context.Products.AddRangeAsync(product1, product2);
await context.SaveChangesAsync();
```

🟢 Output:

![image](https://github.com/user-attachments/assets/88406bfd-deba-44dc-9a06-2a58f7c9897a)



## 📂 Lab5Inventory – Lab 5: Querying the Database

Lab 5 has its own project folder: `Lab5Inventory/`

### 🔎 Queries Demonstrated

```csharp
// 1. Retrieve all products
var products = await context.Products.ToListAsync();

// 2. Find by ID
var product = await context.Products.FindAsync(1);

// 3. FirstOrDefault with condition
var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
```

### 📦 Output

![alt text](Lab5\Output5.png)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/retail-inventory-system.git
cd RetailInventory
```

### 2. Set up SQL Server

Make sure SQL Server is running (e.g., `localhost\SQLEXPRESS`). Use the connection string:

```plaintext
Server=localhost\SQLEXPRESS;Database=RetailInventoryDb;Trusted_Connection=True;TrustServerCertificate=True;
```

### 3. Run the App (Labs 1–4)

```bash
cd RetailInventory
dotnet restore
dotnet ef database update
dotnet run
```

### 4. Run Lab 5 Separately

```bash
cd ../Lab5Inventory
dotnet run
```
