import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';
@Component({
  selector: 'app-obavestenje-forma',
  templateUrl: './obavestenje-forma.component.html',
  styleUrls: ['./obavestenje-forma.component.css']
})
export class ObavestenjeFormaComponent implements OnInit {
  userData = {};

  constructor(private _formeService: FormeService) { }

  submitForm() {

    console.log(this.userData);
    this._formeService.sendObavestenjeForm(this.userData)
     .subscribe(res => {
     console.log(res); },
       err => console.log(err));
    }
  ngOnInit() {
  }

}
