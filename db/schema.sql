DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE department (
  id INT,
  name VARCHAR(30),
  );

CREATE TABLE role (
  id INT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
);

CREATE TABLE employees (
  id INT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
);