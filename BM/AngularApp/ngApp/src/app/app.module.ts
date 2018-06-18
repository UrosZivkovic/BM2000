import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {NormalEComponent} from './normal-e/normal-e.component';
import {SpecialEComponent} from './special-e/special-e.component';
import {AuthService} from './auth.service';
import {EventService} from './event.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import {VestComponent} from './vest/vest.component';
import {KorisnikComponent} from './korisnik/korisnik.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ZavodComponent} from './zavod/zavod.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NormalEComponent,
    VestComponent,
    SpecialEComponent,
    KorisnikComponent,
    NavbarComponent,
    ZavodComponent,
    HomeComponent,
    VestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
