import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {store} from "@angular/core/src/render3/instructions";
import {AuthService} from "../auth.service";

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

  constructor(private _authService:AuthService,private _postsManager: PostsManagerService) {

  }

  loadZavodi() {

    let storedZavodi = localStorage.getItem("storedZavodi");
    let _this = this;

    if (storedZavodi != null) {
      console.log("reading zavodi from storage");

      this._listaZavoda = JSON.parse(storedZavodi);

      let lastPrikazaniZavod = _this._postsManager.getLastPrikazaniZavod();
      if (lastPrikazaniZavod > -1) {
        console.log("Last prikazani zavode je : " + lastPrikazaniZavod);
        _this._prikazaniZavod = lastPrikazaniZavod;
        _this.loadNovostiForZavod();
      }

    } else {
      console.log("loading zavodi from server");

      this._postsManager.getZavodi().subscribe(
        function (data) {
          _this._listaZavoda = data;
          _this.storeZavodi();
        },
        function (err) {
          console.log("Greska pri pribavljanju zavoda sa servera");
          console.log(err);
        },
        function () {
          console.log("zavrsen load");
          let lastPrikazaniZavod = _this._postsManager.getLastPrikazaniZavod();
          if (lastPrikazaniZavod > -1) {
            _this._prikazaniZavod = lastPrikazaniZavod;
            _this.loadNovostiForZavod();
          }
        }
      );
    }

  }

  storeZavodi() {
    this._postsManager.storeZavodi(this._listaZavoda);
  }

  ngOnInit() {
    this.loadZavodi();
  }

  saveClickHistory(event) {

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
      console.log("loading novosti from server");
      this.getNextPosts(3);
    }

  }

  getNextPosts(count) {

    let _this = this;

    let drugaVrednost = parseInt(_this._lastPostIndexZavod) + count;
    console.log("Druga vrednsot je: " + drugaVrednost);

    this._postsManager.getNextPostsZavod(this._lastPostIndexZavod, drugaVrednost,
      this._listaZavoda[this._prikazaniZavod].idZavoda).subscribe(
      function (data: any[]) {

        for (let _i = 0; _i < data.length; _i++) {
          if (data[_i].naslov == "Index ot ouf range")
            data.splice(_i, 1);
          else
            _this._lastPostIndexZavod+=1;
        }

        // _this._lastPostIndexZavod += count;
        _this._listaPostova = _this._listaPostova.concat(data);
        _this._postsManager.saveLastPostIndexZavod(_this._lastPostIndexZavod, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
        _this._postsManager.savePostsZavod(data, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
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

    this._postsManager.savePrikazaniZavod(this._prikazaniZavod);

    if (stariPrikazaniZavod != this._prikazaniZavod) {
      this._listaPostova = [];

      this._lastPostIndexZavod = this._postsManager.getLastPostIndexZavod(this._listaZavoda[this._prikazaniZavod].idZavoda);

      this.loadNovostiForZavod();
    }

  }

}




