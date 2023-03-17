import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  getAllProducts() {
    let url="http://localhost:58989/Home/GetAllProducts";
    return this.http.get(url);
  }
}
