DROP DATABASE IF EXISTS bamazon_DB;
--Create a MySQL Database called `bamazon`.
CREATE DATABASE bamazon_DB;

USE bamazon_DB;
--Then create a Table inside of that database called `products`.
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT, --unique
  product VARCHAR(100) NOT NULL, --product name
  department VARCHAR(100) NOT NULL,
  sale_price DECIMAL (10,2) NOT NULL,
  stockAmt INTEGER(10),--how much of the product is available in stores
  PRIMARY KEY (id)
);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("girl's bicycle", "Toys", 100.00, 50);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("sz.10 men's orange Ked's sneakers ", "Shoes", 150.69, 20);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("purple mascara", "Cosmetics", 20.00, 30);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("vitamin C tables 50mg", "Health", 10.00, 50);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("blue king-size cashmere sheet set", "Bedding", 200.00, 20);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("beard oil 5 oz.", "Cosmetics", 35.00, 50);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("TZ-500X-Calculator", "Office Supplies", 125.50, 30);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("15 inch black pearl necklace", "Jewelry", 300.00, 5);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("15 inch iron cast skillet", "Kichen", 80.00, 50);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("Christmas Tree 15ft.", "Seasonal", 150.00, 40);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("large brown teddy bear", "Toys", 20.00, 15);

INSERT INTO products (product, department, sale_price, stockAmt)
VALUES ("girl's bicycle", "Toys", 100.00, 50);
