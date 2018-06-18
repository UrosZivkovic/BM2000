import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData = {};

  constructor(private _auth: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {

        localStorage.setItem('token', res.token);
        localStorage.setItem("loggedUserData", JSON.stringify(res.userData));
        localStorage.setItem("userType", res.userData.tipKorisnika);

        let redirectingPath = localStorage.getItem("redirectingPath");
        if (redirectingPath == null)
          redirectingPath = '/';
        console.log("path took from storage: "+redirectingPath);
        // clear storage for next routing
        localStorage.removeItem("redirectingPath");

        this._router.navigate([redirectingPath]);
      },
      err => console.log(err)
    );
  }

}
