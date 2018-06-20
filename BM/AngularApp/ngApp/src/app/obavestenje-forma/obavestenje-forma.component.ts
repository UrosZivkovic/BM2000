import {Component, Input, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-obavestenje-forma',
  templateUrl: './obavestenje-forma.component.html',
  styleUrls: ['./obavestenje-forma.component.css']
})
export class ObavestenjeFormaComponent implements OnInit {

  @Input() idPosta;

  obavestenje: {
    idZavoda: string,
    naslov: string,
    sadrzaj: string,
    datum: string
  };

  podaciZaDodavanje: {
    idObavestenja: string,
    id: string
  };

  _loggedUser: {
    _id: string
    email: string,
    password: String,
    ime: String,
    prezime: String,
    brojDavaoca: String,
    krvnaGrupa: String,
    obavestenja: [String],
    poruke: [{ idPoruke: String }],
    tipKorisnika: String,
    novost: [{ idNovosti: String }],
    davanja: [{ date: String }],
    idZavoda: String
  };

  constructor(private _formeService: FormeService) {
  }

  submitForm() {
    let _this = this;

    this._loggedUser = JSON.parse(localStorage.getItem("loggedUserData"));

    this.obavestenje.idZavoda = this._loggedUser.idZavoda;

    this.obavestenje.datum = String(Date.now());

    this.podaciZaDodavanje.id = this._loggedUser.idZavoda;

    this._formeService.sendObavestenjeForm(this.obavestenje).subscribe(
      function (response) {
        console.log("obavestenje dodato");
        console.log(response);
        _this.podaciZaDodavanje.idObavestenja = response._id;
      },
      function (err) {
        console.log(err);
      },
      function () {
        _this._formeService.addObavestenjeToNovost(_this.podaciZaDodavanje).subscribe(
          function (res) {
            console.log("odgovor sad dodavanja obavestenja");
            console.log(res);
          },
          function (err) {
            console.log(err);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
