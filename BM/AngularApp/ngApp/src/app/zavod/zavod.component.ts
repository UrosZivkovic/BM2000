import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-zavod',
  templateUrl: './zavod.component.html',
  styleUrls: ['./zavod.component.css']
})
export class ZavodComponent implements OnInit {

  private _listaZavoda = [];

  private _listaPostova = [];
  private _prikazaniZavod = -1;

  private _activeTab;

  private _lastPostIndexZavod;

  constructor(private _postsManager: PostsManagerService) {
    this._lastPostIndexZavod = this._postsManager.getLastPostIndexZavod("lastPostIndexZavod" + this._listaZavoda[this._prikazaniZavod].id);
    console.log("_lastPostIndex set to : " + this._lastPostIndexZavod);
  }

  ngOnInit() {

    let _this = this;

    let savedPosts = localStorage.getItem("novostiZavod" + this._listaZavoda[this._prikazaniZavod].id);
    console.log("INITIAL STORAGE STATE: \n" + savedPosts);
    if (savedPosts != null) {

      console.log("Loading posts from storage");

      this._listaPostova = JSON.parse(savedPosts);

    } else {

      console.log("Sending request for posts");

      this.getNextNovosti(2);

    }

    let savedZavodi = localStorage.getItem("zavodiStorage");
    console.log("INITIAL STORAGE STATE: \n" + savedZavodi);
    if (savedZavodi != null) {

      console.log("Loading posts from storage");

      this._listaPostova = JSON.parse(savedZavodi);

    } else {

      console.log("Sending request for posts");

      this.getZavodi();

    }


  }

  private getZavodi() {

    let _this = this;

    this._postsManager.getZavodi().subscribe(
      function (data) {
        console.log("received zavodi");
        console.log(data);

        // uvek pribavlja sve, tako da ili je vec pribavio ili sad tek treba sve da pribavi
        _this._listaZavoda = data;

        _this._postsManager.saveZavodi(data);

      },
      function (err) {
        console.log(err)
      }
    );
  }

  private getNextNovosti(count) {
    //firstIndex lastIndex idZavoda
    let _this = this;

    this._postsManager.getNextPostsZavod(this._lastPostIndexZavod, this._lastPostIndexZavod + count).subscribe(
      function (data) {
        console.log("received data");
        console.log(data);
        _this._listaPostova = _this._listaPostova.concat(data);
        console.log("after merging");
        console.log(_this._listaPostova);
        _this._lastPostIndexZavod += count;

        _this._postsManager.saveLastPostIndexZavod(_this._lastPostIndexZavod, _this._listaZavoda[_this._prikazaniZavod].id);
        _this._postsManager.savePostsZavod(data, _this._listaZavoda[_this._prikazaniZavod].id);

      },
      function (err) {
        console.log(err);
      }
    )
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

  private prikaziOZavodu(trazeniZavod) {

    this._prikazaniZavod = this._listaZavoda.indexOf(trazeniZavod);

  }
}




