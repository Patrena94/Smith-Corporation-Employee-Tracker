const inquirer = require("inquirer");
const db = require("./db/connection");

let departmentsArr = []
let employeesArr=[]
let managerArr=[]

db.connect(err => {
    if (err) throw err;
    loadDept()
    loadEmployee() 
    // loadManager()
    Init();
})
// db.connect(err =>{
//     if (err) throw err;
//     const managerChoices=res
//     .filter((mgr)=> mgr.manager_id)
//     .map(({manger_id, manager})=> ({
//         value: manger_id,
//         name: manager,
//     })));
//     Init();
// })
// db.connect(err=> {
//     if (err) throw err;
//     Init();
// })
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
    "Add Employee",
    "update Employee",
    "Exit",
],
},
];

const Init =()=>
// loadDept()
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
        viewAllRole();
        break;

        case "Add Role":
        addRole();
        break;

        case "Add Department":
        addDepartment();
        break;

        case "Add Employee":
        addEmployee();
        break;   

        case  "update Employeee":
        updateEmployee();
        break;

        case"Exit":
        db.end();
        break;
}
});

const loadDept = () =>{
    departmentsArr = []
    const sql = `SELECT * FROM department`
    db.query(sql, (err, data) => {
        // console.log(data)
        for(i=0; i< data.length; i++){
            departmentsArr.push(data[i].name)
        }
    })
}
const loadEmployee =()=>{
employeesArr=[]
const sql  = `SELECT * FROM employee`
db.query(sql, (err, data)=>{
    for(i=0; i< data.length; i++){
        employeesArr.push(data[i].manager_id)
    }
})
}
// const loadManager =()=>{
//     managerArr=[]
//     const sql =`SELECT * FROM employee`
//     db.query(sql, (err, data)=>{
//     for(i=0; i< data.length; i++){
//         managerArr.push(data[i].name)
//     }    
//     })
// }
const viewAllEmployees = (req, res) =>{
    const sql=`
    SELECT employee.id, employee.first_name,  employee.last_name, title, department.name, salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role
    ON employee.role_id = role.id
    LEFT JOIN department
    ON role.department_id = department.id
    LEFT JOIN employee manager
    ON manager.id = employee.manager_id;`

db.query(sql, (err, res)=> {
    if(err) throw err;
    console.table(res)
    Init();
})
};
console.log("This switch statement works fine!")

const viewAllDepartments = (req, res) =>{
    const sql='SELECT * FROM department';
db.query(sql, (err, res) =>{
if (err)throw err;
console.table (res);
Init();
})
};

const viewAllRole = (req, res) =>{
   const sql =`SELECT role.id, role.title, role.salary, department.name as Department
FROM role
INNER JOIN department ON role.department_id =department.id`
db.query(sql, (err, res)=> {
    if(err) throw err;
    console.table(res);
    Init();
});
}
const addDepartment = () => {
    inquirer
    .prompt([{
        name:"name",
        type:"input",
        message: "What is the name of the new department?"
    }])
    .then ((answer)=> {
        const sql =`INSERT INTO department(name) VALUES (?)`;
        db.query(sql, [answer.name],
            (err, res) =>{
                if(err)throw err;
            console.log(answer);
        Init();
    });
});
};
const addRole = () =>{
    inquirer
    .prompt([{
        name:'role',
        type:'input',
        message: "What is the new role?"
    },
    {
        type:'input',
        name:'salary',
        message: "What is the Salary"
    },
    { 
      name:'department',
      type:'list',
      choices: departmentsArr,
      message: "what department is this role assigned to?",
    },
    ])
    .then((answer)=> {
        const sql = `INSERT INTO role(title, salary, department_id) VALUES (?,?,?)`
        db.query(sql, [answer.role, answer.salary, departmentsArr.indexOf(answer.department) + 1], (err, data) => {
            if (err) throw err;
            Init();
        })

    });
}
const addEmployee =()=>{
    inquirer 
    .prompt ([{ 
        type:'input',
        name:'employee.first_name',
        message: "what is the employee's first name?",
    },
    { 
        type: 'input',
        name: 'employee.last_name',
        message: "What is the employee's last name?",
    },
{
    name: 'role',
    type: 'input',
    message: "What is the employee's role?",
},
{
    type:'list',
    name:'manager_id',
      choices: employeesArr,
      message: "who is the manager role assigned to?"
},
    ])   
.then((answer)=> {
        const sql = `INSERT INTO employee(employee.first_name, employee.last_name, role_id, employee.manager_id) VALUES (?,?,?,?)`
        db.query(sql, [answer.first_name, answer.last_name, answer.employeesArr.indexOf(answer.manger_id) + 1], (err, data) => {
            if (err) throw err;
            Init();
        })

    });
{   
const updateEmployee =()=>{
    inquirer 
    .prompt ([{            
    type:"confirm",
     name:"confirmupdateEmployee",
    message: "would you like to update an Employee?",
    default: false,    
},
{
    type:"list",
    name:"employee",
    Choices: employeesArr,
    message: "Which employee would you like to update?",
},
{ 
    type: 'input',
    name:'newRole',
    message: "What is the employee's new role?",
},
{ type:"input",
  name: 'newManger',
  message: "what is the new manager's name?"
}
 ])};
}}
