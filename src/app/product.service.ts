import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }
  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
  addProducts(product: any) {
    console.log("in service");
    
    return this.http.post('https://dummyjson.com/products/add', product);
  }
  updateProducts(id: any ,product:any){
    console.log("updated");
    return this.http.put(`https://dummyjson.com/products/${id}`,product);
    
  }
  patchProduct(product:any){
    console.log("patched");
    return this.http.patch('https://dummyjson.com/products/1',product);
  }
  deleteProduct(id:any){
    console.log("deleted");
    return this.http.delete(`https://dummyjson.com/products/${id}`);
    
  }
}