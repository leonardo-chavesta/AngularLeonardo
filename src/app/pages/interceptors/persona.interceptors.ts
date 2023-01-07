import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroments } from "src/app/environment/environment";

export class PersonaInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>>{
            
           const cloneReq = req.clone({
            params: req.params.appendAll({
                'units': 'metric',
                'appid' : enviroments.key
            })
           })
           return next.handle(cloneReq) 
        };
}