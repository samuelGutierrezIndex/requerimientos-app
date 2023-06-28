import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class RequerimientosService {

    private URL: string;

    constructor(private http: HttpClient) {
      this.URL = "http://localhost:3000/requerimiento";
    }

    ConsultarRequerimientos(): Observable<any>{
      return this.http.get<any>(this.URL).pipe(retry(1), );
    }

  }
