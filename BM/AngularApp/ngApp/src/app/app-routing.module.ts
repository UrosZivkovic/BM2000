import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {VestComponent} from './vest/vest.component';
import {HomeComponent} from './home/home.component';
import {Korisnik2Component} from './korisnik2/korisnik2.component';
import {UserFormComponent} from './user-form/user-form.component';
import {NovostFormComponent} from './novost-form/novost-form.component';
import {ObavestenjeFormaComponent} from './obavestenje-forma/obavestenje-forma.component';
import {ZavodInformacijeComponent} from "./zavod-informacije/zavod-informacije.component";
import {PretragaZavodComponent} from "./pretraga-zavod/pretraga-zavod.component";
import {PrivilegovanaStranaComponent} from "./privilegovana-strana/privilegovana-strana.component";
import {ZavodComponent} from "./zavod/zavod.component";
import { InformacijeDavanjeComponent } from './informacije-davanje/informacije-davanje.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'zavod',
    component: ZavodComponent
  },
  {
    path: 'informacije',
    component: InformacijeDavanjeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'show_posts',
    component: VestComponent
  },
  {
    path: 'profil',
    component: Korisnik2Component
  },
  {
    path: 'userForm',
    component: UserFormComponent
  },
  {
    path: 'novostForm',
    component: NovostFormComponent
  },
  {
    path: 'obavestenjeForm',
    component: ObavestenjeFormaComponent
  },
  {
    path: 'privilegovani',
    component: PrivilegovanaStranaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
