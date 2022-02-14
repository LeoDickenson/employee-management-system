INSERT INTO department (name)
VALUES 
('sales'),
('customer service');

INSERT INTO role (title, salary)
VALUES 
('manager', 75000);

INSERT INTO role (title, salary, department_id)
VALUES 
('salesperson', 40000, 1),
('service representative', 30000, 2),
('technician', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Craig', 'Smith', 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Misha', 'Walden', 2, 1),
('Ishmael', 'Feverton', 2, 1),
('Eefje', 'Albaline', 2, 1),
('Cornelius', 'Shank', 3, 1),
('Tim', 'Stenson', 3, 1),
('Alex', 'Price', 4, 1);
