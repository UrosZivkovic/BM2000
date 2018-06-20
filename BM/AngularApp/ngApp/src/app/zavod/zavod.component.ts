import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {store} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-zavod',
  templateUrl: './zavod.component.html',
  styleUrls: ['./zavod.component.css']
})
export class ZavodComponent implements OnInit {

  private _listaZavoda = [];

  private _listaPostova = [];
  private _prikazaniZavod = -1;

  private _activeTab = null;

  private _lastPostIndexZavod;

  constructor(private _postsManger: PostsManagerService) {

  }

  loadZavodi() {

    let storedZavodi = localStorage.getItem("zavodiStorage");
    let _this = this;

    if (storedZavodi != null) {
      console.log("reading from storage");
      console.log(storedZavodi);

      this._listaZavoda = JSON.parse(storedZavodi);
    } else {
      console.log("loading zavodi from server");

      this._postsManger.getZavodi().subscribe(
        function (data) {
          _this._listaZavoda = data;
        },
        function (err) {
          console.log("Greska pri pribavljanju zavoda sa servera");
          console.log(err);
        }
      );

    }
  }

  ngOnInit() {
    this.loadZavodi();
  }

  private saveClickHistory(event) {

    if (this._activeTab === event.target) {
      this._activeTab = null;
    } else {
      if (this._activeTab != null)
        this._activeTab.click();

      this._activeTab = event.target;
    }

  }

  loadNovostiForZavod() {
    let storedNovosti = localStorage.getItem("novostiZavod" + this._listaZavoda[this._prikazaniZavod].idZavoda);

    if (storedNovosti != null) {

      console.log("loading novosti from storage");

      this._listaPostova = JSON.parse(storedNovosti);

      console.log(this._listaPostova);
    } else {
      this.getNextPosts(3);
    }

  }

  getNextPosts(count) {

    let _this = this;

    let drugaVrednost = parseInt(_this._lastPostIndexZavod) + count;
    console.log("Druga vrednsot je: " + drugaVrednost);


    this._postsManger.getNextPostsZavod(this._lastPostIndexZavod, drugaVrednost,
      this._listaZavoda[this._prikazaniZavod].idZavoda).subscribe(
      function (data) {
        console.log(data);
        _this._listaPostova = _this._listaPostova.concat(data);
        _this._postsManger.saveLastPostIndexZavod(_this._lastPostIndexZavod, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
        _this._postsManger.savePostsZavod(data, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
      },
      function (err) {
        console.log("Error in getting posts for zavod");
        console.log(err);
      }
    );
  }

  prikaziOZavodu(trazeniZavod) {

    let stariPrikazaniZavod = this._prikazaniZavod;

    this._prikazaniZavod = this._listaZavoda.indexOf(trazeniZavod);

    this._postsManger.savePrikazaniZavod(this._prikazaniZavod);

    if (stariPrikazaniZavod != this._prikazaniZavod) {
      this._listaPostova = [];

      this._lastPostIndexZavod = this._postsManger.getLastPostIndexZavod(this._listaZavoda[this._prikazaniZavod].idZavoda);

      this.loadNovostiForZavod();
    }

  }

}




