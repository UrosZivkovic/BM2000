import {Component, OnInit} from '@angular/core';
import {PostsManagerService} from "../posts_manager_service/posts-manager.service";

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css']
})
export class VestComponent implements OnInit {

  private _vesti = [
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

  private _lastPostIndex;

  constructor(private _postsManager: PostsManagerService) {

    console.log("Component consturctor....");
    this._lastPostIndex = this._postsManager.getLastPostIndex();
    console.log("_lastPostIndex set to : " + this._lastPostIndex);

  }

  ngOnInit() {

    console.log("Uso u vest");

    // let _this = this;
    //
    // let savedPosts = localStorage.getItem("currentPosts");
    // console.log("INITIAL STORAGE STATE: \n" + savedPosts);
    // if (savedPosts != null) {
    //
    //   console.log("Loading posts from storage");
    //
    //   this._vesti = JSON.parse(savedPosts);
    //
    // } else {
    //
    //   console.log("Sending request for posts");
    //
    //   this.getNextPosts(2);
    //
    // }
  }

  public dodajPostClick() {
    this.getNextPosts(2)
  }

  public getNextPosts(count: number) {

    let _this = this;

    // get posts
    this._postsManager.getNextPart(this._lastPostIndex, parseInt(this._lastPostIndex) + count).subscribe(
      function (res) {
        console.log("Receiving from: " + _this._lastPostIndex + " to: " + (parseInt(_this._lastPostIndex) + count));

        _this._vesti = _this._vesti.concat(res);
        _this._lastPostIndex += count;

        console.log("Received: " + String(res));

        _this._postsManager.saveLastPostIndex(_this._lastPostIndex);
        _this._postsManager.savePostsToLocalStorage(res);

      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log("...FETCH COMPLETED...");
      }
    );
  }


}
