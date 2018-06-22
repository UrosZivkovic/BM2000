import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-poruka',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css']
})
export class PorukaComponent implements OnInit {

  @Input() _poruka;

  constructor() {
  }

  ngOnInit() {
  }

}
