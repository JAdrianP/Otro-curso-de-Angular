import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import * as fromPipes from './pipes'
import { RouterModule } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';
import { MicarouselComponent } from './components/micarousel/micarousel.component';
import { CardLoaderComponent } from './components/loaders/card-loader/card-loader.component';
import { ValidationsService } from './services/validations/validations.service';





@NgModule({
  declarations: [...fromComponents.components,...fromPipes.pipes, MicarouselComponent, CardLoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    A11yModule,
  ],
  //exportamos todos para no tener que estar declarando esto en cada modulo
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...fromComponents.components,
    ...fromPipes.pipes,
    RouterModule,
    A11yModule,
  ]
})
export class SharedModule { }
