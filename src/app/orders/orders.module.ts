import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    OrderRoutingModule,
    CommonModule
  ]
})
export class OrdersModule { }
