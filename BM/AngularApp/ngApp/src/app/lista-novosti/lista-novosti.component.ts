import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-lista-novosti',
  templateUrl: './lista-novosti.component.html',
  styleUrls: ['./lista-novosti.component.css']
})
export class ListaNovostiComponent implements OnInit {

  // bice @Input()
  @Input() _listaNovosti;

  @Input() _tip_liste="novosti";

  constructor() {
    console.log("Constructor for lista novosti compoenta");
  }

  ngOnInit() {
    console.log(this._listaNovosti);
  }

}
