const Inquirer = require("inquirer")

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'workforce_db'
},
    console.log(`Welcome to the workforce database CMS`)
);