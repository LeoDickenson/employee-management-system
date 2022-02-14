const Inquirer = require("inquirer")

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'workforce_db'
},
    console.log(`connected to workforce database`)
);