import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {NormalEComponent} from './normal-e/normal-e.component';
import {AuthService} from './auth.service';
import {EventService} from './event.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import {VestComponent} from './vest/vest.component';
import {KorisnikComponent} from './korisnik/korisnik.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ZavodComponent} from './zavod/zavod.component';
import {HomeComponent} from './home/home.component';
// import {Korisnik2Component} from './korisnik2/korisnik2.component';
// import { SadrzajKorisnikaComponent } from './sadrzaj-korisnika/sadrzaj-korisnika.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NovostFormComponent } from './novost-form/novost-form.component';
import { ObavestenjeFormaComponent } from './obavestenje-forma/obavestenje-forma.component';
import {NovostComponent} from './novost/novost.component';
import {ListaNovostiComponent} from './lista-novosti/lista-novosti.component';
import {Korisnik2Component} from './korisnik2/korisnik2.component';
import { SadrzajKorisnikaComponent } from './sadrzaj-korisnika/sadrzaj-korisnika.component';
import { ZavodInformacijeComponent } from './zavod-informacije/zavod-informacije.component';
import { PretragaZavodComponent } from './pretraga-zavod/pretraga-zavod.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NormalEComponent,
    VestComponent,
    KorisnikComponent,
    NavbarComponent,
    HomeComponent,
    Korisnik2Component,
    ZavodComponent,
    HomeComponent,
    VestComponent,
    SadrzajKorisnikaComponent,
    UserFormComponent,
    NovostFormComponent,
    ObavestenjeFormaComponent,
    NovostComponent,
    ZavodInformacijeComponent,
    ListaNovostiComponent,
    ZavodInformacijeComponent,
    PretragaZavodComponent
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
