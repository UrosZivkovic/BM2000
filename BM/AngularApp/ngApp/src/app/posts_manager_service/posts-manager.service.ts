import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerConfigurationService} from "../server-configuration.service";

@Injectable({
  providedIn: "root"
})

export class PostsManagerService {

  private postArray = [];

  private lastPostIndex;

  constructor(private _http: HttpClient, private _serverConfig: ServerConfigurationService) {
    this.lastPostIndex = 0;
  }

  public getAllPosts() {
    // sets this.postsArray to fetched array
  }

  public getNextPart() {
    // gets next part of posts and adds them to this.postArray
    // last post index in this.lastPostIndex
  }

}
