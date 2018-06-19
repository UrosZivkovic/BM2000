import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConfigurationService} from '../server-configuration.service';

@Injectable({
  providedIn: 'root'
})

export class PostsManagerService {

  private _allPostsUrl;
  private _nextPartOfPostsUrl;
  private _userContent_NovostiUrl;
  private _userContent_ObavestenjaUrl;

  constructor(private _http: HttpClient, private _serverConfig: ServerConfigurationService) {
    this._allPostsUrl = this._serverConfig.getAllPostsUrl();
    this._nextPartOfPostsUrl = this._serverConfig.getNextPartOfPostsUrl();
    this._userContent_ObavestenjaUrl = this._serverConfig.getUserContent_NovostiUrl();
    this._userContent_NovostiUrl = this._serverConfig.getUserContent_ObavestenjaUrl();
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

  public getUserContent_Novosti(userId) {
    console.log("Sending request for pracene_novosti on: "+this._userContent_NovostiUrl);
    return this._http.post<any>(this._userContent_NovostiUrl, {id: userId});
  }

  public getUserContent_Obavestenja(userId) {
    console.log("Sending request for pracene_obavestenja on: "+this._userContent_ObavestenjaUrl);
    return this._http.post<any>(this._userContent_ObavestenjaUrl, {id: userId});
  }

  public savePraceneNovostiToLocalStorage(novosti: any[]) {

  }

  public saveObavestenjaToLocalStorage(obavestenja: {}) {

  }

}
