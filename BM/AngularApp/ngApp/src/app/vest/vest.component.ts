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

  private _lastPostIndex: number;

  constructor(private _postsManager: FakePostsManagerService) {
    this._lastPostIndex = 0;
  }

  ngOnInit() {

    let _this = this;

    this._vesti = this._vesti.concat(this._postsManager.getNextPart(this._lastPostIndex));

    console.log(this._vesti);

    // this._postsManager.getNextPart(this._lastPostIndex).subscribe(
    //   function (res) {
    //     _this._vesti = res;
    //   }
    //   , function (err) {
    //     console.log(err);
    //   });

  }

  public dodajPostClick() {

    let tempArray = this._postsManager.getNextPart(this._lastPostIndex);
    this._lastPostIndex += tempArray.length;
    this._vesti = this._vesti.concat(tempArray);

  }


}
