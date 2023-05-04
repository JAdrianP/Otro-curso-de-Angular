import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONST_LOGIN_PAGE } from 'src/app/data/constants/pages/login/login.const';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm;
  public loginSubmited = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['me cago en diuuuu', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      person: this.formBuilder.group({
        name: ['',[Validators.required, Validators.maxLength(35)]],
        lastname: ['',[Validators.required, Validators.maxLength(35)]]
      })
    });
  }
  ngOnInit(): void {
    //ESTO SE PONE TRAS PILLAR LOS DATOS DEL BACKEND
    this.loginForm.get('email')?.setValue('nuevo@email.com');
  }
  authenticate() {  
    this.loginSubmited = true;
    if (!this.loginForm.valid) {
      return;
    }

    console.log('authenticated', this.loginForm.value);

  }

}
