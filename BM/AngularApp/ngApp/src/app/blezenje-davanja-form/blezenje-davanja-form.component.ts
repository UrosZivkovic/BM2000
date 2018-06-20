import {Component, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-blezenje-davanja-form',
  templateUrl: './blezenje-davanja-form.component.html',
  styleUrls: ['./blezenje-davanja-form.component.css']
})
export class BlezenjeDavanjaFormComponent implements OnInit {

   _brojDavaoca;

  constructor(private _formService: FormeService) {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log({id: this._brojDavaoca, date: Date.now()});

    this._formService.sendZabeleziDavanje({id: this._brojDavaoca, date: Date.now()})
    .subscribe(res => {
      console.log(res); },
       err => console.log(err));
    // tamo u funkciji na serveru on uzima id a ja mu to ne saljem, saljem mu neki tamo broj davaoca
  }


}
