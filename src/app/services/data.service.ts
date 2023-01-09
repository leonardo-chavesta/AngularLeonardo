import { Observable } from "rxjs"
import { enviroments } from "../environment/environment"
import { HttpClient } from '@angular/common/http'
import { inject} from '@angular/core';
import { PersonajeI } from "../models/personaje.interface";


export class DataService {
    private readonly http = inject(HttpClient);
    
    getData(): Observable<PersonajeI[]>{
        return this.http.get<PersonajeI[]>(`${enviroments.api}/?name=morty`)
    }
}