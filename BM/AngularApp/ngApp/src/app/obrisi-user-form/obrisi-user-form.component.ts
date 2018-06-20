import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';

@Component({
  selector: 'app-obrisi-user-form',
  templateUrl: './obrisi-user-form.component.html',
  styleUrls: ['./obrisi-user-form.component.css']
})
export class ObrisiUserFormComponent implements OnInit {
 userData = {};
  constructor(private _formeService: FormeService) { }

  submitForm() {
    // console.log()
    this._formeService.sendObrisiUsera(this.userData).subscribe(res => {
      console.log(res); },
        err => console.log(err));
     }

  ngOnInit() {
  }

}
