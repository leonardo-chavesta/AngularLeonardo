import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { DataResolverService } from './services/data-resolver.service';
import { DataService } from './services/data.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', 
    loadChildren: () => import('../app/users/user-routing.module').then((m)=> m.UserRoutingModule),
  },
  {
    path: 'orders',
    // loadChildren: () => import('../app/orders/orders-routing.module').then((m) => m.OrderRoutingModule),
    component: OrdersComponent,
    resolve:{
      myData: DataResolverService
    }
  },
  {
    path: 'personas',
    // loadChildren: () => import('../app/orders/orders-routing.module').then((m) => m.OrderRoutingModule),
    component: PersonaComponent,
    loadChildren: () => import('../app/pages/persona/persona.module').then((m)=> m.PersonaModule),
    resolve:{
      myData: DataResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
