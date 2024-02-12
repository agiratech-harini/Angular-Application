import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { map } from 'rxjs';
type mobile={
  image:string,
  brand:string,
  price:number,
  rating:number,
  stock:number
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  mobiles!:Array<any>;

  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.showProductService();
  }

  showProductService() {
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
            rating:item.rating,
            stock:item.stock
          }
        })
      })
    )
      .subscribe((resp: any) => {
        console.log("After map: ", resp);
        this.mobiles = resp.splice(0,10);
      console.log(this.mobiles);
      });
  }
}
