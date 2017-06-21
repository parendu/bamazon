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

//create row array to insert row into table
var DataTable = function(results, table) {
    results.forEach(function(row, index) {
        var rowArray = new Array(5);
        rowArray[0] = row.item_id,
            rowArray[1] = row.product_name,
            rowArray[2] = row.department_name,
            rowArray[3] = row.price,
            rowArray[4] = row.stock_quantity
        table.push(rowArray);
    })
}
//function to start new order, display available products
function startOrder() {
    connection.query("SELECT * from products", function(err, results, fields) {
        if (err) { console.log(err) };
        // console.log(results);
      
        // console.log("item_id | product       | department_name | price | stock_quantity");
        // for (var i = 0; i < results.length; i++) {
        //     console.log(results[i].item_id + "     | " + results[i].product_name + " | " + results[i].department_name + " | " + results[i].price + " | " + results[i].stock_quantity)

        
        //   };
        var table = new Table({
            head: ['id', 'Product Name', 'Department', 'Quantity', 'Unit Price'],
            colWidths: [10, 20, 20, 10, 10]
        });

        DataTable(results, table);
        console.log(table.toString());

        
        purschase(results);
    });

}


//create function to prompt for item id and quantity
function purschase(order) {

    //prompt to purschase item id and quantity

    inquirer.prompt([{
        type: 'input',
        name: 'itemId',
        message: 'Please enter item id, you would like to purchase item: '
    }, {

        type: 'input',
        name: 'quantity',
        message: 'Please enter the quantity, you would like to purchase: '
    }]).then(function(answer) {
        console.log("purschase item: " + answer.itemId);
        console.log("purschase quantity: " + answer.quantity);
        var itemID = answer.itemId;
        var quantity = answer.quantity;
        //find out quantity in database for requested item id
        connection.query("SELECT stock_quantity, product_name, price from products WHERE ?", { item_id: itemID },
            function(err, results, fields) {
                if (!err) {

                    results.forEach(function(element) {
                        //console.log('Quantity: ', element.stock_quantity);
                        var current_quantity = element.stock_quantity;
                        //console.log(current_quantity);
                        var product_name = element.product_name;
                        var item_price = element.price;
                        var Total = itemID * item_price;
                        //console.log(quantity);
                        //compare purschase quantity and stock_quantity if stock is not enough, display error message
                        if (current_quantity > quantity) {

                            var new_quantity = current_quantity - quantity
                                //if stock is available update the database 
                            connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: new_quantity }, { item_id: itemID }],
                                function(err, results) {
                                    if (err) { console.log(err) };
                                    console.log("==========Order reciept===========")
                                    console.log("Your order is completed:");
                                    console.log("Your ordered item: " + product_name + "  and quantity: " + quantity);
                                    console.log("Your Total amount is $ " + Total);

                                    console.log("================End================")
                                    
                                });

                        } else {
                            //If stock is not available 
                            console.log("Insufficient quantity!");
                            
                        }

                    }, this);

                } else {
                    console.log('Error while performing Query.');
                };

            }); //connection query


    }); //function (answer)



} //purchase function