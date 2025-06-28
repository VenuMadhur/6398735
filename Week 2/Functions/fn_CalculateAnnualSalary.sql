CREATE FUNCTION fn_CalculateAnnualSalary
(
    @EmpID INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @AnnualSalary DECIMAL(10,2)

    SELECT @AnnualSalary = Salary * 12
    FROM Employees
    WHERE EmployeeID = @EmpID

    RETURN @AnnualSalary
END;

