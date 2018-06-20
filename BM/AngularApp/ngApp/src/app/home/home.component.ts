import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _defaultPost = [];

  private _lastIndexDefaultNovosti;

  constructor(private _postsManager: PostsManagerService) {
    this._lastIndexDefaultNovosti = this._postsManager.getLastDefaultNovostiIndex();
  }

  ngOnInit() {
    let _this = this;

    let savedPosts = localStorage.getItem("defaultNovosti");
    console.log("INITIAL STORAGE STATE: \n" + savedPosts);
    if (savedPosts != null) {

      console.log("Loading posts from storage");

      this._defaultPost = JSON.parse(savedPosts);

    } else {

      console.log("Sending request for posts");

      this.getNextNovosti(3);

    }

  }

  getNextNovosti(count) {

    let _this = this;

    this._postsManager.getDefaultNovosti(this._lastIndexDefaultNovosti, this._lastIndexDefaultNovosti + count).subscribe(
      function (data) {
        console.log("dobio data");
        _this._defaultPost = _this._defaultPost.concat(data);
        console.log(data);
        console.log("Nakon dodavanja: ");
        console.log(_this._defaultPost);
        _this._lastIndexDefaultNovosti += count;

        _this._postsManager.saveLastDefaultNovostiIndex(_this._lastIndexDefaultNovosti);
        _this._postsManager.saveDefaultNovosti(data);

      },
      function (err) {

      }
    );
  }


  public clickOnKorisnikHandler() {
    console.log("storing /profil as root");
    localStorage.setItem("redirectingPath", "/profil");
  }

}
