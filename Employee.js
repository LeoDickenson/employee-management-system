
this.connection.query(
    "SELECT e.id, e.first_name, e.last_name,  r.title, d.name, r.salary, m.first_name AS manager_first_name, m.last_name AS manager_last_name " +
    "FROM employee e " +
    "LEFT JOIN role r ON e.role_id = r.id " +
    "LEFT JOIN department d ON r.department_id = d.id " +
    "LEFT JOIN employee m ON e.manager_id = m.id ",
    function (err, res) {
        if (err) console.log(err);
        // Print employees
        console.log("\n");
        console.table(res);
    }
);