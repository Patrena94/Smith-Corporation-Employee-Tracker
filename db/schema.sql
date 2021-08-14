DROP DATABASE if EXISTS   Employee_Tracker;
CREATE DATABASE  Employee_Tracker;

-- use employee_tracker
USE employee_Tracker;

-- Drop Database employee_track
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- creating the new Database
CREATE TABLE department(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)REFERENCES department(id)
);
-- Creating employee table

CREATE TABLE employee(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30)  NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INT ,
    FOREIGN KEY(role_id) REFERENCES role (id),
    FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
-- Creating Manager table

-- CREATE TABLE manager(  
--      id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
--     first_name VARCHAR(30)  NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     department_id INTERGER NOT NULL,
--     FOREIGN KEY(role_id) REFERENCES role (id),
--     FOREIGN KEY(manager_id)  REFERENCES employee(id)
-- );
