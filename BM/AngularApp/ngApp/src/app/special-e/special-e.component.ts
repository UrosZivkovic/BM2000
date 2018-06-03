import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-e',
  templateUrl: './special-e.component.html',
  styleUrls: ['./special-e.component.css']
})
export class SpecialEComponent implements OnInit {

  specialEvents=[];
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      res=>this.specialEvents =res,
      err=> console.log(err)
    )
  }

}
