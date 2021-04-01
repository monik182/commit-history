import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import { CommitInterface } from './models/commit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Commit History';
  commits: CommitInterface[];
  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.getCommitHistory();
  }

  async getCommitHistory() {
    this.commits = await this.githubService.getCommitHistory();
    console.log('GITHUB RESPONSE', {commits: this.commits});
  }
}
