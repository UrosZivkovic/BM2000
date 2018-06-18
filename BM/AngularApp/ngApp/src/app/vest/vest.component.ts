import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css']
})
export class VestComponent implements OnInit {

  private _vesti = [];

  private _lastPostIndex;

  constructor(private _postsManager: PostsManagerService) {

    console.log("Component consturctor....");
    this._lastPostIndex = this._postsManager.getLastPostIndex();
    console.log("_lastPostIndex set to : " + this._lastPostIndex);
  }

  ngOnInit() {

    let _this = this;

    let savedPosts = localStorage.getItem("currentPosts");
    console.log("INITIAL STORAGE STATE: \n" + savedPosts);
    if (savedPosts != null) {

      console.log("Loading posts from storage");

      this._vesti = JSON.parse(savedPosts);

    } else {

      console.log("Sending request for posts");

      this.getNextPosts(2);

    }
  }

  public dodajPostClick() {
    this.getNextPosts(2)
  }

  public getNextPosts(count: number) {

    let _this = this;

    // get posts
    this._postsManager.getNextPart(this._lastPostIndex, parseInt(this._lastPostIndex) + count).subscribe(
      function (res) {
        console.log("Receiving from: " + _this._lastPostIndex + " to: " + (parseInt(_this._lastPostIndex) + count));

        _this._vesti = _this._vesti.concat(res);
        _this._lastPostIndex += count;

        console.log("Received: "+String(res));

        _this._postsManager.saveLastPostIndex(_this._lastPostIndex);
        _this._postsManager.savePostsToLocalStorage(res);

      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log("...FETCH COMPLETED...");
      }
    );
  }


}
