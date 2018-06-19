import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-sadrzaj-korisnika',
  templateUrl: './sadrzaj-korisnika.component.html',
  styleUrls: ['./sadrzaj-korisnika.component.css']
})
export class SadrzajKorisnikaComponent implements OnInit {

  private _activeTab;

  private _novosti;
  private _obavestenja = {
    procitana: [],
    neprocitana: []
  };

  constructor(private _authService: AuthService, private _postsManager: PostsManagerService) {

  }

  ngOnInit() {
    if (this._authService.loggedIn()) {
      this._novosti = JSON.parse(localStorage.getItem("_pracene_novosti"));
      this._obavestenja = JSON.parse(localStorage.getItem("_obavestenja"));
    }
  }

  private saveClickHistory(event) {
    // ako nije prvi klik klikni na poslednje dugme
    if (this._activeTab)
      this._activeTab.click();
    // zapamti na sta je kliknuto
    this._activeTab = event.currentTarget;
  }


}
