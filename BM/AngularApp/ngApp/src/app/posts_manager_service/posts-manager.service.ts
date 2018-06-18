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

  public getNextPart(_startingIndex: number, _lastIndex: number) {
    return this._http.post<any>(this._nextPartOfPostsUrl, {firstIndex: _startingIndex, lastIndex: _lastIndex});
  }

  public savePostsToLocalStorage(newPosts: any[]) {
    // get posts as string
    let postsFromStorage = localStorage.getItem("currentPosts");

    // place for posts as array
    let storedArray;

    if (postsFromStorage != null) {
      // if posts exists in local storage create array from them
      storedArray = JSON.parse(postsFromStorage);
    } else {
      storedArray = [];
    }

    // save again all posts
    localStorage.setItem("currentPosts", JSON.stringify(storedArray.concat(newPosts)));

  }

  public getLastPostIndex(): number {
    let storedValue = localStorage.getItem("lastPostIndex");
    if (storedValue != null)
      return parseInt(storedValue);
    else
      return 0;
  }

  public saveLastPostIndex(index) {
    localStorage.setItem("lastPostIndex", index);
  }

}
