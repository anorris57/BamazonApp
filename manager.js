var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: " ",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
  menuOptions();
}); 


function menuOptions() {
  inquirer.prompt ([
    {
      type: "list",
      name: "menuChoice",
      message: "Which would you like to do?",
      choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
    }])
    .then(function(answer) {
     if (answer.menuChoice === 'View Products for Sale'){
       listInventory();
     } else if (answer.menuChoice === 'View Low Inventory'){
       listLowInventory();
     } else if (answer.menuChoice === 'Add to Inventory') {
       addInventory();
     }
    });
  }

    function listInventory() {
      connection.query("Select * FROM products", function (err,res) {
        if(err) throw err;
        for ( var i = 0; i < res.length; i++) {
          console.log("| item id: " + res[i].id + " | product name: " + res[i].product + " | price: " + res[i].sale_price + " | quantity: " + res[i].stockAmt + " |");
        } 
        connection.end();
      });
   }

   function listLowInventory() {
    connection.query("Select * FROM products WHERE stockAmt < 5", function (err,res) {
      if(err) throw err;
      for ( var i = 0; i < res.length; i++) {
        console.log("| item id: " + res[i].id + " | product name: " + res[i].product + " | price: " + res[i].sale_price + " | quantity: " + res[i].stockAmt + " |");
      } 
      connection.end();
    });
  }

  function addInventory() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the id of the product?",
          name: "productid"
        },
        {
          type: "input",
          message: "How many units would you like to add?",
          name:"addStockAmt"
        }
      ])
      .then(function(input){
        var productid = parseInt(input.productid);
        var addStockAmt = parseInt(input.addStockAmt);

      });


  }
   
       
  
    
  

