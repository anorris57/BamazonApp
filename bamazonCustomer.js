//Set up inquirer for prompt and mysql connection for database manipulation
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
//Check connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //first display all of the items available for sale. Include the ids, names, and prices of products for sale.
  productsForSale();
}); 

function productsForSale() {
  connection.query("SELECT * FROM products", function (err, res) {
    if(err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log("item id = " + res[i].id + " | product: " + res[i].product + " | price: " + res[i].sale_price);
    }
    
    chooseProduct();
  });
}
  /* The app should then prompt users with two messages.
   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy. */
  function chooseProduct() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is id for the product you would like to purchase?",
          name: "userid"
        },
        {
          type: "input",
          message: "How many would you like?",
          name: "userAmt"
        },
      ])
      .then(function (input) {
        var userid = parseInt(input.userid);
        //console.log(userid);
        var userAmt = parseInt(input.userAmt);
        //console.log(userAmt);
        connection.query("SELECT * FROM products", function (err, res) {//check if your store has enough of the product to meet the customer's request.If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
          if (res[userid - 1].stockAmt < userAmt){
            console.log("Insufficient quantity!");
            connection.end();
          } else {
            updateStockAmt();
            console.log(`Congratulations on your purchase. Total amount comes to ${userAmt * parseFloat(res[userid-1].sale_price)}. Thank you and come again `);
            connection.end();
          }
          function updateStockAmt (){
            var newStockAmt = res[userid - 1].stockAmt - userAmt;
            var sql = "UPDATE products SET stockAmt = ? Where id = ? "
            var arr = [newStockAmt, res[userid - 1].id]
            connection.query(sql, arr, function (err, result){
              if (err) throw err;
              console.log(result.affectedRows + " record(s) updated");
            });
          }
        
        });
      })
    }
    


      
        