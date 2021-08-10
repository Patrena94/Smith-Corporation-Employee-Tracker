const inquirer = require("inquirer");
const db = require("./db/connection");

const opt =[
    {type: "list",
name: "selections",
message: "what would you like to do?",
choices: [
    "view All Employees", 
    "view All Departments",
   "View All Roles",
   "Add Role",
    "Add Department",
    "update Role",
    "Exit",
],
},
];

const Init =()=>
inquirer.prompt(opt)
.then((answer) => {
switch(answer.selections){
    case "view All Employees":
        viewAllEmployees();
        break;
        case  "view All Departments":
            viewAllDepartments();
            break;

        case "View All Roles":
        viewAllRoles();
        break;

        case "Add Role":
        AddRole();
        break;

        case "Add Department":
        AddDepartment();
        break;

        case  "update Role":
        updateRole();
        break;

        case"Exit":
        db.end();
        break;
}
});
;
const viewAllEmployees = (req, res) =>{
    const sql='SELECT first_name, last_name, role_id, role.salary, role.title, deparment.name as DEPARTMENT'
FROM employee
INNER JOIN role ON employee.role_id =role_id
INNER JOIN department ON role.department_id=department_id
db.query(sql, (err, res)=> {
    if(err) throw err;
    console.table(res)
    Init();
})
};
console.log("This switch staement works fine!")

const viewAllDepartments = (req, res) =>{
    const sql='SELECT * FROM department';
db.query(sql, (err, res) =>{
if (err)throw err;
console.table (res);
Init();
)};
    console.log("This switch staement works fine!")

    const viewAllRole = (req, res) =>{
        const sql ='SELECT role.id. role.title, role.salary, department. name as "Department"
FROM role
INNER JOIN department ON role.department_id =department.id'
db.query(sql, (err, res)=> {
    if(err) throw err;
    console.table(res);
    Init();
});
Init();}