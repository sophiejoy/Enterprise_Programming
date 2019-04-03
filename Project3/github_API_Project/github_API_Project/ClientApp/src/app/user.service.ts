import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSearchResults, RepoSearchResults } from './user-search-results';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'https://api.github.com';
  auth: string = 'token 356602266ce19a22d9f82ab82833b29a0605ef2a'

   header = {
   headers: new HttpHeaders({ 'Authorization': this.auth })
   }

  constructor(private http: HttpClient) { }

  searchForUsers(searchString: string): Observable <UserSearchResults> {

    var endpoint = `${this.apiUrl}/search/users?q=${searchString}`
    return this.http.get<UserSearchResults>(endpoint, this.header);

  }

  searchForUserRepo(login: string): Observable<RepoSearchResults> {

    var endpoint = `${this.apiUrl}/users/${login}/repos`
    return this.http.get<RepoSearchResults>(endpoint, this.header);

  }

  getUser(id: number): Observable<User> {

    var endpoint = `${this.apiUrl}/user/${id}`;
    return this.http.get<User>(endpoint, this.header);

  }

  getUsers(page: number): Observable<UserSearchResults> {

    var endpoint = `${this.apiUrl}/user/?since=${page}`;
    return this.http.get<UserSearchResults>(endpoint);
  }

  getRepo(page: number): Observable<UserSearchResults> {

    var endpoint = `${this.apiUrl}/user/?since=${page}`;
    return this.http.get<UserSearchResults>(endpoint);
  }


}


