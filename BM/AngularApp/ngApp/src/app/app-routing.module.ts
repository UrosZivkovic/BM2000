import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {VestComponent} from './vest/vest.component';
import {KorisnikComponent} from './korisnik/korisnik.component';
import {HomeComponent} from './home/home.component';
import {Korisnik2Component} from './korisnik2/korisnik2.component';
import {UserFormComponent} from './user-form/user-form.component';
import {NovostFormComponent} from './novost-form/novost-form.component';
import {ObavestenjeFormaComponent} from './obavestenje-forma/obavestenje-forma.component';
// import {VestComponent} from "./vest/vest.component";
// import {KorisnikComponent} from "./korisnik/korisnik.component";
// import {HomeComponent} from "./home/home.component";
// import {Korisnik2Component} from "./korisnik2/korisnik2.component";
import {NovostComponent} from './novost/novost.component';
import {ListaNovostiComponent} from './lista-novosti/lista-novosti.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'izborZavoda',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'informacije',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ListaNovostiComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
