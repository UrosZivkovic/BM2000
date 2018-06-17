<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ServerConfigurationService} from './server-configuration.service';
=======
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ServerConfigurationService } from './server-configuration.service';
>>>>>>> duci_master

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
<<<<<<< HEAD
export class AppComponent implements  OnInit{
=======
export class AppComponent implements OnInit {
>>>>>>> duci_master
  private ROOT_URL = '';

  title = 'app';

  constructor(
    private http: HttpClient,
    private _authService: AuthService,
    private _serverConfig: ServerConfigurationService
  ) {
    this.ROOT_URL = this._serverConfig.getFullServerAddress();
  }

  ngOnInit(): void {
    document.addEventListener(
      'backbutton',
      function() {
        alert('el si morao ');
      },
      false
    );
  }
<<<<<<< HEAD


=======
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:3030';

  title = 'app';
  constructor(private http: HttpClient, private _authService: AuthService) {}
>>>>>>> duci
=======
>>>>>>> duci_master
}
