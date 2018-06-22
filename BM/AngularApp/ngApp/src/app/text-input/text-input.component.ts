import {Component, Input, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() _zavod;

  textData = {};

  constructor(private _formeService: FormeService) {
  }

  ngOnInit() {
    console.log("uso u init za input message");
  }

  submitForm() {
    console.log("senging message");
    const user = JSON.parse(localStorage.getItem('loggedUserData'));
    this.textData['email'] = user.email;
    this.textData['ime'] = user.ime;
    this.textData['idZavoda'] = this._zavod._id;
    console.log("zavod kome se salje: "+this._zavod._id);
    this.textData['prezime'] = user.prezime;
    this.textData['date'] = Date.now();
    this.textData['date'] = Date.now();
    console.log(this.textData);
    this._formeService.sendPosaljiPoruku(this.textData)
      .subscribe(res => {
          console.log(res);
        },
        err => console.log(err));
  }

}
