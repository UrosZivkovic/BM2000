import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sadrzaj-korisnika',
  templateUrl: './sadrzaj-korisnika.component.html',
  styleUrls: ['./sadrzaj-korisnika.component.css']
})
export class SadrzajKorisnikaComponent implements OnInit {

  private _activeTab;

  constructor() {
  }

  ngOnInit() {
  }

  private saveClickHistory(event) {
    // ako nije prvi klik klikni na poslednje dugme
    if (this._activeTab)
      this._activeTab.click();
    // zapamti na sta je kliknuto
    this._activeTab = event.currentTarget;
  }


}
