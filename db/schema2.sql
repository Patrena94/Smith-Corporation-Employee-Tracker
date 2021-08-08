-- Drop Database employee_track
-- creating the new Database
-- CREATE DATABASE EMPLOYEE_TRACK
DROP DATABASE employee_watcher
CREATE DATABASE  emplyee_watcher
-- decicide which table to use 
-- use employee_tracker
USE employee_watcher

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;
-- -- 
CREATE TABLE department(
    id INTERGER AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role_id(
    id INTERGER AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department INT NOT NULL,
    FOREIGN KEY (department_id)REFERENCES department(id)
);
-- Creating employee table

CREATE TABLE employee(
    id INTERGER AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30)  NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTERGER NOT NULL,
    manager_id INTERGER NULL,
    FOREIGN KEY(role_id) REFERENCE role (id),
    FOREIGN KEY(manger_id)  REFERENCE employee(id)
);