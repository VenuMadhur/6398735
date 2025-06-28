USE OnlineRetailDB;
GO

WITH RankedProducts AS (
    SELECT 
        ProductName,
        Price,
        CategoryID,
        RANK() OVER (
            PARTITION BY CategoryID 
            ORDER BY Price DESC
        ) AS rnk
    FROM Product
)
SELECT *
FROM RankedProducts
WHERE rnk <= 3;
