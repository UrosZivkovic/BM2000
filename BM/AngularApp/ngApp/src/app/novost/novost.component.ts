import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.css']
})
export class NovostComponent implements OnInit {

  @Input() _dataId;

<<<<<<< HEAD
  @Input()_naslov = "neki tamo naslov";
  @Input() _sadrzaj = "neki tamo sadrzaj";
=======
  public _naslov = 'neki tamo naslov';
  public _sadrzaj = 'neki tamo sadrzaj';
>>>>>>> 1cab45880b21580c4a3c30ff0d8ac530abbeca6c

  constructor() {
  }

  ngOnInit() {
  }

}
