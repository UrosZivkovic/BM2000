import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.css']
})
export class NovostComponent implements OnInit {

  @Input() _dataId;

  @Input()_naslov = "neki tamo naslov";
  @Input() _sadrzaj = "neki tamo sadrzaj";

  constructor() {
  }

  ngOnInit() {
  }

}
