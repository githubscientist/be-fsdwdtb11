## Introduction to database

- Database is a collection of data.
- Data is in the form of tables (structured data) and documents (unstructured data).
- Tables consists of rows and columns.
- Documents consists of key-value pairs.

### Background

- Data should be stored permanently. Because, the variables or references we use in JS uses primary memory.
- Primary Memory - RAM (Random Access Memory)
- RAM consists of two parts: heap and stack.
- Heap is used to store data.
- Stack is used to store functions and variables.
- We need a Database to store our data permanently.
- For that, we need a Database Management System (DBMS).
- DBMS is a software that is used to manage the database.
- DBMS is used to create, read, update, and delete data in the database.
- Example of DBMS: MySQL, PostgreSQL, Oracle, MongoDB, SQLite, Redis, Cassandra, Elastic Search, etc.
- Language used to query data: SQL (Structured Query Language).

### Queries

- To show all the databases

```sql
SHOW DATABASES;
```

- To create a database

```sql
CREATE DATABASE database_name;
```

- To check the current database

```sql
select database();
```

- To use a database

```sql
USE database_name;
```

- To drop a database

```sql
DROP DATABASE database_name;
```

- To show all the tables in a database

```sql
SHOW TABLES;
```

- Example Table: Products

| id  | name            | price | quantity | type        | brand        | branch  |
| --- | --------------- | ----- | -------- | ----------- | ------------ | ------- |
| 1   | Pen             | 10    | 100      | Stationary  | Reynolds     | Chennai |
| 2   | Pencil          | 5     | 200      | Stationary  | Apsara       | Chennai |
| 3   | Book            | 100   | 50       | Stationary  | Navneet      | Mumbai  |
| 4   | Laptop          | 50000 | 10       | Electronics | Dell         | Chennai |
| 5   | Mobile          | 20000 | 20       | Electronics | Samsung      | Mumbai  |
| 6   | TV              | 30000 | 5        | Electronics | Sony         | Chennai |
| 7   | AC              | 40000 | 5        | Electronics | LG           | Mumbai  |
| 8   | Fridge          | 30000 | 5        | Electronics | Whirlpool    | Chennai |
| 9   | Washing Machine | 20000 | 5        | Electronics | Samsung      | Mumbai  |
| 10  | Chair           | 500   | 50       | Furniture   | Godrej       | Chennai |
| 11  | Table           | 1000  | 20       | Furniture   | Nilkamal     | Mumbai  |
| 12  | Sofa            | 5000  | 10       | Furniture   | Urban Ladder | Chennai |
| 13  | Bed             | 10000 | 10       | Furniture   | Pepperfry    | Mumbai  |
| 14  | Cupboard        | 8000  | 10       | Furniture   | Godrej       | Chennai |
| 15  | Almirah         | 7000  | 10       | Furniture   | Nilkamal     | Mumbai  |

- To create a table

```sql
CREATE TABLE table_name (
    column1_name column1_datatype column1_constraints,
    column2_name column2_datatype column2_constraints,
    ...
);
```

- To drop a column

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

- To add a column

```sql
ALTER TABLE table_name ADD COLUMN column_name column_datatype column_constraints;
```

- To rename a column

```sql
ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name column_datatype column_constraints;
```

- To insert data into a table

```sql
INSERT INTO table_name (column1_name, column2_name, ...)
VALUES (value1, value2, ...);
```

- to view the data in a table

```sql
SELECT * FROM table_name;
```

- To delete all the data in a table

```sql
DELETE FROM table_name;
```

- to view the structure of a table

```sql
DESC table_name;
```

or

```sql
DESCRIBE table_name;
```

- To modify a column in a table

```sql
ALTER TABLE table_name MODIFY COLUMN column_name column_datatype column_constraints;
```

- To modify a column and drop a constraint

```sql
ALTER TABLE table_name MODIFY COLUMN column_name column_datatype;
```

- Insert data into the products table

```sql
INSERT INTO products (id, name, price, quantity, type, brand, branch)
VALUES
(1, 'Pen', 10, 100, 'Stationary', 'Reynolds', 'Chennai'),
(2, 'Pencil', 5, 200, 'Stationary', 'Apsara', 'Chennai'),
(3, 'Book', 100, 50, 'Stationary', 'Navneet', 'Mumbai'),
(4, 'Laptop', 50000, 10, 'Electronics', 'Dell', 'Chennai'),
(5, 'Mobile', 20000, 20, 'Electronics', 'Samsung', 'Mumbai'),
(6, 'TV', 30000, 5, 'Electronics', 'Sony', 'Chennai'),
(7, 'AC', 40000, 5, 'Electronics', 'LG', 'Mumbai'),
(8, 'Fridge', 30000, 5, 'Electronics', 'Whirlpool', 'Chennai'),
(9, 'Washing Machine', 20000, 5, 'Electronics', 'Samsung', 'Mumbai'),
(10, 'Chair', 500, 50, 'Furniture', 'Godrej', 'Chennai'),
(11, 'Table', 1000, 20, 'Furniture', 'Nilkamal', 'Mumbai'),
(12, 'Sofa', 5000, 10, 'Furniture', 'Urban Ladder', 'Chennai'),
(13, 'Bed', 10000, 10, 'Furniture', 'Pepperfry', 'Mumbai'),
(14, 'Cupboard', 8000, 10, 'Furniture', 'Godrej', 'Chennai'),
(15, 'Almirah', 7000, 10, 'Furniture', 'Nilkamal', 'Mumbai');
```
