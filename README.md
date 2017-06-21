# bamazon

A CLI based application similar to Amazon

1. Create a MySQL Database called `Bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

-	![Products:](https://github.com/parendu/bamazon/images/Products.PNG)


6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

-  ![Messages:](https://github.com/parendu/bamazon/images/Order.PNG)

7. Once the customer has placed the order, application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, Application should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
	
-	![Receipt:](https://github.com/parendu/bamazon/images/Receipt.PNG)
-	![End of Order:](https://github.com/parendu/bamazon/images/OrderEnd.PNG)
-	![Insufficient Quantity:](https://github.com/parendu/bamazon/images/insuffQuant.PNG)

   Outline:
   1. create package.json file
   		* npm init
   2. install mysql, cli-table and inquirer package
   		* npm install mysql --save
   		* npm install cli-table --save
   		* npm install inquirer --save
   3. Connect to database
   4. create functions
   			* startOrder
   				- display available products (mySQL - SELECT command)
   				- Format display data table (using cli-table)
   				- call purschase function (prompt to start order)
   			* purschase
   				- prompt for item id
   				- prompt for quantity 
   				- update database based on order (mySQL - UPDATE)
   				- Generate receipt
   				- call startAgain function
   					- prompt for next order or complete the order
   			* startAgain
   				- prompt for confirmation for next order
