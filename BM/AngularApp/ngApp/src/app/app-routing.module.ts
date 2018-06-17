import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpecialEComponent} from './special-e/special-e.component';
import {NormalEComponent} from './normal-e/normal-e.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
import {VestComponent} from "./vest/vest.component";
import {KorisnikComponent} from "./korisnik/korisnik.component";

const routes: Routes = [
  {

    path: '',
    redirectTo: '/normal',
    pathMatch: 'full'
  },
  {
    path: 'normal',
    component: NormalEComponent
  },
  {
    path: 'special',
    component: SpecialEComponent,
    canActivate: [AuthGuard]
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
    path:'show_posts',
    component:VestComponent
  },
  {
    path:'profil',
    component:KorisnikComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
