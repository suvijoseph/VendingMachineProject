# VendingMachine
 Vending Machine Project
<h2>Introduction</h2>
This project function like a vending machine. It will accept money, maintain inventory, and dispense products. The initial inventory of the product is coming from API, which is developed using ASP.net (This is also included in this project).

<h2>Set Up</h2>
<i>Prerequisites:</i><br/>
@angular/cli<br/>
Node.js<br/>

For API: .Net Web API<br/>

<i>Start the API:</i><br/>
Run the VMProducts.sln solution which is located under “VMProducts” folder, using Visual Studio. The port which I am using is 58989. The url for the product list is: http://localhost:58989/Home/GetAllProducts

<i>Start the app:</i><br/>
Start the project using ‘ng serve’ from vm-app folder<br/>
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.<br/>

Note: if the port is different for you then you need to update the url in “\vm-app\src\app\services\products.service.ts” file<br/>

<h2>Features</h2>
<h3>Sample Data</h3><br/>
In this project, there are total of 15 number of products with 8 different items are used. The sample json file is attached in \vm-app\product.json, which is same we get from the api. <br/>
<h3>Screen shot</h3>
The screenshot of the Vending Machine web page is attached below:<br/>
 
<h3>Workflow</h3><br/>
The Vending Machine will work in this way:<br/>
1.	Insert the coins by pressing the Coin denominations. For this project Indian coin is used with denomination of 25 paise, 50 paise, 1 Rs. And 2 Rs. (100 paise = 1 Rs)<br/>
2.	Buy the product by clicking on the “Buy” button below any of the item listed. The quantity available is mentioned on top of the “Buy” button.<br/>
3.	If the Buy is successful, it will show a message saying the “Successfully Purchased”<br/>
4.	We can Clear the coin which are inserted by clicking on the “Reset” button.<br/><br/>
<h3>Insert Coin</h3><br/>
•	The vending machine will accept coins which are displayed on the vending Machine.<br/>
•	We can insert any number of coins. The coins inserted are displayed in the “inserted coin” section of the Vending Machine.<br/>
•	When you buy the item. The remaining change will be updated in the “Inserted Coin” section.<br/>
•	At any point of time we can Remove the coin by pressing “Reset” button.<br/>
<h3>Display Items</h3><br/>
•	The machine shows a list of items with their prices and remaining inventory as stock.<br/>
•	When you buy an item, The amount will be debited and the remaining change will be displayed.<br/>
•	When you buy an item, the stock will be reduced and shown under the item.<br/>
•	The images of the items are located at \VMProducts\VMProducts\Content\images folder, and displayed on the screen. The product path is mentioned in the \vm-app\src\app\app.components.ts file.
