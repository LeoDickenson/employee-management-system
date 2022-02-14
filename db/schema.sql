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
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);