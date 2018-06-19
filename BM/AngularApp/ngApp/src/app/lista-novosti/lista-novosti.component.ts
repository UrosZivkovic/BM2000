import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-novosti',
  templateUrl: './lista-novosti.component.html',
  styleUrls: ['./lista-novosti.component.css']
})
export class ListaNovostiComponent implements OnInit {

  private _listaNovosti = [
    {id: "1234", naslov: "Naslov 1", sadrzaj: "sadrzaj 1"},
    {id: "4321", naslov: "naslov2", sadrzaj: "sadrzaj 2"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
