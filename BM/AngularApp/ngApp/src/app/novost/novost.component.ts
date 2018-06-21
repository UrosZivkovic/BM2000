import {Component, OnInit, Input} from '@angular/core';
import {AuthService} from "../auth.service";
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.css']
})
export class NovostComponent implements OnInit {

  @Input() _dataId;

  @Input() _naslov = "neki tamo naslov";
  @Input() _sadrzaj = "neki tamo sadrzaj";

  @Input() _tip_novosti = "novosti";

  _user = {
    _id: "1",
    novost: []
  };

  constructor(private _authService: AuthService, private _postsManager: PostsManagerService) {
  }

  ngOnInit() {
    this._user = JSON.parse(localStorage.getItem("loggedUserData"));
    console.log(this._user);
  }

  subscribeToPost() {
    this._postsManager.subscribeToPost(this._dataId, this._user._id);
  }

  unsubscribeFromPost(){

  }

  subscribedToPost() {
    console.log(this._dataId);
    for (let _novost of this._user.novost) {
      if (_novost == this._dataId)
        return true;
    }
    return false;
  }

}
