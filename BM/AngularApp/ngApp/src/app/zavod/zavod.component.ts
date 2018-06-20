import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zavod',
  templateUrl: './zavod.component.html',
  styleUrls: ['./zavod.component.css']
})
export class ZavodComponent implements OnInit {

  public _listaZavoda = [
    {
      id: "1",
      naziv: "Zavod Nis"
    },
    {
      id: "2",
      naziv: "Zavod Beograd"
    },
    {
      id: "3",
      naziv: "Zavod Smederevo"
    }

  ]

  constructor() {
  }

  ngOnInit() {
  }

  getNovosti(idZavoda) {
    console.log("Getting novosti for zavod : " + idZavoda);
  }

}
