USE OnlineRetailDB;
GO

SELECT 
    CategoryID,
    ProductName,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY CategoryID 
        ORDER BY Price DESC
    ) AS RowNum
FROM Product;
