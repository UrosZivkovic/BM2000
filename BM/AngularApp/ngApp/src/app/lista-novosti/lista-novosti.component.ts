import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-novosti',
  templateUrl: './lista-novosti.component.html',
  styleUrls: ['./lista-novosti.component.css']
})
export class ListaNovostiComponent implements OnInit {

  @Input() _listaNovosti ;

  constructor() {
  }

  ngOnInit() {
  }

}
