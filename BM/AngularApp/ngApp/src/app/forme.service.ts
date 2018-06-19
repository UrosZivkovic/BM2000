import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConfigurationService} from './server-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FormeService {

  constructor(private http: HttpClient, private _serverConfig: ServerConfigurationService) { }


  public sendUserForm(user) {
    return this.http.post<any>(this._serverConfig.getUserSendForm(), user);
  }
  public sendNovostiForm(user) {
    return this.http.post<any>(this._serverConfig.getNovostSendForm(), user);
  }
  public sendObavestenjeForm(user) {
    console.log('doso do httpa----------------------------------------------');
    console.log(this._serverConfig.getObavestenjeSendForm());
    return this.http.post<any>(this._serverConfig.getObavestenjeSendForm(), user);
  }

}
