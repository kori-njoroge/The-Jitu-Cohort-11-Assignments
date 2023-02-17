-- SELECT DB_NAME() AS DatabaseName;
-- 1. Create two tables, employees and sales. Get a list of all employees who did not make any sales.

CREATE SCHEMA Company

CREATE TABLE Company.employees(employee_id INT IDENTITY (1,1) PRIMARY KEY, names varchar(255), phoneNumber BIGINT)
CREATE TABLE Company.sales(sale_id INT IDENTITY (1,1) PRIMARY KEY,employee_id INT , item_name varchar(255),price INT)

ALTER TABLE Company.sales
ADD CONSTRAINT FK_constraint_name
FOREIGN KEY (employee_id)
REFERENCES Company.employees (employee_id);
-- Inserting values
INSERT INTO Company.employees (names, phoneNumber)
VALUES ( 'John Doe', +254798030836),
       ( 'Jane Smith', +254798030834),
       ( 'Bob Johnson', +254798030835);

-- Insert some sample data into the sales table
INSERT INTO Company.sales (employee_id, item_name , price)
VALUES ( 1,'shoes', 100.00),
       ( 1,'shoes', 150.00),
       ( 2,'shoes', 200.00);

SELECT * FROM Company.employees
SELECT * FROM Company.sales

-- employees who did not make sales.

SELECT Company.employees.employee_id, Company.employees.names
FROM Company.employees
LEFT JOIN Company.sales ON Company.employees.employee_id = Company.sales.employee_id
WHERE Company.sales.employee_id IS NULL;



-- 2.Assuming you have Customers table; with columns CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. Write a query to list the number of customers in each country; only include countries with more than 3 customers   , use ORDER BY too.

SELECT Country, COUNT(*) AS numberOfCustomers
FROM CustomersTables
GROUP BY Country
HAVING COUNT(*) > 3
ORDER BY numberOfCustomers ASC;


-- 3.Write one procedure that can insert or update the employee (avoid using if statement to check the statement e.g., if (statement ==’Insert)) 
GO; 

CREATE PROCEDURE InsertOrUpdateEmployee
  @employee_id INT,
  @employee_name VARCHAR(50),
  @phoneNumber BIGNINT
AS
BEGIN
  IF EXISTS (SELECT * FROM employees WHERE employee_id = @employee_id)
  BEGIN
    -- Update the existing record
    UPDATE employees
    SET names = @employee_name,
        phoneNumber = @phoneNumber
    WHERE employee_id = @employee_id
  END
  ELSE
  BEGIN
    -- Insert a new record
    INSERT INTO employees (employee_id,names, phoneNumber)
    VALUES (@employee_id, @employee_name, @phoneNumber)
  END
END


-- 4.Write an SQL query to fetch duplicate records from EmployeeDetails (without considering the primary key – EmpId)(create dummy data to use) 
-- Inserting more data to the employees table we created.
INSERT INTO Company.employees (names, phoneNumber)
VALUES ( 'Mark Doe', +25479830836),
       ( 'mark Smith', +25478030834),
       ( 'PJ Johnson', +25479830835),
       ( 'Bella Doe', +25479830836),
       ( 'Antonio Smith', +25798030834),
       ( 'Ziroll Johnson', +24798030835),
       ( 'Per Doe', +25479803036),
       ( 'None Smith', +25479803083),
       ( 'Mike Johnson', +25479803035),
       ( 'John Doe', +25479803083),
       ( 'Jane Smith', +25479803834),
       ( 'Bob Johnson', +2547930835)

-- fetch duplicate records.


