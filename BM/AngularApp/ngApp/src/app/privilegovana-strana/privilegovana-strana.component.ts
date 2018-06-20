import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-privilegovana-strana',
  templateUrl: './privilegovana-strana.component.html',
  styleUrls: ['./privilegovana-strana.component.css']
})
export class PrivilegovanaStranaComponent implements OnInit {

  private _activeTab = null;

  constructor(private _authService: AuthService) {

  }

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
