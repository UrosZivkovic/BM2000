import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigurationService {

  private ipAddress = "127.0.0.1";
  private portNum = "3030";

  constructor() {
  }

  public getFullServerAddress() {
    return "http://" + this.ipAddress + ":" + this.portNum;
  }

  public getIpAddress() {
    return this.ipAddress;
  }

  public getPortNum() {
    return this.portNum;
  }

}
