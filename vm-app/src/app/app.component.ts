import { Component } from '@angular/core';
import {ProductsService} from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vm-app';
  
  productlist:any;
  constructor (private products:ProductsService) {
    this.products.getAllProducts().subscribe(data =>{
      console.warn(data);
      this.productlist = data;
      
    })
  }
  displaymsg = "";
  credit = 0;
  coinReturnCount = 0;
  coinReturn: any = {};
  vendSlot = [];
  insertedCoins = {
    twentyfive: [],
    fifty: [],
    one: [],
    two: []
  }
  coinData = {
    twentyfive: { name: "25", value: 0.25 },
    fifty: { name: "50",  value: 0.50 },
    one: { name: "1",  value: 1 },
    two: { size: "2", value: 2 }
  }
  
coinReturnArray = Object.values(this.coinReturn);
objectkeys = Object.keys;
Total_Price = 0;
  addCredits2 (coindata: any)
  {
    console.log("add pressed");
    this.coinReturn[this.coinReturnCount] = coindata;
    this.coinReturnCount++;
    

    console.log(this.coinReturn);
    
    let sum = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    var coinvalue = 0;
    for (var i = 0; i < Object.keys(this.coinReturn).length; i++) {
      if (this.coinReturn[i].name == 'twentyfive')
      {
        count1 ++;
        
      }
      if (this.coinReturn[i].name == 'fifty')
      {
        count2 ++;
      }
      if (this.coinReturn[i].name == 'one')
      {
        count3 ++;
      }
      if (this.coinReturn[i].name == 'two')
      {
        count4 ++;
      }
      coinvalue = this.coinReturn[i].value;
    }
    this.Total_Price = this.Total_Price+coinvalue;
  console.log('twentyfive' + count1);
  console.log('fifty' + count2);
  console.log('one' + count3);
  console.log('two' + count4);
  console.log(this.Total_Price);
  
  }
  BuyItem(pid: string){
    var change = 0;
    console.log("buy pressed" + pid);
    let ppid = parseInt(pid);
    let newObj2 = this.productlist.filter((d: any)=>{
      return d.Id === pid;
    });
    var price = newObj2[0]["Price"];
    this.displaymsg="";
      if(parseFloat(price) > this.Total_Price) {
        console.log("inside if cond");
        this.displaymsg="Insufficient Fund";
      } else {
        if (newObj2[0]["Qty"] > 0){
        this.displaymsg="Successfully Purchased";
        this.productlist.forEach((d: any) => {
          if(d.Id === pid) {
            d.Qty = d.Qty-1;
          }
        });
        change = this.Total_Price - parseFloat(price);
        var Noof2 = change / 2;
        console.log(Noof2);
        if (Noof2 > 0) {
          Noof2 = Math.floor(Noof2);
          change = change - (Noof2*2);
        }
        var Noof1 = change / 1;
        if (Noof1 > 0) {
          Noof1 = Math.floor(Noof1);
          change = change - (Noof1 * 1);
        }
        var Noof50 = change / 0.5;
        if (Noof50 > 0) {
          Noof50= Math.floor(Noof50);
          change = change - (Noof50 * 0.5);
        }
        var Noof25 = change / 0.25;
        if (Noof25 > 0) {
          Noof25 = Math.floor(Noof25);
          change = change - (Noof25 * 0.25);
          
        }
        this.coinReturn = {};
        this.coinReturnCount = 0;
        this.Total_Price=0;
        for(let i=Noof2; i > 0; i--) {
          console.log('2s ' + i)
          this.addCredits2({value: 2.00, name: 'two', display: '2Rs'});
        }
        for(let i=Noof1; i > 0; i--) {
          this.addCredits2({value: 1.00, name: 'one', display: '1Rs'});
        }
        for(let i=Noof50; i > 0; i--) {
          this.addCredits2({value: 0.50, name: 'fifty', display: '50'});
        }
        for(let i=Noof25; i > 0; i--) {
          this.addCredits2({value: 0.25, name: 'twentyfive', display: '25'});
        }
        
        console.log(" "+ Noof2 + " "+ Noof1 + " "+ Noof50 + " "+ Noof25 + " " + change)
      } else {
        this.displaymsg="Out of Stock";
      }
      }
  }
  Refund() {
    this.coinReturn = {};
    this.coinReturnCount = 0;
    this.Total_Price=0;
  }
 
}

