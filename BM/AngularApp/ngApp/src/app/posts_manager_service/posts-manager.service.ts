import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConfigurationService} from '../server-configuration.service';

@Injectable({
  providedIn: 'root'
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

  public getNextPart(_lastPostIndex: number) {
    // napravi rutu na server
    return this._http.get<any>(this._nextPartOfPostsUrl);
  }


}
