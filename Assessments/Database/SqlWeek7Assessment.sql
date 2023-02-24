-- HACKER RANK
-- 1. Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table. 

SELECT COUNT(CITY) - COUNT(DISTINCT CITY) AS Difference
FROM STATION;

-- 2.Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

SELECT DISTINCT CITY 
FROM STATION  
WHERE CITY NOT LIKE '[AEIOU]%' OR CITY NOT LIKE '%[aeiou]';

-- 3.Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.


SELECT Name
FROM STUDENTS
WHERE Marks > 75
ORDER BY RIGHT(Name, 3), ID ASC;


-- 4. Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than $2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.


SELECT name
FROM Employee
WHERE salary > 2000
    AND Months < 10
ORDER BY employee_id ASC

-- 5. Query all columns (attributes) for every row in the CITY table.

SELECT *
FROM CITY;