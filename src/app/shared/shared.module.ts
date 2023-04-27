import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { CardVisaComponent } from './components/cards/card-visa/card-visa.component';



@NgModule({
  declarations: [...fromComponents.components, CardUserComponent, CardVisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //exportamos todos para no tener que estar declarando esto en cada modulo
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
