USE Employee_Tracker;

INSERT INTO department (name)
VALUES("Finance"),
('Marketing'),
("Sales"),
("recruitment");

INSERT INTO role (title, salary, department_id)
VALUES("Finance Director", 95000, 1),
("Marketing Director",70000, 2),
("PR Representative", 60000,2),
("Vice President of Sales",100000, 3),
("Executive Assistant", 5500, 3),
("Recruiter",65000, 4),
("Executive Assistant", 55000, 1),
("Talent Acquistion Recruiter",80000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("James", "Brown", 1, NULL),
("Thomas", "Andrew", 8, NULL),
("Smith", "Alesia", 3, NULL),
('Nicole', "Arrington", 2, NULL),
("Blance","Devereaux",5,3),
("Dorthy","Zbornak", 6, 2),
("Sophia", "Petrillo", 5, 1),
("Rose","Nylund",5, 4);


-- INSERT INTO manager(first_name, last_name, department_id)
-- VALUES("Finance Director", 95000, 2),
-- ("Marketing Director",70000, 3),
-- ("Vice President of Sales",100000, 1),
-- ("Talent Acquistion Manager",80000,2);