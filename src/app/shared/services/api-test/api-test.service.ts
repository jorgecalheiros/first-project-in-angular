import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  constructor(private http: HttpClient) {}

  getResponse(urlApi: string): Observable<Object> {
    return this.http.get(urlApi);
  }
}
