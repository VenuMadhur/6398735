USE OnlineRetailDB;
GO

SELECT 
    CategoryID,
    ProductName,
    Price,
    RANK() OVER (
        PARTITION BY CategoryID 
        ORDER BY Price DESC
    ) AS RankNum
FROM Product;
