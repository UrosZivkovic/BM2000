import { Component, OnInit } from '@angular/core';
import { FormeService } from '../forme.service';

@Component({
  selector: 'app-brisanje-naloga',
  templateUrl: './brisanje-naloga.component.html',
  styleUrls: ['./brisanje-naloga.component.css']
})
export class BrisanjeNalogaComponent implements OnInit {

  userData = {};
  constructor(private _formeService: FormeService) { }

  ngOnInit() {
  }

}
