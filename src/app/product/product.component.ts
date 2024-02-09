import { Component } from '@angular/core';
import { ProductService } from '../product.service';
type mobile={
  image:string,
  model:string,
  price:number
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
      // resp is of type `HttpResponse<Config>`
      .subscribe((resp: any) => {
        this.mobiles = resp.products.splice(0,10);
      console.log(this.mobiles);
      });
  }
}
