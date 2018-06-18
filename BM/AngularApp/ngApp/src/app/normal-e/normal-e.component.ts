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

    let _this = this;

    this._eventService.getNormalEvents().subscribe(
      function (res) {
        _this.events = res;
      }, function (err) {
        console.log("greska kod normal sa servera");
        console.log(err);
      }
    );

    localStorage.removeItem("currentPosts");
    localStorage.setItem("lastPostIndex", String(0));

  }

}
