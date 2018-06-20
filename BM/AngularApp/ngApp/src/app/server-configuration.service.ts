import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigurationService {

  private ipAddress = 'localhost';
  // private ipAddress = '192.168.0.100';
  // 192.168.0.172
  private portNum = '3030';

  constructor() {
  }

  public getFullServerAddress() {
    return 'http://' + this.ipAddress + ':' + this.portNum;
  }

  public getIpAddress() {
    return this.ipAddress;
  }

  public getPortNum() {
    return this.portNum;
  }

  public getLoginUrl() {
    return this.getFullServerAddress() + '/users/login';
  }

  public getRegisterUrl() {
    return this.getFullServerAddress() + '/users/register';
  }

  public getEventsNormalUrl() {
    return this.getFullServerAddress() + '/products/normal';
  }

  public getEventsSpecialUrl() {
    return this.getFullServerAddress() + '/products/special';
  }

  public getAllPostsUrl() {
    return this.getFullServerAddress() + '/novosti/all';
  }

  public getNextPartOfPostsUrl() {
    return this.getFullServerAddress() + '/novosti/interval';
  }


  public getUserContent_ObavestenjaUrl() {
    return this.getFullServerAddress() + '/users/getObavestenja';
  }

  public getUserContent_NovostiUrl() {
    return this.getFullServerAddress() + '/users/getNovosti';
  }

  public getUserSendForm() {
    return this.getFullServerAddress() + '/users/kreiraj';
  }

  public getNovostSendForm() {
    return this.getFullServerAddress() + '/novosti/add';
  }
  public getObavestenjeSendForm() {
    return this.getFullServerAddress() + '/obavestenja/add';
  }

  public getZabeleziDavanjeUrl() {
    return this.getFullServerAddress() + '/users/davanjeKrvi';
  }
  public getZavodNovostiInterval() {
    return this.getFullServerAddress() + '/novosti/zavodNovostiInterval';
  }

  public getObrisiUserForm() {
    return this.getFullServerAddress() + '/users/removeUser';
  }

  public getDefaultNovosti() {
    // firstIndex lastIndex
    return this.getFullServerAddress() + '/novosti/interval';
  }

  public getZavodiUrl() {
    return this.getFullServerAddress() + '/zavodi/all';
  }

}
