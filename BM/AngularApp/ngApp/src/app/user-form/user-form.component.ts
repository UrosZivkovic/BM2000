import {Component, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userData = {};

  constructor(private _formeService: FormeService) {
  }

  submitForm() {
    this._formeService.sendUserForm(this.userData)
      .subscribe(res => {
          console.log(res);
        },
        err => console.log(err));
  }

  ngOnInit() {
  }

}
