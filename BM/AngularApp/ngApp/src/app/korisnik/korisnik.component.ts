import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})

export class KorisnikComponent implements OnInit {

  private user = {};

  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {

    if (!this._authService.loggedIn()) {
      this._router.navigate(['/login']);
    } else {
      console.log(localStorage.getItem("loggedUserData"));
      this.user = JSON.parse(localStorage.getItem("loggedUserData"));
    }
  }

}
