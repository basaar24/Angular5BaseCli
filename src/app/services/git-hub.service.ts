import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitHubCardModel } from "../models/git-hub-card.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GitHubService {   
    private _getUserUrl = 'https://api.github.com/users';
    
    constructor(private _http: HttpClient) {

    }

    getUser(userName: string) {
        return this._http
                    .get<GitHubCardModel>(`${this._getUserUrl}/${userName}`, {responseType: 'json'})
                    .map(x => {
                        let gitHubCardModel = new GitHubCardModel();
                        gitHubCardModel.avatar_url = x.avatar_url;
                        gitHubCardModel.followers = x.followers;
                        gitHubCardModel.following = x.following;
                        gitHubCardModel.login = x.login;
                        gitHubCardModel.name = x.name;
                        return gitHubCardModel;
                    })
                    .catch(this.handleError);
    }

    handleError(error:any) {
        console.log(error);
        return Observable.throw(error);
    }
}