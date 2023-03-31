import { Observable } from 'rxjs';
import { User } from './../interface/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getSingleUser(id: number): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
