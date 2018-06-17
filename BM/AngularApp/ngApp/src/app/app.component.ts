import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ServerConfigurationService} from './server-configuration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  private ROOT_URL = '';

  title = 'app';

  constructor(private http: HttpClient, private _authService: AuthService, private _serverConfig: ServerConfigurationService) {
    this.ROOT_URL = this._serverConfig.getFullServerAddress();
  }

  ngOnInit(): void {
    document.addEventListener("backbutton",function(){
      alert("el si morao ");
    },false);
  }


}
