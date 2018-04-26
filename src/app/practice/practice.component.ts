import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubService } from "../services/git-hub.service";
import { GitHubCardModel } from "../models/git-hub-card.model";

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit, OnDestroy {

    gitHubDataList: Array<GitHubCardModel>;
    constructor(private _gitHubService: GitHubService) {

    }

    ngOnInit(): void {
        this.gitHubDataList = new Array<GitHubCardModel>();
    }

    ngOnDestroy(): void {    
    }

    onSearchUser(userName: string) {
        this._gitHubService
        .getUser(userName)
        .subscribe(x => this.gitHubDataList.push(x),
                    error => console.error(error));
    }

    onDeleteUser(gitHubData: GitHubCardModel) {
        this.gitHubDataList = this.gitHubDataList.filter(x => x !== gitHubData);
    }
}