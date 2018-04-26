import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/git-hub.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _gitHubService: GitHubService) { }

  ngOnInit() {
  }

}
