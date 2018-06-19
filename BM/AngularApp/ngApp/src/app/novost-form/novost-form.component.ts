import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';
@Component({
  selector: 'app-novost-form',
  templateUrl: './novost-form.component.html',
  styleUrls: ['./novost-form.component.css']
})
export class NovostFormComponent implements OnInit {
  userData = {};
  constructor(private _formeService: FormeService) { }
  submitForm() {

    console.log(this.userData);
    this._formeService.sendUserForm(this.userData)
     .subscribe(res => {
     console.log(res); },
       err => console.log(err));
    }
  ngOnInit() {
  }

}
