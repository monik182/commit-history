import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient,
              private firebaseService: FirebaseService) {
  }

  async getCommitHistory() {
    const owner = await this.firebaseService.fetch('github_owner');
    const repo = await this.firebaseService.fetch('github_repo');
    const headers = new HttpHeaders({Accept: 'application/vnd.github.v3+json'});
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    return this.http.get(url, {headers}).toPromise();
  }

}
