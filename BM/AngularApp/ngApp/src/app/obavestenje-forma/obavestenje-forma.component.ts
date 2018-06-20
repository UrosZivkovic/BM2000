import {Component, Input, OnInit} from '@angular/core';
import {FormeService} from '../forme.service';

@Component({
  selector: 'app-obavestenje-forma',
  templateUrl: './obavestenje-forma.component.html',
  styleUrls: ['./obavestenje-forma.component.css']
})
export class ObavestenjeFormaComponent implements OnInit {

  @Input() idPosta;

  obavestenje = {};

  constructor(private _formeService: FormeService) {
  }

  submitForm() {
    this.obavestenje['datum'] = Date.now();
    console.log(this.obavestenje);
    this._formeService.sendObavestenjeForm(this.obavestenje)
      .subscribe(res => {
          console.log(res);
        },
        err => console.log(err));
  }

  ngOnInit() {
  }

}
