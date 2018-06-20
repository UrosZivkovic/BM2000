import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacije-davanje',
  templateUrl: './informacije-davanje.component.html',
  styleUrls: ['./informacije-davanje.component.css']
})
export class InformacijeDavanjeComponent implements OnInit {

  private _activeTab = null;

  ngOnInit() {
  }

  private saveClickHistory(event) {
    if (this._activeTab === event.target) {
      this._activeTab = null;
    } else {
      let tmp = event.target;
      if (this._activeTab != null)
        this._activeTab.click();
      this._activeTab = tmp;
    }
  }


}
