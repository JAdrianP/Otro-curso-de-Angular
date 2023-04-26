import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    //traemos todos los modulos de shared
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
