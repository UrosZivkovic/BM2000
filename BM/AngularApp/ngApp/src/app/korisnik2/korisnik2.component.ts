import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-korisnik2',
  templateUrl: './korisnik2.component.html',
  styleUrls: ['./korisnik2.component.css']
})
export class Korisnik2Component implements OnInit {


  private _user = {};

  constructor(private _authService: AuthService, private _router: Router) {

  }

  ngOnInit() {
    if (!this._authService.loggedIn()) {
      this._router.navigate(['/login']);
    } else {
      console.log(localStorage.getItem("loggedUserData"));
      this._user = JSON.parse(localStorage.getItem("loggedUserData"));
    }
  }

}

