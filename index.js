const inquirer = require("inquirer")

const mysql = require('mysql2');

const DBNAME = "workforce_db";
const HOST = "localhost";
const PORT = 3306;
const PASS = "root";
const USER = "root";

const connection = mysql.createConnection({
    host: HOST,


    port: PORT,


    user: USER,


    password: PASS,
    database: DBNAME
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log(`Connected to DB ${DBNAME} on ${HOST} Port ${PORT}`);
});

function showEmployees() {};
function showRoles() {};
function showDepartments() {}

function start() {
  let question = "What would you like to do?";
  let options = [
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Exit"
  ];
  inquirer.prompt(
      {
          name: "action",
          type: "list",
          message: question,
          choices: options
      }
  ).then((data) => {
      switch (data.action) {
          case "View All Employees":
              showEmployees();
              start();
              break;
          case "View All Roles":
              showRoles();
              start();
              break;
          case "View All Departments":
              showDepartments();
              start();
              break;
          case "Exit":
              console.log("Thank you, CMS will now close.");
              break;
          default:
              console.log(`Cannot perform (${data.action}).`);
              start();
              break;
      }
  });
};

start();

module.exports = connection;



// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );