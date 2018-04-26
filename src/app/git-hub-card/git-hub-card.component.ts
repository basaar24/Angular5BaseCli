import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GitHubCardModel } from "../models/git-hub-card.model";

@Component({
  selector: 'app-git-hub-card',
  templateUrl: './git-hub-card.component.html',
  styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit {

  @Input('github-data') gitHubCard: GitHubCardModel;
  constructor() { }

  ngOnInit() {
    // this.gitHubCard = new GitHubCardModel();
    // this.gitHubCard.avatar_url = 'https://d30y9cdsu7xlg0.cloudfront.net/png/630729-200.png';
    // this.gitHubCard.name = 'Arturo Barajas Saavedra';
    // this.gitHubCard.login = 'basaar24';
    // this.gitHubCard.followers = 0;
    // this.gitHubCard.following = 0;
  }

  ngOnDestroy() {
    
  }

}
