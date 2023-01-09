import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeDetalleComponent } from './components/pages/personajes/personaje-detalle/personaje-detalle.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { DataResolverService } from './services/data-resolver.service';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'personas',
    loadChildren: () => import('../app/pages/persona/persona.module').then((m) => m.PersonaModule),

  },
  {
    path: 'home',
    // component: HeaderComponent,
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'personajes-list',
    // component: PersonajeDetalleComponent,
    loadChildren: () => import('./components/pages/personajes/personaje-list/personaje-list.module').then(m => m.PersonajeListModule)
  },
  // {
  //   path: 'personajes-detalle/:id',
  //   loadChildren: () => import('./components/pages/personajes/personaje-detalle/personaje-detalle.module').then(m => m.PersonajeDetalleModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
