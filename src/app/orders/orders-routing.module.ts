import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";

const router: Routes = [
    {
        path: '',
        component: OrdersComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule],
})

export class OrderRoutingModule { }