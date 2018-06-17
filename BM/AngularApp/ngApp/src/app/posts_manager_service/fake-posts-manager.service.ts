import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakePostsManagerService {

  private _postsList = [
    {
      idZavoda: "2",
      naslov: "Prvi post",
      sadrzaj: "E jbg sad, ovo je neki sadrzj",
      datum: "ima",
      ukratko: "bas kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    },
    {
      idZavoda: "1",
      naslov: "neki drugi post",
      sadrzaj: "ovo je neki lep sadrzj",
      datum: "nema",
      ukratko: "bas dosta kratko"
    }

  ];

  constructor() {
  }

  public getAllPosts() {
    return this._postsList;
  }

  public getNextPart(_lastPostIndex: number) {
    return this._postsList.slice(_lastPostIndex,_lastPostIndex+2);// bice 10, al i 1 je dosta
  }

}
