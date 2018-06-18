import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ServerConfigurationService} from './server-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = '';
  private _loginUrl = '';

  constructor(private http: HttpClient, private _router: Router, private _serverConfig: ServerConfigurationService) {
    this._registerUrl = this._serverConfig.getRegisterUrl();
    this._loginUrl = this._serverConfig.getLoginUrl();
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); // dva puta negira
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem("loggedUserData");
    localStorage.removeItem("userType");
    this._router.navigate(['/normal']);
  }

  getUserType() {
    return localStorage.getItem("userType");
  }

}
