import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly ROOT_URL = "http://localhost:3030";

  title = "app";
  constructor(private http: HttpClient, private _authService: AuthService) {}
}
