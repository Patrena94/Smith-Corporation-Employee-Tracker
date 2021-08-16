# Smith-Corporation-Employee-Tracker
      
# License
   
![Build Status](https://img.shields.io/github/license/Patrena94/Smith-Corporation-Employee-Tracker)  


 # Project Description
The Smith Corporation Employee Tracker is designed to provide Executive Officers of the company with over head data about employees and departments that is required for Strategic Planning company.  Our Executive will be able quickly determine our staffing and budget capacity.  The application provides vital statistics on salary, role, departments, and management.   


 # Table of Content 
 1.Description
 2.Installation
 3.Usage
 4.License
 5.Contributors
 6.${Tests}

 #Questions  

 User with questions about this project should contact me at patrena@sbcglobal.net.  You may also review my portfolio at Patrena Github repository(https://github.com/Patrena94).
 

 
# Installation
  The User will need to install the inquirer(https://www.npmjs.com/package/inquirer, MYSQL2 (https://www.npmjs.com/package/mysql2), and console.table (https://www.npmjs.com/package/console.table) packages in order to operate and initiate this application. 


# Usage Information
 The user will need initiate the application by typing into the command line mysql -u root -p. The user will be prompted to enter their password.  The user will need to type in the SHOW DATABASES;. To test the seeds.sql and schema.sql files, the user will need to enter the following: SOURCE db/schema.sql; (this will provide confirmation data back to the user) and SOURCE db/seeds.sql (this will also provide confirmation the data to the user).  The user will stay in this directory and utilize following commands (please remove commands from parenthesis) to view tables: (SELECT *FROM department;), (SELECT *FROM role;), (SELECT *FROM employee), (SELECT employee.id, employee.first_name, employee.last_name, title, department.name, salary, CONCAT(manager.first_name, “ “, manager.last_name)AS manager) -> (FROM employee) -> (LEFT JOIN role) -> (ON employee.role_id=role.id) ->(LEFT JOIN department) -> (ON role.department_id = department.id) ->(LEFT JOIN employee manager) ->(ON manager.id =employee.manager_id;)
To initiate the functions in the index.js.  The user will need to type in node index (may also type node index.js). to initiate the prompts.  The user will only need to click on the prompts for view to see the tables.  For all other prompts ( Add Role, Add Department, Add Employee, and update employee) the user will need to select view (appropriate) table after the addition of data.

The user can view a walk through video of the above description by clicking the two links below. The video was created utilizing Screencastify in five minute or less intervals.


MYSQL walk through video
https://drive.google.com/file/d/14RYjvhTw-omMfUhR_gZOI6XUaUj6yfAb/view

Prompt walk through video:
https://drive.google.com/file/d/1mC29C-Jl4LV3e5xKORujzuUSF_Yy5wAa/view
 
 
  
# Contribution Guidelines
User interested in contributing to the project will need to create their own branch in GitHub.  They may submit changes and updates to be incorporated into the app for approval by the owner.  Individual may also fork the application to their individual accounts.  


# Test Instructions
To test the seeds.sql and schema.sql files, the user will need to enter the following: SOURCE db/schema.sql; (this will provide confirmation data back to the user) and SOURCE db/seeds.sql (this will also provide confirmation the data to the user).   

![ALT text](Slide1.GIF)/![](Slide1.GIF)
![ALT text](Slide2.GIF)/![](Slide2.GIF)
![ALT text](Slide3.GIF)/![](Slide3.GIF)
![ALT text](Slide4.GIF)/![](Slide4.GIF)
![ALT text](Slide5.GIF)/![](Slide5.GIF)
![ALT text](Slide6.GIF)/![](Slide6.GIF)
![ALT text](Slide7.GIF)/![](Slide7.GIF)
![ALT text](Slide8.GIF)/![](Slide8.GIF)
![ALT text](Slide9.GIF)/![](Slide9.GIF)
![ALT text](Slide10.GIF)/![](Slide10.GIF)
![ALT text](Slide11.GIF)/![](Slide11.GIF)
![ALT text](Slide12.GIF)/![](Slide12.GIF)

❤️ Made with Love by Patrena, LLC. 2021
![Build Status](https://img.shields.io/github/languages/top/Patrena94/Smith-Corporation-Work-Scheduler)  
![build status](https://img.shields.io/github/languages/top/Patrena94/Mobile-Drive-in-Theater)
![Build Status](https://img.shields.io/github/languages/top/Patrena94/Multi-City-Weather-Dashboard)
 