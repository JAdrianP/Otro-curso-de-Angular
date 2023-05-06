import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm;
  public loginSubmited = false;

  constructor(private formBuilder: FormBuilder, private authService : AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['yaaassss', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
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

   
    this.authService.login({
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? ''
    }).subscribe( r =>{
      console.log(r);
      
    })
  }

  /*get interests(): FormArray{
    //esto tenemos que hacerlo porque podria devolver null, con esto te aseguras de que no
    return this.loginForm.get('interests') as FormArray;

  }

  addInterest(){
    this.interests.push(this.formBuilder.control('', [Validators.required, Validators.minLength(5)]));
  }

  deleteInterest(index : number){
    this.interests.removeAt(index);
  }*/

}
