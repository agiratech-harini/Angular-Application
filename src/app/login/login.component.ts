// import { Component } from '@angular/core';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
//   imports:[ReactiveFormsModule]
// })
// export class LoginComponent {
//    UsernameInput: any;
//    PasswordInput:any;
//    loginComponent=new FormControl('');


// constructor(public route:Router){}
// Login(){
//   console.log(this.UsernameInput,this.PasswordInput);
//   this.route.navigate(['dashboard'])
// }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;  
  // UsernameInput: FormControl = new FormControl('', Validators.required);
  // PasswordInput: FormControl = new FormControl('', Validators.required);

  constructor(public route: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password:new FormControl('', Validators.required) ,
    });
  }

  Login() {
    this.loginForm.markAllAsTouched();

    console.log(this.loginForm.value.username, this.loginForm.value.password);

    
    if (this.loginForm.valid) {
      this.route.navigate(['dashboard']);
    }
  }
}
                                