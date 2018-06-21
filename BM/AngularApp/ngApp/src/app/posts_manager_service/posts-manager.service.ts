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
    const postsFromStorage = localStorage.getItem('currentPosts');

    // place for posts as array
    let storedArray;

    if (postsFromStorage != null) {
      // if posts exists in local storage create array from them
      storedArray = JSON.parse(postsFromStorage);
    } else {
      storedArray = [];
    }

    // save again all posts
    localStorage.setItem('currentPosts', JSON.stringify(storedArray.concat(newPosts)));

  }

  public savePostsZavod(newPosts, idZavoda) {
    const postsFromStorage = localStorage.getItem("novostiZavod" + idZavoda);

    let storedArray;

    if (postsFromStorage != null) {
      storedArray = JSON.parse(postsFromStorage);
    } else {
      storedArray = [];
    }

    localStorage.setItem("novostiZavod" + idZavoda, JSON.stringify(storedArray.concat(newPosts)));

  }

  public getLastPostIndex(): number {
    const storedValue = localStorage.getItem('lastPostIndex');
    // tslint:disable-next-line:curly
    if (storedValue != null)
    // tslint:disable-next-line:radix
      return parseInt(storedValue);
    // tslint:disable-next-line:curly
    else
      return 0;
  }

  public getLastPostIndexZavod(idZavoda) {
    const storedValue = localStorage.getItem("lastPostIndexZavod" + idZavoda);
    if (storedValue != null)
      return parseInt(storedValue);
    else
      return 0;
  }

  public getLastDefaultNovostiIndex() {
    const storedValue = localStorage.getItem("lastDefaultNovostiIndex");
    if (storedValue != null)
      return parseInt(storedValue);
    else
      return 0;
  }


  public saveLastPostIndex(index) {
    localStorage.setItem('lastPostIndex', index);
  }

  public saveLastDefaultNovostiIndex(index) {
    localStorage.setItem("lastDefaultNovostiIndex", index);
  }


  public getUserContent_Novosti(userId) {
    console.log('Sending request for pracene_novosti on: ' + this._userContent_NovostiUrl);
    return this._http.post<any>(this._userContent_NovostiUrl, {id: userId});
  }

  public getUserContent_Obavestenja(userId) {
    console.log('Sending request for pracene_obavestenja on: ' + this._userContent_ObavestenjaUrl);
    return this._http.post<any>(this._userContent_ObavestenjaUrl, {id: userId});
  }

  public savePraceneNovostiToLocalStorage(novosti: any[]) {

  }

  public saveObavestenjaToLocalStorage(obavestenja: {}) {

  }

  public userSubscribedToPost(postId: string) {
    return true;
  }

  public subscribeToPost(postId: string) {
    console.log("Subscibing to " + postId);
  }

  public unsubscribeFromPost(postId: string) {
    console.log("Unsubscribing " + postId);
  }


  public getNextPostsZavod(firstIndex, lastIndex, idZavoda) {
    return this._http.post<any>(this._serverConfig.getZavodNovostiInterval(), {
      firstIndex: firstIndex,
      lastIndex: lastIndex,
      idZavoda: idZavoda
    });

  }

  public saveLastPostIndexZavod(index, idZavod) {
    localStorage.setItem("lastPostIndexZavod" + idZavod, index);
  }

  public getDefaultNovosti(_firstIndex, _lastIndex) {
    return this._http.post<any>(this._serverConfig.getDefaultNovosti(), {
      firstIndex: _firstIndex,
      lastIndex: _lastIndex
    });
  }

  public saveDefaultNovosti(data) {
    const postsFromStorage = localStorage.getItem("defaultNovosti");

    let storedArray;

    if (postsFromStorage != null) {
      storedArray = JSON.parse(postsFromStorage);
    } else {
      storedArray = [];
    }

    localStorage.setItem("defaultNovosti", JSON.stringify(storedArray.concat(data)));
  }

  public getZavodi() {
    return this._http.get<any>(this._serverConfig.getZavodiUrl());
  }

  public saveZavodi(data) {
    localStorage.setItem("zavodiStorage", JSON.stringify(data));
  }

  public savePrikazaniZavod(index) {
    localStorage.setItem("prikazaniZavod", index);
  }

  public getLastPrikazaniZavod() {
    let zavod = localStorage.getItem("prikazaniZavod");
    if (zavod != null)
      return parseInt(zavod);
    else
      return -1;
  }

  public getPoruke(){
    return this._http.get<any>(this._serverConfig.getPorukeUrl());
  }

  public zapamtiPorukeUstorage(poruke){
    localStorage.setItem("poruke",poruke);
  }


}
