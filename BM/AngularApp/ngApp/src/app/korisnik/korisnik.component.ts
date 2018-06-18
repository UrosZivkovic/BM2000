import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  private user;

  constructor() {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUserData"));
  }

}
