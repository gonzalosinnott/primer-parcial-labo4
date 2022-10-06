import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getGitHubInfo() { 
    return this.http.get("https://api.github.com/users/gonzalosinnott");
  }   
}
