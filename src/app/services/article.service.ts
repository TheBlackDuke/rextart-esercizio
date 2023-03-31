import { Article } from './../interface/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Article[]> {
    return this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getSinglePost(id: number): Observable<Article> {
    return this.http.get<Article  >('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
  }

}
