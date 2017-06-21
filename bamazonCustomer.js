//require mysql and inquirer

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//configure database

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",

    user: "root",
    password: "password",
    database: "bamazon"
});

// connection.connect(function(err) {
// if(err) throw err;
// 	console.log("connected as id "+ connection.threadId);
// });

//function to start new order, display available products
function startOrder() {
    connection.query("SELECT * from products", function(err, results, fields) {
        if (err) { console.log(err) };
        console.log(results);
      
        console.log("item_id | product       | department_name | price | stock_quantity");
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].item_id + "     | " + results[i].product_name + " | " + results[i].department_name + " | " + results[i].price + " | " + results[i].stock_quantity)

        
          };
       
    });

}