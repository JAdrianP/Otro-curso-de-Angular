import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {

  public loginForm!:{
    email: {
      val:string;
      error:string;
      isValid: () => boolean;
    },
    password: {
      val:string;
      error:string;
      isValid: () => boolean;
    },
  }

constructor(){

  this.loginForm ={ 
    email:{
      val: '',
      error: 'el email es requerido',
      isValid (){
        const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]| \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?| \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
       
        const isValidEmail = pattern.test(this.val);

        if(this.val === '')
        {
          this.error = 'el email es requerido';
        }
        else{
          this.error = 'el email no es valido';
        }
        return pattern.test(this.val);
      }
    },
    password:{
      val:'',
      error:'El password es reequerido',
      isValid(){
        return this.val.length > 0
      }
    }
  }
}

isValidForm(){
  console.log(this.loginForm.email.isValid()  && this.loginForm.password.isValid() );
  
  return (this.loginForm.email.isValid()  && this.loginForm.password.isValid() )
}

}
