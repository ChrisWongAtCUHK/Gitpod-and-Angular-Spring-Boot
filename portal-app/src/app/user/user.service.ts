import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = environment.userUrl;

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }
}
