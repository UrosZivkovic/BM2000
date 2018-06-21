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

  private _num_of_stored_posts: number;

  constructor(private _postsManager: PostsManagerService) {
    this._lastIndexDefaultNovosti = this._postsManager.getLastDefaultNovostiIndex();
  }

  ngOnInit() {
    this._num_of_stored_posts = 0;

    let _this = this;

    let savedPosts = localStorage.getItem("defaultNovosti");
    if (savedPosts != null) {

      this._defaultPost = JSON.parse(savedPosts);
      this._num_of_stored_posts = this._defaultPost.length;

    } else {

      this.getNextNovosti(3);

    }

  }

  getNextNovosti(count) {

    let _this = this;

    this._postsManager.getDefaultNovosti(this._lastIndexDefaultNovosti, this._lastIndexDefaultNovosti + count).subscribe(
      function (data: any[]) {
        for (let _i = 0; _i < data.length; _i++) {
          console.log(data[_i]);
          console.log(data[_i].naslov);
          if (data[_i].naslov == "Index ot ouf range") {
            console.log("uso u if");
            data.splice(_i, 1);
            console.log("splice " + _i);
          }
        }

        _this._defaultPost = _this._defaultPost.concat(data);
        _this._lastIndexDefaultNovosti += count;

        _this._postsManager.saveLastDefaultNovostiIndex(_this._lastIndexDefaultNovosti);
        if (_this._num_of_stored_posts < 20) {
          _this._postsManager.saveDefaultNovosti(data);
          _this._num_of_stored_posts += data.length;
        }

      },
      function (err) {

      }
    );
  }


  public clickOnKorisnikHandler() {
    localStorage.setItem("redirectingPath", "/profil");
  }

}
