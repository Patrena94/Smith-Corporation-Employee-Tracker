# Smith-Corporation-Employee-Tracker

{   
    type:'list',
    name:'manager.first_name',
      choices: ["James", "Thomas Andrew", "Alesia Smith", "Nicole Arrington"],
      message: "who is the manager role assigned to?"
},
{  type:'list',
   name:'manager.last_name',
  choices: ["Brown", "Thomas Andrew", "Alesia Smith", "Nicole Arrington"],
  message: "who is the manager role assigned to?"  
},
{
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another Employee?",
        default: false,
      }
.then((answer)=> {
        const sql = `INSERT INTO role(title, salary, manager.first_name, manager.last_name) VALUES (?,?,?,?)`
        db.query(sql, [answer.role, answer.salary, departmentsArr.indexOf(answer.department) + 1], (err, data) => {
            if (err) throw err;
            Init();
        })

    });
}
]);     
// .then((answer)=> {
//         const sql = `INSERT INTO employee(employee.first_name, employee.last_name, role_id, employee.manager_id) VALUES (?,?,?,?)`
//         // db.query(sql, [answer.first_name, answer.last_name, answer.manager_id], (err, data) => {
//         //     if (err) throw err;
//         //     Init();
//         // })

//     });