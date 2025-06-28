USE OnlineRetailDB;
GO

SELECT 
    CategoryID,
    ProductName,
    Price,
    DENSE_RANK() OVER (
        PARTITION BY CategoryID 
        ORDER BY Price DESC
    ) AS DenseRankNum
FROM Product;
