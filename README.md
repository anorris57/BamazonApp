# BamazonApp
* Creating an Amazon-like storefront with the MySQL and node.js
* The app will take in orders from customers and deplete stock from the store's inventory.
* Used MySQL work bench to Create a MySQL Database called `bamazon`.
* Used MySQL work bench to create table called products with columns.
* Used bamazon seeds to populate database.
* Use MySQL commands to show selected columns of database to customer.
* Used inquirer two ask intial questions(prompts): 
 1) product id
 2) how many units of product
* Using if statement:
 1) Check if there is sufficent quantity
    a) No: return "Insufficient quantity"
    b) Yes:
      i)Using MySql commands update database to reflect new inventory
      ii)Create function to calculate total amount owed by customer
#Bamazon Manager
*Using NPM Inquirer pkg to prompt manager with 4 choice:
 1) View Products for sale
   a) Using  MySql commands to show whole database to manager
 2) View Low Inventory
   a) Using MySql commands to selectively show certain products based on given criteria
 3) Add to Inventory
   a) Using inquirer to prompt manager to pick id of product and give amount that will be added.
   b) Using MySql commands to update database in MySql workbench.
 4) Add New Product
   a) Using inquirer to prompt manager for necessary information to build new row in data base.
   b) Using MySql commands to post/add new row to database in MySql work bench.