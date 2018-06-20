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
    this.userData['date'] = Date.now();
    const user = JSON.parse(localStorage.getItem('loggedUserData'));
    // console.log(user.idZavoda );
    this.userData['idZavoda'] = user.idZavoda;
    // this.userData['idZavoda'] = localStorage.getItem(this.userData)
    console.log(this.userData);

     this._formeService.sendNovostiForm(this.userData)
     .subscribe(res => {
      console.log(res); },
       err => console.log(err));
    }
  ngOnInit() {
  }

}
