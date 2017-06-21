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
