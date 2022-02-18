const inquirer = require("inquirer")

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'workforce_db'
},
    console.log(`Welcome to the workforce database CMS`)
);


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
              employee.printEmployees();
              start();
              break;
          case "View All Roles":
              role.printRoles();
              start();
              break;
          case "View All Departments":
              department.printDepartments();
              start();
              break;
          case "Exit":
              console.log("Thank you for using our HR Employee Tracker. Have a great day.");
              break;
          default:
              console.log(`Action (${data.action}) is not supported.`);
              start();
              break;
      }
  });
}

start()



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