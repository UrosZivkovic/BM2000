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
import { Home2Component } from './home2/home2.component';
import { PrivilegovanaStranaComponent } from './privilegovana-strana/privilegovana-strana.component';
import { BlezenjeDavanjaFormComponent } from './blezenje-davanja-form/blezenje-davanja-form.component';
import { InformacijeDavanjeComponent } from './informacije-davanje/informacije-davanje.component';
import { ONamaFormComponent } from './o-nama-form/o-nama-form.component';
import { ZnacajDavanjaKrviFormComponent } from './znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component';
import { ProcesDavanjaKrviFormComponent } from './proces-davanja-krvi-form/proces-davanja-krvi-form.component';
import { BezbednostDavanjaKrviFormComponent } from './bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component';
import { ObrisiUserFormComponent } from './obrisi-user-form/obrisi-user-form.component';
import { BrisanjeNalogaComponent } from './brisanje-naloga/brisanje-naloga.component';
import { TextInputComponent } from './text-input/text-input.component';


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
    PretragaZavodComponent,
    Home2Component,
    PrivilegovanaStranaComponent,
    BlezenjeDavanjaFormComponent,
    InformacijeDavanjeComponent,
    ONamaFormComponent,
    ZnacajDavanjaKrviFormComponent,
    ProcesDavanjaKrviFormComponent,
    BezbednostDavanjaKrviFormComponent,
    ObrisiUserFormComponent,
    BrisanjeNalogaComponent,
    TextInputComponent
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
