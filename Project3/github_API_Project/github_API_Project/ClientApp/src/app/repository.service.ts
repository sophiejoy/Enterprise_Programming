import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoSearchResults } from './repo-search-results';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiUrl: string = 'https://api.github.com';
  auth: string = 'token 356602266ce19a22d9f82ab82833b29a0605ef2a'

  header = {
    headers: new HttpHeaders({ 'Authorization': this.auth })
  }

  constructor(private http: HttpClient) { }

  getRepository(page: number): Observable<RepoSearchResults> {
    var endpoint = `${this.apiUrl}/repositories/?page=${page}`;
    return this.http.get<RepoSearchResults>(endpoint);
  }

}
