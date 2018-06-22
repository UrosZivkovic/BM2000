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
    this._postsManager.subscribeToPost(this._dataId, this._user._id).subscribe(
      function (res) {
        console.log("user subscribed");
      },
      function (err) {
        console.log("Error in subscibe");
        console.log(err);
      }
    )
  }

  unsubscribeFromPost() {
    _this=this;
    console.log("sengin from component to unsub: " + this._dataId + " userid: " + this._user._id);
    this._postsManager.unsubscribeFromPost(this._dataId, this._user._id);
    // subscribe u postMangeru
    this._postsManager.getUserById(this._user._id).subscribe(
      function(res){
        _this._user=res; 
        localStorage.setItem("loggedUserDate",JSON.stringify(res));
      },
      function(err){
        console.log("error while changing user");
        console.log(err);
      }
    )
  }

  subscribedToPost() {
    for (let _novost of this._user.novost) {
      console.log(_novost.idNovosti);
      if (_novost.idNovosti == this._dataId)
        return true;
    }

    return false;
  }

}
