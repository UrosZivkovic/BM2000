import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {FakePostsManagerService} from "../posts_manager_service/fake-posts-manager.service";

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css']
})
export class VestComponent implements OnInit {

  private _vesti = [];

  private _lastPostIndex;

  constructor(private _postsManager: FakePostsManagerService) {
    this._lastPostIndex = 0;
  }

  ngOnInit() {

    let _this = this;

    this._vesti=this._postsManager.getAllPosts();

    // this._postsManager.getNextPart(this._lastPostIndex).subscribe(
    //   function (res) {
    //     _this._vesti = res;
    //   }
    //   , function (err) {
    //     console.log(err);
    //   });

  }

}
