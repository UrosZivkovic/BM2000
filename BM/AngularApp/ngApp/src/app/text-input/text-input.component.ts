import { Component, OnInit } from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor(private _formeService: FormeService) {
  }
  textData = {};



  ngOnInit() {
    console.log("uso u init za input message");
  }
  submitForm() {
    console.log("senging message");
    const user = JSON.parse(localStorage.getItem('loggedUserData'));
    this.textData['email'] = user.email;
    this.textData['ime'] = user.ime;
    this.textData['idZavoda'] = user.idZavoda;
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
