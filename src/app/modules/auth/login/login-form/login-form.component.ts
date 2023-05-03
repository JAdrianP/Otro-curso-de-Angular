import { Component } from '@angular/core';
import { CONST_LOGIN_PAGE } from 'src/app/data/constants/pages/login/login.const';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


  public data = CONST_LOGIN_PAGE;
  public loginForm;

  constructor() {
    this.loginForm = this.data.FORM;
  }

  isValidForm(){
    console.log(this.loginForm.email.isValid()  && this.loginForm.password.isValid() );
    
    return (this.loginForm.email.isValid()  && this.loginForm.password.isValid() )
  }
  authenticate(){
    console.log('authenticate');
    
  }

}
