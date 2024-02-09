import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    DashboardForm: FormGroup;
    constructor(public route: Router,private productService : ProductService) {
           
      this.DashboardForm = new FormGroup({
        name: new FormControl('', Validators.required),
        emailId:new FormControl('', Validators.required) ,
        phoneNumber:new FormControl('', Validators.required) ,
        password:new FormControl('', Validators.required) ,
        city:new FormControl('', Validators.required) ,
      });
    }

    ngOnInit(): void {
      this.showProductService();
    }

   
    formSubmit() {
      this.DashboardForm.markAllAsTouched()
    };
    showProductService() {
      this.productService.getProducts()
        // resp is of type `HttpResponse<Config>`
        .subscribe(resp => {
        console.log(resp);
        });
    }
    gender=[
      {value:'option1',viewValue:'female'},
      {value:'option2',viewValue:'male'},
    ];

    city=[
    {value:'option1',viewValue:'Dharmapuri'},
    {value:'option1',viewValue:'Salem'},
    {value:'option1',viewValue:'chennai'},
    {value:'option1',viewValue:'Coimbatore'},
    ];
  }

