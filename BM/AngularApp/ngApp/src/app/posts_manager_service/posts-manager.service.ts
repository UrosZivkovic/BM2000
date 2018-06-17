import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerConfigurationService} from "../server-configuration.service";

@Injectable({
  providedIn: "root"
})

export class PostsManagerService {

  private _allPostsUrl;
  private _nextPartOfPostsUrl;

  constructor(private _http: HttpClient, private _serverConfig: ServerConfigurationService) {
    this._allPostsUrl = this._serverConfig.getAllPostsUrl();
    this._nextPartOfPostsUrl = this._serverConfig.getNextPartOfPostsUrl();
  }

  public getAllPosts() {
    return this._http.get<any>(this._allPostsUrl);
  }

  public getNextPart(_startingIndex: number,_lastIndex:number) {
    return this._http.post(this._nextPartOfPostsUrl,{firstIndex:_startingIndex,lastIndex:_lastIndex});
  }


}
