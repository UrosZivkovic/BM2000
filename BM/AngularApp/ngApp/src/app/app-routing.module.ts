import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {VestComponent} from "./vest/vest.component";
import {KorisnikComponent} from "./korisnik/korisnik.component";
import {HomeComponent} from "./home/home.component";

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
    path: '/informacije',
    redirectTo:'/home',
    pathMatch:'full'
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
    component: KorisnikComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
