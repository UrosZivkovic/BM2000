import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {FakePostsManagerService} from "../posts_manager_service/fake-posts-manager.service";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css']
})
export class VestComponent implements OnInit {

  private _vesti = [];

  private _lastPostIndex: number;

  constructor(private _postsManager: FakePostsManagerService) {
    this._lastPostIndex = 0;
  }

  ngOnInit() {

    let savedPosts = localStorage.getItem("currentPosts");
    console.log("INITIAL STORAGE STATE: \n"+savedPosts);
    if (savedPosts != null) {

      console.log("Loading posts from storage");

      this._vesti = JSON.parse(savedPosts);

    } else {

      console.log("Getting posts from server");
      this.getNextPosts(4);

    }
  }

  public dodajPostClick() {
    this.getNextPosts(2)
  }

  public getNextPosts(count: number) {

    // get posts
    let newPosts = this._postsManager.getNextPart(this._lastPostIndex, this._lastPostIndex + count);
    this._vesti = this._vesti.concat(newPosts);
    this._lastPostIndex += count;
    // posts set
    // just update local storage

    console.log("got posts");

    // get posts as string
    let postsFromStorage = localStorage.getItem("currentPosts");
    console.log("FROM:\n" + postsFromStorage);

    // place for posts as array
    let storedArray;

    if (postsFromStorage != null) {
      storedArray = JSON.parse(postsFromStorage);
      console.log(storedArray);
    } else {
      storedArray = [];
    }

    console.log("TO: \n" + storedArray.concat(newPosts));

    localStorage.setItem("currentPosts", JSON.stringify(storedArray.concat(newPosts)));

    // this._postsManager.getNextPart(this._lastPostIndex).subscribe(
    //   function (res) {
    //     _this._vesti = res;
    //   }
    //   , function (err) {
    //     console.log(err);
    //   });

  }


}
