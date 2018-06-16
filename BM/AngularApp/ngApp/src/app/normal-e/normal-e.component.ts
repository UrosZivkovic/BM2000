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
    this._eventService.getNormalEvents().subscribe(
      res => this.events = res,
      err => console.log(err)
    );
  }

}
