import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-privilegovana-strana',
  templateUrl: './privilegovana-strana.component.html',
  styleUrls: ['./privilegovana-strana.component.css']
})
export class PrivilegovanaStranaComponent implements OnInit {

  private _activeTab = null;

  constructor() {
  }

  ngOnInit() {
  }

  private saveClickHistory(event) {

    if (this._activeTab === event.target) {
      this._activeTab = null;
    } else {
      if (this._activeTab != null)
        this._activeTab.click();

      this._activeTab = event.target;
    }

  }

}
