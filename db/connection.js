const mysql= require("mysql2");
const db = mysql.create.Connection(
{
    host: "localhost", 
// your MYSQL username,
user: "root",
// Your MYSQL password
password: "Rose98",
database: "Smith Corporation Employee Tracker"},
console.log("Connected to the Smith Corporation Employee Tracker database."),
);

module.exports=db;