import {Component, Input, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-obavestenje-forma',
  templateUrl: './obavestenje-forma.component.html',
  styleUrls: ['./obavestenje-forma.component.css']
})
export class ObavestenjeFormaComponent implements OnInit {

  @Input() idPosta;

  public obavestenje = {idZavoda: 1, datum: Date.now()};

  public podaciZaDodavanje = {idObavestenja: 1, id: 1};

  _loggedUser = {idZavoda: 1};

  constructor(private _formeService: FormeService) {
  }

  submitForm() {
    let _this = this;

    this._loggedUser = JSON.parse(localStorage.getItem("loggedUserData"));

    console.log(this._loggedUser);

    this.obavestenje.idZavoda = this._loggedUser.idZavoda;

    this.obavestenje.datum = Date.now();

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
