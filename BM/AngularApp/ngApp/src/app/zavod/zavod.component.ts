import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-zavod',
  templateUrl: './zavod.component.html',
  styleUrls: ['./zavod.component.css']
})
export class ZavodComponent implements OnInit {

  private _listaZavoda = [
    {
      id: "1",
      naziv: "Zavod Nis",
      drzava: "Srbija",
      grad: "Nis",
      adresa: "Mike Vasica 12/4"
    },
    {
      id: "2",
      naziv: "Zavod Beograd",
      drzava: "Srbija",
      grad: "Beograd",
      adresa: "Save Milutinovica 33"
    },
    {
      id: "3",
      naziv: "Zavod Smederevo",
      drzava: "Srbija",
      grad: "Smederevo",
      adresa: "Igora Antolovica 7"
    }
  ];

  private _listaPostova = [
    {
      id: "1",
      naslov: "Naslov 1",
      sadrzaj: "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. " +
      "Everything so dispatched as it increasing pianoforte. Hearing now saw perhaps minutes herself his. " +
      "Of instantly excellent therefore difficult he northward. Joy green but least marry rapid quiet but. " +
      "Way devonshire introduced expression saw travelling affronting. Her and effects affixed pretend account " +
      "ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening. "
    },
    {
      id: "2",
      naslov: "Naslov 2",
      sadrzaj: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight" +
      " age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter " +
      "highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but " +
      "end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. " +
      "On three thing chief years in money arise of."
    },
    {
      id: "3",
      naslov: "Naslov 3",
      sadrzaj: "Now led tedious shy lasting females off. Dashwood marianne in of entrance be on wondered possible " +
      "building. Wondered sociable he carriage in speedily margaret. Up devonshire of he thoroughly insensible alteration." +
      " An mr settling occasion insisted distance ladyship so. Not attention say frankness intention out dashwoods now " +
      "curiosity. Stronger ecstatic as no judgment daughter speedily thoughts. Worse downs nor might she court did nay forth these. "
    },
    {
      id: "4",
      naslov: "Naslov 4",
      sadrzaj: "Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. " +
      "Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face " +
      "shed. ﻿no great but music too old found arose. "
    },
    {
      id: "5",
      naslov: "Naslov 5",
      sadrzaj: "Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. "
    }
  ];

  private _prikazaniZavod = 2;

  private _activeTab;

  private _lastPostIndexZavod;

  constructor(private _postsManager: PostsManagerService) {
    this._lastPostIndexZavod = this._postsManager.getLastPostIndexZavod("lastPostIndexZavod" + this._listaZavoda[this._prikazaniZavod].id);
    console.log("_lastPostIndex set to : " + this._lastPostIndexZavod);
  }

  ngOnInit() {

    let _this = this;

    let savedPosts = localStorage.getItem("currentPostsZavod" + this._listaZavoda[this._prikazaniZavod].id);
    console.log("INITIAL STORAGE STATE: \n" + savedPosts);
    if (savedPosts != null) {

      console.log("Loading posts from storage");

      this._listaPostova = JSON.parse(savedPosts);

    } else {

      console.log("Sending request for posts");

      this.getNextNovosti(2);

    }

  }

  private getNextNovosti(count) {
    //firstIndex lastIndex idZavoda
    let _this = this;

    this._postsManager.getNextPostsZavod(this._lastPostIndexZavod, this._lastPostIndexZavod + count).subscribe(
      function (data) {
        _this._listaPostova.concat(data);
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




