import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConfigurationService} from './server-configuration.service';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private _eventsNormalUrl = '';
  private _eventsSpecialUrl = '';

  constructor(private http: HttpClient, private _serverConfig: ServerConfigurationService) {
    this._eventsNormalUrl = this._serverConfig.getEventsNormalUrl();
    this._eventsSpecialUrl = this._serverConfig.getEventsSpecialUrl();
  }

  getNormalEvents() {
    return this.http.get<any>(this._eventsNormalUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._eventsSpecialUrl);
  }
}
