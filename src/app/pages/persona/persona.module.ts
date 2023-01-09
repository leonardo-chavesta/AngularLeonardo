import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonaInterceptor } from '../interceptors/persona.interceptors';
import { MaterialPersonaModule } from './materialPersona.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonaComponent,
  ],
  imports: [
    PersonaRoutingModule,
    CommonModule,
    MaterialPersonaModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PersonaInterceptor, multi: true }
  ]
})
export class PersonaModule { }
