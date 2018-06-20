import {Component, OnInit} from '@angular/core';
import {FormeService} from "../forme.service";

@Component({
  selector: 'app-blezenje-davanja-form',
  templateUrl: './blezenje-davanja-form.component.html',
  styleUrls: ['./blezenje-davanja-form.component.css']
})
export class BlezenjeDavanjaFormComponent implements OnInit {

  private _brojDavaoca;

  constructor(private _formService: FormeService) {
  }

  ngOnInit() {
  }

  submitForm() {
    this._formService.sendZabeleziDavanje({id: this._brojDavaoca, date: Date.now()});
    // tamo u funkciji na serveru on uzima id a ja mu to ne saljem, saljem mu neki tamo broj davaoca
  }


}
