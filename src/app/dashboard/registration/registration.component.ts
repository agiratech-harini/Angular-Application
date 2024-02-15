import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  RegistrationForm: FormGroup;
  myControl = new FormControl('');
  options: string[] = ['Dharmapuri', 'Salem', 'chennai','Coimbatore','Trichy','Tirunelveli','Madurai','Erode','Kanchipuram'];
  filteredOptions!: Observable<string[]>;
  gender=[
    {value:'option1',viewValue:'female'},
    {value:'option2',viewValue:'male'},
  ];

  
  constructor(public route: Router) {
           
    this.RegistrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      emailId:new FormControl('', Validators.required) ,
      phoneNumber:new FormControl('', Validators.required) ,
      password:new FormControl('', Validators.required) ,
      city:new FormControl('', Validators.required) ,
    });
  }
  ngOnInit():void{
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  formSubmit() {
    this.RegistrationForm.markAllAsTouched()
  };

}
