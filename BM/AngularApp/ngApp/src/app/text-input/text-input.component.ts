import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  userData = {};

  constructor(private _formeService: FormeService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('loggedUserData'));
    this.userData['datum'] = Date.now();
    this.userData['idZavoda'] = user.idZavoda;
    console.log(user);
  }

}
