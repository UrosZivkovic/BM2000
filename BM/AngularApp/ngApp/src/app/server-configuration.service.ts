import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigurationService {

  private ipAddress = "192.168.0.172";
  // 192.168.0.172
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

  public getLoginUrl() {
    return this.getFullServerAddress() + "/users/login";
  }

  public getRegisterUrl() {
    return this.getFullServerAddress() + "/users/register";
  }

  public getEventsNormalUrl() {
    return this.getFullServerAddress() + "/products/normal";
  }

  public getEventsSpecialUrl() {
    return this.getFullServerAddress() + "/products/special";
  }



}
