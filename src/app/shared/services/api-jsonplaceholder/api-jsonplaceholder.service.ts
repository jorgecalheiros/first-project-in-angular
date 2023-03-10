import { Post } from './../../types/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiJsonplaceholderService {
  private urlApi = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlApi);
  }
}
