CREATE DATABASE bamazon;

use bamazon;

create TABLE products(
item_id int(11) auto_increment NOT null,
product_name varchar(50) NOT null,
department_name varchar(40) NOT Null,
price float (10,2) Not Null,
stock_quantity int(255),
PRIMARY Key(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Television", "Electronics", "4000.00", "10");
INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Wall Mount", "Electronics", "100.00", "10");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Computer Screen", "Computer", "200.00", "15");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Men's shirts", "Clothes", "20.00", "100");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Coffee Maker", "Kitchen", "200.00", "20");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Papers", "Office", "0.00", "100");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Garden Hose", "Outdoor", "50.00", "30");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Laptop", "Computers", "1000.00", "40");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Cookies", "Food", "10.00", "50");

INSERT INTO products(product_name, department_name, price, stock_quantity)
values ("Sofa", "Furnitures", "2000.00", "60");

select * from products;