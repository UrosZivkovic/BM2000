import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.css']
})
export class NovostComponent implements OnInit {

  public _dataId;

  public _naslov = "neki tamo naslov";
  public _sadrzaj = "neki tamo sadrzaj";

  constructor() {
  }

  ngOnInit() {
  }

}
