import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { enviroments } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<unknown>{

  private readonly http = inject(HttpClient)
  public name: string = ''
 resolve(): Observable<unknown> {
     return this.http.get(`${enviroments.api}/?name=Morty`)
 }

//  busquedaGet(name: string): Observable<unknown>{
//   return this.http.get(`${enviroments.api}`)
//  }

}
 
