import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { map } from 'rxjs';
type mobile = {
  image: string,
  brand: string,
  price: number,
  rating: number,
  stock: number
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  mobiles!: Array<any>;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.showProduct();
    this.addProduct();
    this.updateProduct();
    this.patchProduct();
    this.deleteProduct();
  }

  showProduct() {
    this.productService.getProducts()
      .pipe(
        map((response: any) => {
          console.log("Before map: ", response);

          return response.products
        }),
        map((response: any) => {
          console.log("Before map: ", response);
          return response.map((item: any) => {
            return {
              image: item.images[0],
              brand: item.brand,
              price: item.price,
              rating: item.rating,
              stock: item.stock
            }
          })
        })
      )
      .subscribe((resp: any) => {
        console.log("After map: ", resp);
        this.mobiles = resp.splice(0, 10);
        console.log(this.mobiles);
      });
  }
  addProduct() {
    console.log("comes to add");
    
    let addedProduct = {
      brand:"Impression of Acqua Di Gio",
      image:"https://cdn.dummyjson.com/product-images/11/1.jpg",
      price:13,
      rating:4.26,
      stock:44
    }
    this.productService.addProducts(addedProduct).subscribe({
      next: value => console.log('Success: ' + value),
      error: err => console.error('Error: ' + err),
    })
  }
  updateProduct() {
    console.log("update");
    
    let updatedProduct = {
      brand:"Impression of Acqua Di Gio",
      image:"https://cdn.dummyjson.com/product-images/11/1.jpg",
      price:13,
      rating:4.26,
      stock:44
    }
    let id = 1;
    this.productService.updateProducts(id, updatedProduct).subscribe((response: any) => {
      console.log("Response: ", response);
      
      
    })
  }
  patchProduct(){
  let patchedProduct = {
    brand:"Impression of Acqua Di Gio",
    image:"https://cdn.dummyjson.com/product-images/11/1.jpg",
    price:13,
    rating:4.26,
    stock:44
  }
  this.productService.patchProduct(patchedProduct).subscribe((response:any)=>{
   console.log("Response:",response);
   
  })
}
deleteProduct(){
  let id=1;
  this.productService.deleteProduct(id).subscribe((response:any)=>{
    console.log("Response:",response);
    
  })

  }
}

