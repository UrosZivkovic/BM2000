import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  private user = {};

  constructor() {
  }

  ngOnInit() {
    console.log(localStorage.getItem("loggedUserData"));
    this.user = JSON.parse(localStorage.getItem("loggedUserData"));
    console.log("ATTENTION \n\n\n\n\n" + this.user);
  }

}
