import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-korisnik2',
  templateUrl: './korisnik2.component.html',
  styleUrls: ['./korisnik2.component.css']
})
export class Korisnik2Component implements OnInit {

  private _user;

  private _novosti = [];

  private _obavestenja = {
    procitana: [],
    neprocitana: []
  };

  constructor(private _authService: AuthService, private _router: Router, private _postsManager: PostsManagerService) {

  }

  ngOnInit() {

    let _this = this;

    if (!this._authService.loggedIn()) {
      this._router.navigate(['/login']);
    } else {

      this._user = JSON.parse(localStorage.getItem("loggedUserData"));

      this._novosti = JSON.parse(localStorage.getItem("_pracene_novosti"));
      // ukoliko podaci jos nisu pribavljeni (prvi put posecuje stranicu profil)
      if (this._novosti == null) {
        this._postsManager.getUserContent_Novosti(this._user._id).subscribe(
          function (data) {
            _this._novosti = data;
          },
          function (err) {
            console.log("ERROR");
            console.log(err);
          }
        );

        // save novosti to local storage
        this._postsManager.savePraceneNovostiToLocalStorage(this._novosti);

      }

      this._obavestenja = JSON.parse(localStorage.getItem("_obavestenja"));
      // ukoliko podaci jos nisu pribavljeni (prvi put posecuje stranicu profil)
      if (this._novosti == null) {
        this._postsManager.getUserContent_Obavestenja(this._user._id).subscribe(
          function (data) {
            _this._obavestenja = data;

          },
          function (err) {
            console.log("ERROR");
            console.log(err);
          }
        );

        // save obavestenja to local storage
        this._postsManager.saveObavestenjaToLocalStorage(this._obavestenja);

      }

    }
  }

}

