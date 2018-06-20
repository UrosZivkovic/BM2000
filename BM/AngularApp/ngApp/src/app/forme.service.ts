import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerConfigurationService} from './server-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FormeService {

  constructor(private http: HttpClient, private _serverConfig: ServerConfigurationService) {
  }


  public sendUserForm(user) {
    return this.http.post<any>(this._serverConfig.getUserSendForm(), user);
  }

  public sendNovostiForm(user) {
    return this.http.post<any>(this._serverConfig.getNovostSendForm(), user);
  }

  public sendObavestenjeForm(obavestenje) {
    console.log("dodaje obavestenje")
    return this.http.post<any>(this._serverConfig.getAddObavestenjeUrl(), obavestenje);
  }

  public addObavestenjeToNovost(podaci) {
    return this.http.post<any>(this._serverConfig.getAddObavestenjaToNovost(), podaci);
  }

  public sendZabeleziDavanje(davanje) {
    console.log('zabelezi');
    return this.http.post<any>(this._serverConfig.getZabeleziDavanjeUrl(), davanje);
  }

  public sendObrisiUsera(user) {
    return this.http.post<any>(this._serverConfig.getObrisiUserForm(), user);
  }
  public sendPosaljiPoruku(poruka) {
    return this.http.post<any>(this._serverConfig.getPosaljiPoruku(), poruka);
  }
}
