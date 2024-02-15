import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  nameInput="";
  changeName($event: any) {
    console.log("Emitted value: ", $event);
    this.nameInput = $event;
  }
  updatetochild(inputValue: string) {
    console.log(inputValue)
    this.nameInput = inputValue;
  }
}
