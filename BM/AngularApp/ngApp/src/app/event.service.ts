import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsNormalUrl = 'http://localhost:3030/products/normal';
  private _eventsSpecialUrl = 'http://localhost:3030/products/special';
  constructor(private http: HttpClient) { }
  getNormalEvents() {
    return this.http.get<any>(this._eventsNormalUrl );
  }

  getSpecialEvents() {
    return this.http.get<any>(this._eventsSpecialUrl);
  }
}
