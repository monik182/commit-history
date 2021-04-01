import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Commit History';

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.getCommitHistory();
  }

  async getCommitHistory() {
    const response = await this.githubService.getCommitHistory();
    console.log('GITHUB RESPONSE', {response});
  }
}
