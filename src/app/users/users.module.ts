import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UsersModule { }
