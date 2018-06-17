import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-normal-e',
  templateUrl: './normal-e.component.html',
  styleUrls: ['./normal-e.component.css']
})
export class NormalEComponent implements OnInit {

  events = [];

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {

    console.log("SALJE SE ZAHTEV " + this._eventService.getEventsNormalUrl());

    let _this = this;

    this._eventService.getNormalEvents().subscribe(
      function (res) {
        _this.events = res;
      }, function (err) {
        console.log("\n\n\n\n\n GRESKA:      " + err + "\n\n\n\n\n\n");
      }
    );

  }

}
