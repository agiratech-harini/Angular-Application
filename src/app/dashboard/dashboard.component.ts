import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
 myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
 
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
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    
    }
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    gotograph(){
      
    this.route.navigate(['/dashboard/graph']);
    }
    gotoregistration(){
      this.route.navigate(['/dashboard/registration']);
    }

   
   
    showProductService() {
      this.productService.getProducts()
        // resp is of type `HttpResponse<Config>`
        .subscribe(resp => {
        console.log(resp);
        });
    }
   
  }

