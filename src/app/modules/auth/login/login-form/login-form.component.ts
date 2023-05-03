import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONST_LOGIN_PAGE } from 'src/app/data/constants/pages/login/login.const';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

public loginForm: FormGroup;


constructor(private formBuilder : FormBuilder){
  this.loginForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password:['', [Validators.required, Validators.maxLength(10)]]
  });
}
  authenticate(){
    console.log('authenticate');
    
  }

}
