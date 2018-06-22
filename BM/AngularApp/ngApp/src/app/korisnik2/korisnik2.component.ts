import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {PostsManagerService} from '../posts_manager_service/posts-manager.service';

@Component({
  selector: 'app-korisnik2',
  templateUrl: './korisnik2.component.html',
  styleUrls: ['./korisnik2.component.css']
})
export class Korisnik2Component implements OnInit {

  private _activeTab;

  private _user: {
    _id: string,
    email: string,
    password: string,
    ime: string,
    prezime: string,
    krvnaGrupa: string,
    tipKorisnika: string,
    bojDavaoca: string,
    idZavoda: string,
    davanja: [{ date: string }]
  };

  private _novosti = [];

  // private _obavestenja = {
  //   procitana: [],
  //   neprocitana: []
  // };
  private _obavestenja = [];

  private _istorijaDogadjaja = [];

  private _primljene_poruke = [];

  constructor(private _authService: AuthService, private _router: Router, private _postsManager: PostsManagerService) {

  }

  ngOnInit() {

    const _this = this;

    if (!this._authService.loggedIn()) {
      this._router.navigate(['/login']);
    } else {

      this._user = JSON.parse(localStorage.getItem('loggedUserData'));

      let storedNovosti = localStorage.getItem("_pracene_novosti");

      if (storedNovosti == null) {
        this._postsManager.getUserContent_Novosti(this._user._id).subscribe(
          function (data) {
            console.log("getting novosti from server");

            _this._novosti = data;
            _this._postsManager.savePraceneNovostiToLocalStorage(_this._novosti);
          },
          function (err) {
            console.log('ERROR');
            console.log(err);
          }
        );
      } else {
        console.log("loadting novosti from storage");
        this._novosti = JSON.parse(storedNovosti);
      }

      let storedObavestenja = localStorage.getItem("_obavestenja");

      if (storedObavestenja == null) {
        this._postsManager.getUserContent_Obavestenja(this._user._id).subscribe(
          function (data) {
            console.log("getting obavestenja from server");
            _this._obavestenja = data;
            _this._postsManager.saveObavestenjaToLocalStorage(_this._obavestenja);

          },
          function (err) {
            console.log('ERROR');
            console.log(err);
          }
        );
      } else {
        console.log("loading obavestenja from storage");
        this._obavestenja = JSON.parse(storedObavestenja);
      }

      let storedPoruke = localStorage.getItem("_poruke");

      if (storedPoruke != null) {
        console.log("loading poruke from storage")
        this._primljene_poruke = JSON.parse(storedPoruke);
      } else {
        console.log("loading poruke from server for: "+_this._user.idZavoda);
        this._postsManager.getPorukeFor(_this._user.idZavoda).subscribe(
          function (data) {
            console.log("primljene poruke");
            console.log(data);
            _this._primljene_poruke = data;
            _this._postsManager.zapamtiPorukeUstorage(data);
          },
          function (err) {
            console.log(err);
          }
        )
      }


    }
  }

  private saveClickHistory(event) {
    // ako nije prvi klik klikni na poslednje dugme
    // tslint:disable-next-line:curly
    if (this._activeTab)
      this._activeTab.click();
    // zapamti na sta je kliknuto
    this._activeTab = event.currentTarget;
  }

}

