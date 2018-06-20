import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';

@Component({
  selector: 'app-brisanje-naloga',
  templateUrl: './brisanje-naloga.component.html',
  styleUrls: ['./brisanje-naloga.component.css']
})
export class BrisanjeNalogaComponent implements OnInit {

  userData = {};
  constructor(private _formeService: FormeService) { }

  ngOnInit() {
  }
  submitForm() {
    console.log(this.userData);
    this._formeService.sendObrisiUsera(this.userData)
     .subscribe(res => {
      console.log(res); },
       err => console.log(err));
  }
}

