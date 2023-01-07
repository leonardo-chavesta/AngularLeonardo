import { Observable } from "rxjs"
import { enviroments } from "../environment/environment"
import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core';

export class DataService {
    private readonly http = inject(HttpClient);
    getData(): Observable<unknown> {
        return this.http.get(`${enviroments.api}`)
    }
}