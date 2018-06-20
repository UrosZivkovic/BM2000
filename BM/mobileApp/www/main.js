(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _vest_vest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vest/vest.component */ "./src/app/vest/vest.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./korisnik2/korisnik2.component */ "./src/app/korisnik2/korisnik2.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _novost_form_novost_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./novost-form/novost-form.component */ "./src/app/novost-form/novost-form.component.ts");
/* harmony import */ var _obavestenje_forma_obavestenje_forma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./obavestenje-forma/obavestenje-forma.component */ "./src/app/obavestenje-forma/obavestenje-forma.component.ts");
/* harmony import */ var _privilegovana_strana_privilegovana_strana_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privilegovana-strana/privilegovana-strana.component */ "./src/app/privilegovana-strana/privilegovana-strana.component.ts");
/* harmony import */ var _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zavod/zavod.component */ "./src/app/zavod/zavod.component.ts");
/* harmony import */ var _informacije_davanje_informacije_davanje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./informacije-davanje/informacije-davanje.component */ "./src/app/informacije-davanje/informacije-davanje.component.ts");
/* harmony import */ var _obrisi_user_form_obrisi_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./obrisi-user-form/obrisi-user-form.component */ "./src/app/obrisi-user-form/obrisi-user-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'zavod',
        component: _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_11__["ZavodComponent"]
    },
    {
        path: 'informacije',
        component: _informacije_davanje_informacije_davanje_component__WEBPACK_IMPORTED_MODULE_12__["InformacijeDavanjeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'show_posts',
        component: _vest_vest_component__WEBPACK_IMPORTED_MODULE_4__["VestComponent"]
    },
    {
        path: 'profil',
        component: _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_6__["Korisnik2Component"]
    },
    {
        path: 'userForm',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]
    },
    {
        path: 'novostForm',
        component: _novost_form_novost_form_component__WEBPACK_IMPORTED_MODULE_8__["NovostFormComponent"]
    },
    {
        path: 'obavestenjeForm',
        component: _obavestenje_forma_obavestenje_forma_component__WEBPACK_IMPORTED_MODULE_9__["ObavestenjeFormaComponent"]
    },
    {
        path: 'obrisiUser',
        component: _obrisi_user_form_obrisi_user_form_component__WEBPACK_IMPORTED_MODULE_13__["ObrisiUserFormComponent"]
    },
    {
        path: 'privilegovani',
        component: _privilegovana_strana_privilegovana_strana_component__WEBPACK_IMPORTED_MODULE_10__["PrivilegovanaStranaComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 50px; width: 100vw;\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\" style=\"margin-left: 1px;\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n          aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/\">BloodMaster2000</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\">\n            <a routerLink=\"/home\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"active\">\n            <a routerLink=\"/informacije\">Informacije\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"active\">\n            <a routerLink=\"/zavod\">Zavod\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/profil\" routerLinkActive=\"active\">Moj nalog</a>\n          </li>\n\n          <li>\n            <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">\n              <span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n          </li>\n          <li>\n            <a style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\">\n              <span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n<div style=\"padding-top: 50px; padding-left: 10px;\">\n  <!-- <router-outlet></router-outlet> -->\n  <app-zavod></app-zavod>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _server_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-configuration.service */ "./src/app/server-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, _authService, _serverConfig) {
        this.http = http;
        this._authService = _authService;
        this._serverConfig = _serverConfig;
        this.ROOT_URL = '';
        this.title = 'app';
        this.ROOT_URL = this._serverConfig.getFullServerAddress();
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('backbutton', function () {
            alert('el si morao ');
        }, false);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _server_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ServerConfigurationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _normal_e_normal_e_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normal-e/normal-e.component */ "./src/app/normal-e/normal-e.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _vest_vest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vest/vest.component */ "./src/app/vest/vest.component.ts");
/* harmony import */ var _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./korisnik/korisnik.component */ "./src/app/korisnik/korisnik.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zavod/zavod.component */ "./src/app/zavod/zavod.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _novost_form_novost_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./novost-form/novost-form.component */ "./src/app/novost-form/novost-form.component.ts");
/* harmony import */ var _obavestenje_forma_obavestenje_forma_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./obavestenje-forma/obavestenje-forma.component */ "./src/app/obavestenje-forma/obavestenje-forma.component.ts");
/* harmony import */ var _novost_novost_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./novost/novost.component */ "./src/app/novost/novost.component.ts");
/* harmony import */ var _lista_novosti_lista_novosti_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lista-novosti/lista-novosti.component */ "./src/app/lista-novosti/lista-novosti.component.ts");
/* harmony import */ var _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./korisnik2/korisnik2.component */ "./src/app/korisnik2/korisnik2.component.ts");
/* harmony import */ var _sadrzaj_korisnika_sadrzaj_korisnika_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sadrzaj-korisnika/sadrzaj-korisnika.component */ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.ts");
/* harmony import */ var _zavod_informacije_zavod_informacije_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./zavod-informacije/zavod-informacije.component */ "./src/app/zavod-informacije/zavod-informacije.component.ts");
/* harmony import */ var _pretraga_zavod_pretraga_zavod_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pretraga-zavod/pretraga-zavod.component */ "./src/app/pretraga-zavod/pretraga-zavod.component.ts");
/* harmony import */ var _home2_home2_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home2/home2.component */ "./src/app/home2/home2.component.ts");
/* harmony import */ var _privilegovana_strana_privilegovana_strana_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./privilegovana-strana/privilegovana-strana.component */ "./src/app/privilegovana-strana/privilegovana-strana.component.ts");
/* harmony import */ var _blezenje_davanja_form_blezenje_davanja_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blezenje-davanja-form/blezenje-davanja-form.component */ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.ts");
/* harmony import */ var _informacije_davanje_informacije_davanje_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./informacije-davanje/informacije-davanje.component */ "./src/app/informacije-davanje/informacije-davanje.component.ts");
/* harmony import */ var _o_nama_form_o_nama_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./o-nama-form/o-nama-form.component */ "./src/app/o-nama-form/o-nama-form.component.ts");
/* harmony import */ var _znacaj_davanja_krvi_form_znacaj_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component */ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.ts");
/* harmony import */ var _proces_davanja_krvi_form_proces_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./proces-davanja-krvi-form/proces-davanja-krvi-form.component */ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.ts");
/* harmony import */ var _bezbednost_davanja_krvi_form_bezbednost_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component */ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.ts");
/* harmony import */ var _obrisi_user_form_obrisi_user_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./obrisi-user-form/obrisi-user-form.component */ "./src/app/obrisi-user-form/obrisi-user-form.component.ts");
/* harmony import */ var _poruka_poruka_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./poruka/poruka.component */ "./src/app/poruka/poruka.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import {Korisnik2Component} from './korisnik2/korisnik2.component';
// import { SadrzajKorisnikaComponent } from './sadrzaj-korisnika/sadrzaj-korisnika.component';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _normal_e_normal_e_component__WEBPACK_IMPORTED_MODULE_8__["NormalEComponent"],
                _vest_vest_component__WEBPACK_IMPORTED_MODULE_13__["VestComponent"],
                _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_14__["KorisnikComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_23__["Korisnik2Component"],
                _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_16__["ZavodComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _vest_vest_component__WEBPACK_IMPORTED_MODULE_13__["VestComponent"],
                _sadrzaj_korisnika_sadrzaj_korisnika_component__WEBPACK_IMPORTED_MODULE_24__["SadrzajKorisnikaComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"],
                _novost_form_novost_form_component__WEBPACK_IMPORTED_MODULE_19__["NovostFormComponent"],
                _obavestenje_forma_obavestenje_forma_component__WEBPACK_IMPORTED_MODULE_20__["ObavestenjeFormaComponent"],
                _novost_novost_component__WEBPACK_IMPORTED_MODULE_21__["NovostComponent"],
                _zavod_informacije_zavod_informacije_component__WEBPACK_IMPORTED_MODULE_25__["ZavodInformacijeComponent"],
                _lista_novosti_lista_novosti_component__WEBPACK_IMPORTED_MODULE_22__["ListaNovostiComponent"],
                _zavod_informacije_zavod_informacije_component__WEBPACK_IMPORTED_MODULE_25__["ZavodInformacijeComponent"],
                _pretraga_zavod_pretraga_zavod_component__WEBPACK_IMPORTED_MODULE_26__["PretragaZavodComponent"],
                _home2_home2_component__WEBPACK_IMPORTED_MODULE_27__["Home2Component"],
                _privilegovana_strana_privilegovana_strana_component__WEBPACK_IMPORTED_MODULE_28__["PrivilegovanaStranaComponent"],
                _blezenje_davanja_form_blezenje_davanja_form_component__WEBPACK_IMPORTED_MODULE_29__["BlezenjeDavanjaFormComponent"],
                _informacije_davanje_informacije_davanje_component__WEBPACK_IMPORTED_MODULE_30__["InformacijeDavanjeComponent"],
                _o_nama_form_o_nama_form_component__WEBPACK_IMPORTED_MODULE_31__["ONamaFormComponent"],
                _znacaj_davanja_krvi_form_znacaj_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_32__["ZnacajDavanjaKrviFormComponent"],
                _proces_davanja_krvi_form_proces_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_33__["ProcesDavanjaKrviFormComponent"],
                _bezbednost_davanja_krvi_form_bezbednost_davanja_krvi_form_component__WEBPACK_IMPORTED_MODULE_34__["BezbednostDavanjaKrviFormComponent"],
                _obrisi_user_form_obrisi_user_form_component__WEBPACK_IMPORTED_MODULE_35__["ObrisiUserFormComponent"],
                _poruka_poruka_component__WEBPACK_IMPORTED_MODULE_36__["PorukaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs';
// ovi iznad su bili isti samo u jednom bila prazna linija ispod auth service
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-configuration.service */ "./src/app/server-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, _router, _serverConfig) {
        this.http = http;
        this._router = _router;
        this._serverConfig = _serverConfig;
        this._registerUrl = '';
        this._loginUrl = '';
        this._registerUrl = this._serverConfig.getRegisterUrl();
        this._loginUrl = this._serverConfig.getLoginUrl();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token'); // dva puta negira
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedUserData');
        localStorage.removeItem('userType');
        localStorage.removeItem("defaultNovosti");
        localStorage.removeItem("lastDefaultNovostiIndex");
        localStorage.removeItem("novostiZavod1");
        localStorage.removeItem("novostiZavod2");
        localStorage.removeItem("novostiZavod3");
        localStorage.removeItem("zavodiStorage");
        localStorage.removeItem("prikazaniZavod");
        this._router.navigate(['/home']);
    };
    AuthService.prototype.getUserType = function () {
        return localStorage.getItem('userType');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _server_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ServerConfigurationService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bezbednost-davanja-krvi-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BezbednostDavanjaKrviFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezbednostDavanjaKrviFormComponent", function() { return BezbednostDavanjaKrviFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BezbednostDavanjaKrviFormComponent = /** @class */ (function () {
    function BezbednostDavanjaKrviFormComponent() {
    }
    BezbednostDavanjaKrviFormComponent.prototype.ngOnInit = function () {
    };
    BezbednostDavanjaKrviFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bezbednost-davanja-krvi-form',
            template: __webpack_require__(/*! ./bezbednost-davanja-krvi-form.component.html */ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.html"),
            styles: [__webpack_require__(/*! ./bezbednost-davanja-krvi-form.component.css */ "./src/app/bezbednost-davanja-krvi-form/bezbednost-davanja-krvi-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BezbednostDavanjaKrviFormComponent);
    return BezbednostDavanjaKrviFormComponent;
}());



/***/ }),

/***/ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/blezenje-davanja-form/blezenje-davanja-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/blezenje-davanja-form/blezenje-davanja-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Zabelezi davanje krvi</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n\n          <div class=\"form-group\">\n            <label for=\"\">Broj davaoca</label>\n            <input [(ngModel)]=\"_brojDavaoca\" name=\"ime\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary float-right\">Zabelezi</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/blezenje-davanja-form/blezenje-davanja-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlezenjeDavanjaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlezenjeDavanjaFormComponent", function() { return BlezenjeDavanjaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forme.service */ "./src/app/forme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlezenjeDavanjaFormComponent = /** @class */ (function () {
    function BlezenjeDavanjaFormComponent(_formService) {
        this._formService = _formService;
    }
    BlezenjeDavanjaFormComponent.prototype.ngOnInit = function () {
    };
    BlezenjeDavanjaFormComponent.prototype.submitForm = function () {
        console.log({ id: this._brojDavaoca, date: Date.now() });
        this._formService.sendZabeleziDavanje({ id: this._brojDavaoca, date: Date.now() })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
        // tamo u funkciji na serveru on uzima id a ja mu to ne saljem, saljem mu neki tamo broj davaoca
    };
    BlezenjeDavanjaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blezenje-davanja-form',
            template: __webpack_require__(/*! ./blezenje-davanja-form.component.html */ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.html"),
            styles: [__webpack_require__(/*! ./blezenje-davanja-form.component.css */ "./src/app/blezenje-davanja-form/blezenje-davanja-form.component.css")]
        }),
        __metadata("design:paramtypes", [_forme_service__WEBPACK_IMPORTED_MODULE_1__["FormeService"]])
    ], BlezenjeDavanjaFormComponent);
    return BlezenjeDavanjaFormComponent;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-configuration.service */ "./src/app/server-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = /** @class */ (function () {
    function EventService(http, _serverConfig) {
        this.http = http;
        this._serverConfig = _serverConfig;
        this._eventsNormalUrl = '';
        this._eventsSpecialUrl = '';
        this._eventsNormalUrl = this._serverConfig.getEventsNormalUrl();
        this._eventsSpecialUrl = this._serverConfig.getEventsSpecialUrl();
    }
    EventService.prototype.getNormalEvents = function () {
        return this.http.get(this._eventsNormalUrl);
    };
    EventService.prototype.getSpecialEvents = function () {
        return this.http.get(this._eventsSpecialUrl);
    };
    EventService.prototype.getEventsNormalUrl = function () {
        return this._eventsNormalUrl;
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ServerConfigurationService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/forme.service.ts":
/*!**********************************!*\
  !*** ./src/app/forme.service.ts ***!
  \**********************************/
/*! exports provided: FormeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormeService", function() { return FormeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-configuration.service */ "./src/app/server-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormeService = /** @class */ (function () {
    function FormeService(http, _serverConfig) {
        this.http = http;
        this._serverConfig = _serverConfig;
    }
    FormeService.prototype.sendUserForm = function (user) {
        return this.http.post(this._serverConfig.getUserSendForm(), user);
    };
    FormeService.prototype.sendNovostiForm = function (user) {
        return this.http.post(this._serverConfig.getNovostSendForm(), user);
    };
    FormeService.prototype.sendObavestenjeForm = function (obavestenje) {
        console.log("dodaje obavestenje");
        return this.http.post(this._serverConfig.getAddObavestenjeUrl(), obavestenje);
    };
    FormeService.prototype.addObavestenjeToNovost = function (podaci) {
        return this.http.post(this._serverConfig.getAddObavestenjaToNovost(), podaci);
    };
    FormeService.prototype.sendZabeleziDavanje = function (davanje) {
        console.log('zabelezi');
        return this.http.post(this._serverConfig.getZabeleziDavanjeUrl(), davanje);
    };
    FormeService.prototype.sendObrisiUsera = function (user) {
        return this.http.post(this._serverConfig.getObrisiUserForm(), user);
    };
    FormeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ServerConfigurationService"]])
    ], FormeService);
    return FormeService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullscreen {\n    left: 0;\n    right: 0;\n    position: fixed;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"fullscreen\">\n  <app-lista-novosti [_listaNovosti]=\"_defaultPost\"></app-lista-novosti>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_postsManager) {
        this._postsManager = _postsManager;
        this._defaultPost = [];
        this._lastIndexDefaultNovosti = this._postsManager.getLastDefaultNovostiIndex();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var savedPosts = localStorage.getItem("defaultNovosti");
        console.log("INITIAL STORAGE STATE: \n" + savedPosts);
        if (savedPosts != null) {
            console.log("Loading posts from storage");
            this._defaultPost = JSON.parse(savedPosts);
        }
        else {
            console.log("Sending request for posts");
            this.getNextNovosti(3);
        }
    };
    HomeComponent.prototype.getNextNovosti = function (count) {
        var _this = this;
        this._postsManager.getDefaultNovosti(this._lastIndexDefaultNovosti, this._lastIndexDefaultNovosti + count).subscribe(function (data) {
            console.log("dobio data");
            _this._defaultPost = _this._defaultPost.concat(data);
            console.log(data);
            console.log("Nakon dodavanja: ");
            console.log(_this._defaultPost);
            _this._lastIndexDefaultNovosti += count;
            _this._postsManager.saveLastDefaultNovostiIndex(_this._lastIndexDefaultNovosti);
            _this._postsManager.saveDefaultNovosti(data);
        }, function (err) {
        });
    };
    HomeComponent.prototype.clickOnKorisnikHandler = function () {
        console.log("storing /profil as root");
        localStorage.setItem("redirectingPath", "/profil");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__["PostsManagerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home2/home2.component.css":
/*!*******************************************!*\
  !*** ./src/app/home2/home2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  row {\n    width: 100%;\n  }\n  .flex-item {\n    background: tomato;\n    padding: 5px;\n    width: 200px;\n    height: 150px;\n    margin: 10px;\n    line-height: 150px;\n    color: white;\n    font-weight: bold;\n    font-size: 3em;\n    text-align: center;\n  }"

/***/ }),

/***/ "./src/app/home2/home2.component.html":
/*!********************************************!*\
  !*** ./src/app/home2/home2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <div class=\"parent\">\n    <div id=\"wrapper\">\n      <div id=\"sidebar-wrapper\">\n        <div class=\"content\">\n\n        </div>\n        <div class=\"vesti\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home2/home2.component.ts":
/*!******************************************!*\
  !*** ./src/app/home2/home2.component.ts ***!
  \******************************************/
/*! exports provided: Home2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Component", function() { return Home2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Home2Component = /** @class */ (function () {
    function Home2Component() {
    }
    Home2Component.prototype.ngOnInit = function () {
    };
    Home2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home2',
            template: __webpack_require__(/*! ./home2.component.html */ "./src/app/home2/home2.component.html"),
            styles: [__webpack_require__(/*! ./home2.component.css */ "./src/app/home2/home2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Home2Component);
    return Home2Component;
}());



/***/ }),

/***/ "./src/app/informacije-davanje/informacije-davanje.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/informacije-davanje/informacije-davanje.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n    width:  100%;\n    height: inherit;\n}\nbutton {\n    width:  33.1%;\n    height: inherit;\n    margin: 0px;\n}\n@media (max-width: 700px) {\n    [class*=\"btn-\"] {\n        width: 90%;\n        margin-top: 2px;\n        box-sizing: border-box;\n        padding: 0;\n    }   \n    button {\n        height: 20%;\n        width: 100%;\n    }\n}\n.btn-toolbar {\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/informacije-davanje/informacije-davanje.component.html":
/*!************************************************************************!*\
  !*** ./src/app/informacije-davanje/informacije-davanje.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"\">\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#o_nama_form\" aria-expanded=\"false\" aria-controls=\"dodavanje_korisnika_form\"\n      (click)=\"saveClickHistory($event)\">\n      O nama\n    </button>\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#znacaj_davanja_krvi_form\" aria-expanded=\"false\"\n      aria-controls=\"dodavanje_novosti_form\" (click)=\"saveClickHistory($event)\">\n      Znacaj davanja krvi\n    </button>\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#proces_davanja_krvi_form\" aria-expanded=\"false\"\n      aria-controls=\"belezenje_davanja_form\" (click)=\"saveClickHistory($event)\">\n      O procesu davanja krvi\n    </button>\n  </div>\n  <div class=\"collapse\" id=\"o_nama_form\">\n    <div class=\"card card-body\">\n      <app-o-nama-form></app-o-nama-form>\n    </div>\n  </div>\n  <div class=\"collapse\" id=\"znacaj_davanja_krvi_form\">\n    <div class=\"card card-body\">\n      <app-znacaj-davanja-krvi-form></app-znacaj-davanja-krvi-form>\n    </div>\n  </div>\n  <div class=\"collapse\" id=\"proces_davanja_krvi_form\">\n    <div class=\"card card-body\">\n      <app-proces-davanja-krvi-form></app-proces-davanja-krvi-form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/informacije-davanje/informacije-davanje.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/informacije-davanje/informacije-davanje.component.ts ***!
  \**********************************************************************/
/*! exports provided: InformacijeDavanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacijeDavanjeComponent", function() { return InformacijeDavanjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InformacijeDavanjeComponent = /** @class */ (function () {
    function InformacijeDavanjeComponent() {
        this._activeTab = null;
    }
    InformacijeDavanjeComponent.prototype.ngOnInit = function () {
    };
    InformacijeDavanjeComponent.prototype.saveClickHistory = function (event) {
        if (this._activeTab === event.target) {
            this._activeTab = null;
        }
        else {
            var tmp = event.target;
            if (this._activeTab != null)
                this._activeTab.click();
            this._activeTab = tmp;
        }
    };
    InformacijeDavanjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacije-davanje',
            template: __webpack_require__(/*! ./informacije-davanje.component.html */ "./src/app/informacije-davanje/informacije-davanje.component.html"),
            styles: [__webpack_require__(/*! ./informacije-davanje.component.css */ "./src/app/informacije-davanje/informacije-davanje.component.css")]
        })
    ], InformacijeDavanjeComponent);
    return InformacijeDavanjeComponent;
}());



/***/ }),

/***/ "./src/app/korisnik/korisnik.component.css":
/*!*************************************************!*\
  !*** ./src/app/korisnik/korisnik.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The sidebar menu */\n\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    background-color: #f1f1f1;\n}\n\nli a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n}\n\n/* Change the link color on hover */\n\nli a:hover {\n    background-color: #555;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/korisnik/korisnik.component.html":
/*!**************************************************!*\
  !*** ./src/app/korisnik/korisnik.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n</div> -->\n\n<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->\n\n<div class=\"container-fluid\">\n\n  <div class=\"row row-offcanvas row-offcanvas-left\">\n\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\" style=\"margin: 0px; padding: 0px;\">\n      <div class=\"sidebar-nav\">\n        <ul class=\"nav\" style=\"background-color: lightgray; height: 100vh; width: 172.25px\">\n          <li class=\"active\"><a href=\"#\">Link</a></li>\n          <li><a href=\"#\">Link</a></li>\n          <li><a href=\"#\">Link</a></li>\n          <li class=\"nav-divider\"></li>\n          <li><a href=\"#\">Link</a></li>\n          <li><a href=\"#\">Link</a></li>\n          <li><a href=\"#\">Link</a></li>\n          <li class=\"nav-divider\"></li>\n          <li><a href=\"#\">Link</a></li>\n          <li><a href=\"#\">Link</a></li>\n        </ul>\n      </div>\n      <!--/.well -->\n    </div>\n    <!--/span-->\n\n    <div>\n      <ul>\n        <li><h2>{{user.ime}}</h2></li>\n        <li><h2>{{user.prezime}}</h2></li>\n        <li><h2>{{user.email}}</h2></li>\n        <li><h2>{{user.krvnaGrupa}}</h2></li>\n      </ul>\n    </div>\n  </div>\n  <!--/row-->\n  <hr>\n</div>\n<!--/.container-->\n"

/***/ }),

/***/ "./src/app/korisnik/korisnik.component.ts":
/*!************************************************!*\
  !*** ./src/app/korisnik/korisnik.component.ts ***!
  \************************************************/
/*! exports provided: KorisnikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorisnikComponent", function() { return KorisnikComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KorisnikComponent = /** @class */ (function () {
    function KorisnikComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.user = {};
    }
    KorisnikComponent.prototype.ngOnInit = function () {
        if (!this._authService.loggedIn()) {
            this._router.navigate(['/login']);
        }
        else {
            console.log(localStorage.getItem("loggedUserData"));
            this.user = JSON.parse(localStorage.getItem("loggedUserData"));
        }
    };
    KorisnikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-korisnik',
            template: __webpack_require__(/*! ./korisnik.component.html */ "./src/app/korisnik/korisnik.component.html"),
            styles: [__webpack_require__(/*! ./korisnik.component.css */ "./src/app/korisnik/korisnik.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KorisnikComponent);
    return KorisnikComponent;
}());



/***/ }),

/***/ "./src/app/korisnik2/korisnik2.component.css":
/*!***************************************************!*\
  !*** ./src/app/korisnik2/korisnik2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n    margin-left:0px; \n    padding: 0px;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background-color: lightgray;\n}\n.nav-item {\n    padding: 0px;\n    \n}\na {\n  cursor: default;\n}\n#wrapper {\n    padding-left: 173px;\n    transition: all 0.4s ease 0s;\n    padding-right: 0px;\n    margin-right: 0px;\n    width: inherit - 173px;\n  }\n#sidebar-wrapper {\n    margin-left: -172.5px;\n    left: 172.5px;\n    width: 172.5px;\n    background: #CCC;\n    position: fixed;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 1000;\n    transition: all 0.4s ease 0s;\n  }\n#page-content-wrapper {\n    width: 100%;\n  }\n@media (max-width:700) {\n  \n      #wrapper {\n        padding-left: 0;\n      }\n  \n      #sidebar-wrapper {\n        left: 0;\n      }\n  \n      #wrapper.active {\n        position: relative;\n        left: 250px;\n      }\n  \n      #wrapper.active #sidebar-wrapper {\n        left: 250px;\n        width: 250px;\n        transition: all 0.4s ease 0s;\n      }\n  \n  }\n.btn-group {\n    width:  100%;\n    height: inherit;\n}\nbutton {\n    width:  23%;\n    height: inherit;\n    margin: 0px;\n}\n@media (max-width: 700px) {\n    [class*=\"btn-\"] {\n        width: 90%;\n        margin-top: 2px;\n        box-sizing: border-box;\n        padding: 0;\n    }   \n    \n    .btn {\n      height: 10vh;\n    }\n    \n}\n\n\n"

/***/ }),

/***/ "./src/app/korisnik2/korisnik2.component.html":
/*!****************************************************!*\
  !*** ./src/app/korisnik2/korisnik2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"sidebar-wrapper\">\n    <div class=\"col-xl-4 col-lg-8 sidebar\" id=\"sidebar\" role=\"navigation\">\n      <ul class=\"nav nav-tabs|pills\" id=\"navId\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_user.ime}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_user.prezime}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_user.email}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_user.krvnaGrupa}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_user.bojDavaoca}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <!--<a class=\"nav-link active\">{{_user.davanja.pop().date}}</a>-->\n        </li>\n        <hr>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaPracenimNovostima\"\n             (click)=\"saveClickHistory($event)\">Novosti</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\"\n             data-target=\"#tabSaProcitanimObavestenjima\"\n             (click)=\"saveClickHistory($event)\">Procitana obavestenja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\"\n             data-target=\"#tabSaNeprocitanimObavestenjima\"\n             (click)=\"saveClickHistory($event)\">Neprocitana obavestenja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijeDavanja\"\n             (click)=\"saveClickHistory($event)\">Istorija davanja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\"\n             data-target=\"#tabIstorijePrisustvaDogadjajima\"\n             (click)=\"saveClickHistory($event)\">Moji dogadjaji</a>\n        </li>\n        <hr>\n      </ul>\n    </div>\n  </div>\n  <div id=\"page-content-wrapper\">\n    <div class=\"page-content\">\n      <div class=\"container\">\n\n        <!-- <app-privilegovana-strana></app-privilegovana-strana> -->\n\n\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"\"\n             *ngIf=\"_authService.getUserType().toLowerCase()=='zaposleni'\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"\">\n            <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#dodavanje_korisnika_form\"\n                    aria-expanded=\"false\" aria-controls=\"dodavanje_korisnika_form\" (click)=\"saveClickHistory($event)\">\n              Dodavanje korisnika\n            </button>\n            <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#dodavanje_novosti_form\"\n                    aria-expanded=\"false\" aria-controls=\"dodavanje_novosti_form\" (click)=\"saveClickHistory($event)\">\n              Dodavanje novosti\n            </button>\n            <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#belezenje_davanja_form\"\n                    aria-expanded=\"false\" aria-controls=\"belezenje_davanja_form\" (click)=\"saveClickHistory($event)\">\n              Belezenje davanja krvi\n            </button>\n            <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#brisanje_naloga_form\"\n                    aria-expanded=\"false\" aria-controls=\"brisanje_naloga_form\" (click)=\"saveClickHistory($event)\">\n              Brisanje naloga\n            </button>\n          </div>\n        </div>\n        <div class=\"collapse\" id=\"dodavanje_korisnika_form\">\n          <div class=\"card card-body\">\n            <app-user-form></app-user-form>\n          </div>\n        </div>\n        <div class=\"collapse\" id=\"dodavanje_novosti_form\">\n          <div class=\"card card-body\">\n            <app-novost-form></app-novost-form>\n          </div>\n        </div>\n        <div class=\"collapse\" id=\"belezenje_davanja_form\">\n          <div class=\"card card-body\">\n            <app-blezenje-davanja-form></app-blezenje-davanja-form>\n          </div>\n        </div>\n        <div class=\"collapse\" id=\"brisanje_naloga_form\">\n          <div class=\"card card-body\">\n            cetvrti veliki neki pasusAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n            richardson ad\n            squid. Nihil anim\n            keffiyeh\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaPracenimNovostima\">\n                  <div class=\"card card-body\">\n                    <app-lista-novosti [_listaNovosti]=\"_novosti\"></app-lista-novosti>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaProcitanimObavestenjima\">\n                  <div class=\"card card-body\">\n\n                    <app-lista-novosti [_listaNovosti]=\"_obavestenja.procitana\"></app-lista-novosti>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaNeprocitanimObavestenjima\">\n                  <div class=\"card card-body\">\n\n                    <app-lista-novosti [_listaNovosti]=\"_obavestenja.neprocitana\"></app-lista-novosti>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabIstorijeDavanja\">\n                  <div class=\"card card-body\">\n                    <h3 *ngFor=\"let _datum of _user.davanja\">\n                      {{_datum.date}}\n                    </h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabIstorijePrisustvaDogadjajima\">\n                  <div class=\"card card-body\">\n                    <app-lista-novosti [_listaNovosti]=\"_istorijaDogadjaj\"></app-lista-novosti>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/korisnik2/korisnik2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/korisnik2/korisnik2.component.ts ***!
  \**************************************************/
/*! exports provided: Korisnik2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Korisnik2Component", function() { return Korisnik2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Korisnik2Component = /** @class */ (function () {
    function Korisnik2Component(_authService, _router, _postsManager) {
        this._authService = _authService;
        this._router = _router;
        this._postsManager = _postsManager;
        this._novosti = [];
        this._obavestenja = {
            procitana: [],
            neprocitana: []
        };
        this._istorijaDogadjaja = [];
    }
    Korisnik2Component.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._authService.loggedIn()) {
            this._router.navigate(['/login']);
        }
        else {
            this._user = JSON.parse(localStorage.getItem('loggedUserData'));
            var storedNovosti = localStorage.getItem("_pracene_novosti");
            if (storedNovosti == null) {
                this._postsManager.getUserContent_Novosti(this._user._id).subscribe(function (data) {
                    console.log("getting novosti from server");
                    _this._novosti = data;
                    _this._postsManager.savePraceneNovostiToLocalStorage(_this._novosti);
                }, function (err) {
                    console.log('ERROR');
                    console.log(err);
                });
            }
            else {
                console.log("loadting novosti from storage");
                this._novosti = JSON.parse(storedNovosti);
            }
            var storedObavestenja = localStorage.getItem("_obavestenja");
            if (storedObavestenja == null) {
                this._postsManager.getUserContent_Obavestenja(this._user._id).subscribe(function (data) {
                    console.log("getting obavestenja from server");
                    _this._obavestenja = data;
                    _this._postsManager.saveObavestenjaToLocalStorage(_this._obavestenja);
                }, function (err) {
                    console.log('ERROR');
                    console.log(err);
                });
            }
            else {
                console.log("loading obavestenja from storage");
                this._obavestenja = JSON.parse(storedObavestenja);
            }
        }
    };
    Korisnik2Component.prototype.saveClickHistory = function (event) {
        // ako nije prvi klik klikni na poslednje dugme
        // tslint:disable-next-line:curly
        if (this._activeTab)
            this._activeTab.click();
        // zapamti na sta je kliknuto
        this._activeTab = event.currentTarget;
    };
    Korisnik2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-korisnik2',
            template: __webpack_require__(/*! ./korisnik2.component.html */ "./src/app/korisnik2/korisnik2.component.html"),
            styles: [__webpack_require__(/*! ./korisnik2.component.css */ "./src/app/korisnik2/korisnik2.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_3__["PostsManagerService"]])
    ], Korisnik2Component);
    return Korisnik2Component;
}());



/***/ }),

/***/ "./src/app/lista-novosti/lista-novosti.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lista-novosti/lista-novosti.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lista-novosti/lista-novosti.component.html":
/*!************************************************************!*\
  !*** ./src/app/lista-novosti/lista-novosti.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"row\">\n    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n      <div *ngFor=\"let _novost of _listaNovosti\">\n        <app-novost [_dataId]=\"_novost._id\" [_naslov]=\"_novost.naslov\" [_sadrzaj]=\"_novost.sadrzaj\"></app-novost>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lista-novosti/lista-novosti.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lista-novosti/lista-novosti.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaNovostiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaNovostiComponent", function() { return ListaNovostiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaNovostiComponent = /** @class */ (function () {
    function ListaNovostiComponent() {
        console.log("Constructor for lista novosti compoenta");
    }
    ListaNovostiComponent.prototype.ngOnInit = function () {
        console.log(this._listaNovosti);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListaNovostiComponent.prototype, "_listaNovosti", void 0);
    ListaNovostiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-novosti',
            template: __webpack_require__(/*! ./lista-novosti.component.html */ "./src/app/lista-novosti/lista-novosti.component.html"),
            styles: [__webpack_require__(/*! ./lista-novosti.component.css */ "./src/app/lista-novosti/lista-novosti.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaNovostiComponent);
    return ListaNovostiComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-froup\">\n            <label for=\"\">Email</label>\n            <input [(ngModel)]=\"loginUserData.email\" name=\"email\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label   for=\"\">Password</label>\n            <input [(ngModel)]=\"loginUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n\n          </div>\n          <button (click)=\"loginUser()\" type=\"button\" class=\"btn btn-success float-right\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.loginUserData).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem("loggedUserData", JSON.stringify(res.userData));
            localStorage.setItem("userType", res.userData.tipKorisnika);
            var redirectingPath = localStorage.getItem("redirectingPath");
            if (redirectingPath == null)
                redirectingPath = '/';
            console.log("path took from storage: " + redirectingPath);
            // clear storage for next routing
            localStorage.removeItem("redirectingPath");
            _this._router.navigate([redirectingPath]);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n              data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">BloodMaster2000</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </li>\n        <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </li>\n        <li><a style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\"\n               (click)=\"_authService.logoutUser()\">Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/normal-e/normal-e.component.css":
/*!*************************************************!*\
  !*** ./src/app/normal-e/normal-e.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/normal-e/normal-e.component.html":
/*!**************************************************!*\
  !*** ./src/app/normal-e/normal-e.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let event of events\">\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{event.name}}</h5>\n        <p class=\"card-text\">{{event.price}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Buy Tickets</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/normal-e/normal-e.component.ts":
/*!************************************************!*\
  !*** ./src/app/normal-e/normal-e.component.ts ***!
  \************************************************/
/*! exports provided: NormalEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalEComponent", function() { return NormalEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NormalEComponent = /** @class */ (function () {
    function NormalEComponent(_eventService) {
        this._eventService = _eventService;
        this.events = [];
    }
    NormalEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getNormalEvents().subscribe(function (res) {
            _this.events = res;
        }, function (err) {
            console.log("greska kod normal sa servera");
            console.log(err);
        });
        localStorage.removeItem("currentPosts");
        localStorage.setItem("lastPostIndex", String(0));
    };
    NormalEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-normal-e',
            template: __webpack_require__(/*! ./normal-e.component.html */ "./src/app/normal-e/normal-e.component.html"),
            styles: [__webpack_require__(/*! ./normal-e.component.css */ "./src/app/normal-e/normal-e.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], NormalEComponent);
    return NormalEComponent;
}());



/***/ }),

/***/ "./src/app/novost-form/novost-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/novost-form/novost-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/novost-form/novost-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/novost-form/novost-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Novost</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          \n          \n          <div class=\"form-group\">\n            <label for=\"\">Naslov</label>\n            <input [(ngModel)]=\"userData.naslov\" name=\"naslov\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          \n          \n          <div class=\"form-group\">\n            <label for=\"\">Tekst</label>\n            <textarea style=\"height:300px\" [(ngModel)]=\"userData.sadrzaj\" name=\"sadrzaj\" rows=\"10\" class=\"form-control\" aria-label=\"With textarea\"></textarea>\n          </div>\n          <br>\n          <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary float-right\">Postavi</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/novost-form/novost-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/novost-form/novost-form.component.ts ***!
  \******************************************************/
/*! exports provided: NovostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovostFormComponent", function() { return NovostFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forme.service */ "./src/app/forme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NovostFormComponent = /** @class */ (function () {
    function NovostFormComponent(_formeService) {
        this._formeService = _formeService;
        this.userData = {};
    }
    NovostFormComponent.prototype.submitForm = function () {
        this.userData['datum'] = Date.now();
        var user = JSON.parse(localStorage.getItem('loggedUserData'));
        // console.log(user.idZavoda );
        this.userData['idZavoda'] = user.idZavoda;
        // this.userData['idZavoda'] = localStorage.getItem(this.userData)
        console.log(this.userData);
        this._formeService.sendNovostiForm(this.userData)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    NovostFormComponent.prototype.ngOnInit = function () {
    };
    NovostFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novost-form',
            template: __webpack_require__(/*! ./novost-form.component.html */ "./src/app/novost-form/novost-form.component.html"),
            styles: [__webpack_require__(/*! ./novost-form.component.css */ "./src/app/novost-form/novost-form.component.css")]
        }),
        __metadata("design:paramtypes", [_forme_service__WEBPACK_IMPORTED_MODULE_1__["FormeService"]])
    ], NovostFormComponent);
    return NovostFormComponent;
}());



/***/ }),

/***/ "./src/app/novost/novost.component.css":
/*!*********************************************!*\
  !*** ./src/app/novost/novost.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/novost/novost.component.html":
/*!**********************************************!*\
  !*** ./src/app/novost/novost.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\">\n    <h2 class=\"mb-0\" >\n      <a type=\"button\" class=\" btn btn-secondary btn-block\" data-parent=\"#accordion\"\n         data-toggle=\"collapse\" href=\"#{{_dataId}}\" aria-expanded=\"false\">\n        {{_naslov}}\n      </a>\n    </h2>\n  </div>\n\n  <div id=\"{{_dataId}}\" class=\"collapse\" role=\"tabpanel\">\n    <div class=\"container\">\n      <h1>{{_naslov}}</h1>\n      <blockquote>\n        <div>{{_sadrzaj}}</div>\n      </blockquote>\n    </div>\n\n    <div *ngIf=\"_authService.loggedIn()\" class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"_postsManager.subscribeToPost(_dataId)\">Prati novost\n      </button>\n\n      <button *ngIf=\"_postsManager.userSubscribedToPost(_dataId)\" type=\"button\" class=\"btn btn-danger\"\n              (click)=\"_postsManager.unsubscribeFromPost(_dataId)\">Prestani sa\n        pracenjem\n      </button>\n\n      <a type=\"button\" class=\" btn btn-default\"\n         data-toggle=\"collapse\" href=\"#{{_dataId}}obavForm\" aria-expanded=\"false\">\n        Dodaj obavestenje\n      </a>\n\n    </div>\n\n    <div class=\"collapse\" id=\"{{_dataId}}obavForm\">\n      <div class=\"card card-body\">\n        <app-obavestenje-forma [idPosta]=\"_dataId\"></app-obavestenje-forma>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/novost/novost.component.ts":
/*!********************************************!*\
  !*** ./src/app/novost/novost.component.ts ***!
  \********************************************/
/*! exports provided: NovostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovostComponent", function() { return NovostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NovostComponent = /** @class */ (function () {
    function NovostComponent(_authService, _postsManager) {
        this._authService = _authService;
        this._postsManager = _postsManager;
        this._naslov = "neki tamo naslov";
        this._sadrzaj = "neki tamo sadrzaj";
    }
    NovostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NovostComponent.prototype, "_dataId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NovostComponent.prototype, "_naslov", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NovostComponent.prototype, "_sadrzaj", void 0);
    NovostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novost',
            template: __webpack_require__(/*! ./novost.component.html */ "./src/app/novost/novost.component.html"),
            styles: [__webpack_require__(/*! ./novost.component.css */ "./src/app/novost/novost.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_2__["PostsManagerService"]])
    ], NovostComponent);
    return NovostComponent;
}());



/***/ }),

/***/ "./src/app/o-nama-form/o-nama-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/o-nama-form/o-nama-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\n    display: flex;\n    flex-flow: row wrap;\n    width: 90%;\n    align-content: center;\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.img-rounder {\n    border-radius: 100%;\n}\n\n.card {\n    padding: 5px;\n    width: 30%;\n}\n\n.card-group {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/o-nama-form/o-nama-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/o-nama-form/o-nama-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <blockquote>\n\n    <div id=\"content_page\">\n\n      <div class=\"title\">\n\n        <h1>О нама</h1>\n        <p>Институт за трансфузију крви Србије је високоспецијализована, научноистраживачка и наставна здравствена установа,\n          референтна за област трансфузиологије.</p>\n\n        <p>Основан је 24. октобра 1944. године под називом Завод за трансфузију крви Србије, са задатком да прикупља крв добровољних\n          давалаца на подручју тадашње савезне државе.</p>\n\n        <p>Током протеклих шест деценија, захваљујући пре свега активностима Института, у Србији је успостављен систем организованог,\n          добровољног, неплаћеног и анонимног давалаштва крви. Пратећи савремена светска достигнућа у области трансфузиологије,\n          Институт је у рутинску праксу уводио савремене методе конзервације крви, различите видове давања крви, развијао\n          концепт усмерене хемотерапије, а у складу са научним сазнањима сукцесивно уводио тестирања крви давалаца на маркере\n          појединих инфективних болести које се могу пренети трансфузијом. У оквиру Института формирано је више лабораторија,\n          основани су национални центри за хемофилију, типизацију ткива и фракционисање плазме.&nbsp;\n          <br> Од оснивања до данас Институт је прикупио, процесирао, тестирао и дистрибуирао преко 2,5 милиона јединица крви,&nbsp;обавио\n          преко&nbsp;50 милиона лабораторијских анализа и фракционисао више од 500 тона људске плазме.&nbsp;</p>\n\n      </div>\n      <!-- Download List -->\n\n\n\n    </div>\n\n  </blockquote>\n\n\n  <p class=\"card-group\" style=\"margin: 10px\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"http://www.nbti.org.rs/upload/images/_zin3812_copy.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Zgrada zavoda za transfuziju</p>\n      </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/o-nama-form/o-nama-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/o-nama-form/o-nama-form.component.ts ***!
  \******************************************************/
/*! exports provided: ONamaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONamaFormComponent", function() { return ONamaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ONamaFormComponent = /** @class */ (function () {
    function ONamaFormComponent() {
    }
    ONamaFormComponent.prototype.ngOnInit = function () {
    };
    ONamaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-o-nama-form',
            template: __webpack_require__(/*! ./o-nama-form.component.html */ "./src/app/o-nama-form/o-nama-form.component.html"),
            styles: [__webpack_require__(/*! ./o-nama-form.component.css */ "./src/app/o-nama-form/o-nama-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ONamaFormComponent);
    return ONamaFormComponent;
}());



/***/ }),

/***/ "./src/app/obavestenje-forma/obavestenje-forma.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/obavestenje-forma/obavestenje-forma.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/obavestenje-forma/obavestenje-forma.component.html":
/*!********************************************************************!*\
  !*** ./src/app/obavestenje-forma/obavestenje-forma.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Obavestenje</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n\n          <div class=\"form-group\">\n            <label for=\"\">Naslov</label>\n            <input [(ngModel)]=\"obavestenje.naslov\" name=\"naslov\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"\">Tekst</label>\n            <textarea style=\"height:300px\" [(ngModel)]=\"obavestenje.sadrzaj\" name=\"sadrzaj\" rows=\"10\"\n                      class=\"form-control\"\n                      aria-label=\"With textarea\"></textarea>\n          </div>\n          <br>\n\n          <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary float-right\">Obrisi</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/obavestenje-forma/obavestenje-forma.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/obavestenje-forma/obavestenje-forma.component.ts ***!
  \******************************************************************/
/*! exports provided: ObavestenjeFormaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObavestenjeFormaComponent", function() { return ObavestenjeFormaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forme.service */ "./src/app/forme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObavestenjeFormaComponent = /** @class */ (function () {
    function ObavestenjeFormaComponent(_formeService) {
        this._formeService = _formeService;
    }
    ObavestenjeFormaComponent.prototype.submitForm = function () {
        var _this = this;
        this._loggedUser = JSON.parse(localStorage.getItem("loggedUserData"));
        this.obavestenje.idZavoda = this._loggedUser.idZavoda;
        this.obavestenje.datum = String(Date.now());
        this.podaciZaDodavanje.id = this._loggedUser.idZavoda;
        this._formeService.sendObavestenjeForm(this.obavestenje).subscribe(function (response) {
            console.log("obavestenje dodato");
            console.log(response);
            _this.podaciZaDodavanje.idObavestenja = response._id;
        }, function (err) {
            console.log(err);
        }, function () {
            _this._formeService.addObavestenjeToNovost(_this.podaciZaDodavanje).subscribe(function (res) {
                console.log("odgovor sad dodavanja obavestenja");
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ObavestenjeFormaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ObavestenjeFormaComponent.prototype, "idPosta", void 0);
    ObavestenjeFormaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obavestenje-forma',
            template: __webpack_require__(/*! ./obavestenje-forma.component.html */ "./src/app/obavestenje-forma/obavestenje-forma.component.html"),
            styles: [__webpack_require__(/*! ./obavestenje-forma.component.css */ "./src/app/obavestenje-forma/obavestenje-forma.component.css")]
        }),
        __metadata("design:paramtypes", [_forme_service__WEBPACK_IMPORTED_MODULE_1__["FormeService"]])
    ], ObavestenjeFormaComponent);
    return ObavestenjeFormaComponent;
}());



/***/ }),

/***/ "./src/app/obrisi-user-form/obrisi-user-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/obrisi-user-form/obrisi-user-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/obrisi-user-form/obrisi-user-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/obrisi-user-form/obrisi-user-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Brisanje Korisnika</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n\n          <div class=\"form-group\">\n            <label for=\"\">Broj davaoca</label>\n            <input [(ngModel)]=\"userData.brojDavaoca\" name=\"brojDavaoca\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          \n          <br>\n\n          <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary float-right\">Obrisi</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/obrisi-user-form/obrisi-user-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/obrisi-user-form/obrisi-user-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ObrisiUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrisiUserFormComponent", function() { return ObrisiUserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forme.service */ "./src/app/forme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObrisiUserFormComponent = /** @class */ (function () {
    function ObrisiUserFormComponent(_formeService) {
        this._formeService = _formeService;
        this.userData = {};
    }
    ObrisiUserFormComponent.prototype.submitForm = function () {
        // console.log()
        this._formeService.sendObrisiUsera(this.userData).subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    ObrisiUserFormComponent.prototype.ngOnInit = function () {
    };
    ObrisiUserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obrisi-user-form',
            template: __webpack_require__(/*! ./obrisi-user-form.component.html */ "./src/app/obrisi-user-form/obrisi-user-form.component.html"),
            styles: [__webpack_require__(/*! ./obrisi-user-form.component.css */ "./src/app/obrisi-user-form/obrisi-user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_forme_service__WEBPACK_IMPORTED_MODULE_1__["FormeService"]])
    ], ObrisiUserFormComponent);
    return ObrisiUserFormComponent;
}());



/***/ }),

/***/ "./src/app/poruka/poruka.component.css":
/*!*********************************************!*\
  !*** ./src/app/poruka/poruka.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-message\n{\n    margin: 20px 0;\n    padding: 20px;\n    border-left: 3px solid #eee;\n}\n.alert-message h4\n{\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.alert-message p:last-child\n{\n    margin-bottom: 0;\n}\n.alert-message code\n{\n    background-color: #fff;\n    border-radius: 3px;\n}\n.alert-message-success\n{\n    background-color: #F4FDF0;\n    border-color: #3C763D;\n}\n.alert-message-success h4\n{\n    color: #3C763D;\n}\n.alert-message-danger\n{\n    background-color: #fdf7f7;\n    border-color: #d9534f;\n}\n.alert-message-danger h4\n{\n    color: #d9534f;\n}\n.alert-message-warning\n{\n    background-color: #fcf8f2;\n    border-color: #f0ad4e;\n}\n.alert-message-warning h4\n{\n    color: #f0ad4e;\n}\n.alert-message-info\n{\n    background-color: #f4f8fa;\n    border-color: #5bc0de;\n}\n.alert-message-info h4\n{\n    color: #5bc0de;\n}\n.alert-message-default\n{\n    background-color: #EEE;\n    border-color: #B4B4B4;\n}\n.alert-message-default h4\n{\n    color: #000;\n}\n.alert-message-notice\n{\n    background-color: #FCFCDD;\n    border-color: #BDBD89;\n}\n.alert-message-notice h4\n{\n    color: #444;\n}"

/***/ }),

/***/ "./src/app/poruka/poruka.component.html":
/*!**********************************************!*\
  !*** ./src/app/poruka/poruka.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <blockquote>\n  <div>Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend\n    shameless unfeeling he objection consisted. She although cheerful perceive screened throwing met not eat distance. Viewing\n    hastily or written dearest elderly up weather it as. So direction so sweetness or extremity at daughters. Provided put\n    unpacked now but bringing. Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture\n    way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no.\n    Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed. Of resolve\n    to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument.\n    If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if\n    by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.\n    Imagine was you removal raising gravity. Unsatiable understood or expression dissimilar so sufficient. Its party every\n    heard and event gay. Advice he indeed things adieus in number so uneasy. To many four fact in he fail. My hung it quit\n    next do of. It fifteen charmed by private savings it mr. Favourable cultivated alteration entreaties yet met sympathize.\n    Furniture forfeited sir objection put cordially continued sportsmen. Indulgence announcing uncommonly met she continuing\n    two unpleasing terminated. Now busy say down the shed eyes roof paid her. Of shameless collected suspicion existence\n    in. Share walls stuff think but the arise guest. Course suffer to do he sussex it window advice. Yet matter enable misery\n    end extent common men should. Her indulgence but assistance favourable cultivated everything collecting. Domestic confined\n    any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite\n    differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness\n    distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented\n    it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage. Started\n    several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him\n    affixed noisier yet. An course regard to up he hardly. View four has said does men saw find dear shy. Talent men wicket\n    add garden. Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly.\n    Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active\n    mutual nor father mother exeter change six did all. Doubtful two bed way pleasure confined followed. Shew up ye away\n    no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain.\n    Position two saw greatest stronger old. Pianoforte if at simplicity do estimating. Increasing impression interested expression\n    he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin. Girl\n    when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue delicate as unlocked\n    entirely mr relation diverted in. Known not end fully being style house. An whom down kept lain name so at easy.\n  </div>\n</blockquote> -->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-6\">\n      <div class=\"alert-message alert-message-notice\">\n        <h4>\n          posiljalac\n        </h4>\n        <p>\n            <!-- SADRZAJ  -->\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n          text ever since the 1500s. \n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/poruka/poruka.component.ts":
/*!********************************************!*\
  !*** ./src/app/poruka/poruka.component.ts ***!
  \********************************************/
/*! exports provided: PorukaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorukaComponent", function() { return PorukaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PorukaComponent = /** @class */ (function () {
    function PorukaComponent() {
    }
    PorukaComponent.prototype.ngOnInit = function () {
    };
    PorukaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poruka',
            template: __webpack_require__(/*! ./poruka.component.html */ "./src/app/poruka/poruka.component.html"),
            styles: [__webpack_require__(/*! ./poruka.component.css */ "./src/app/poruka/poruka.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PorukaComponent);
    return PorukaComponent;
}());



/***/ }),

/***/ "./src/app/posts_manager_service/posts-manager.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/posts_manager_service/posts-manager.service.ts ***!
  \****************************************************************/
/*! exports provided: PostsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManagerService", function() { return PostsManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server-configuration.service */ "./src/app/server-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsManagerService = /** @class */ (function () {
    function PostsManagerService(_http, _serverConfig) {
        this._http = _http;
        this._serverConfig = _serverConfig;
        this._allPostsUrl = this._serverConfig.getAllPostsUrl();
        this._nextPartOfPostsUrl = this._serverConfig.getNextPartOfPostsUrl();
        this._userContent_ObavestenjaUrl = this._serverConfig.getUserContent_NovostiUrl();
        this._userContent_NovostiUrl = this._serverConfig.getUserContent_ObavestenjaUrl();
    }
    PostsManagerService.prototype.getAllPosts = function () {
        return this._http.get(this._allPostsUrl);
    };
    PostsManagerService.prototype.getNextPart = function (_startingIndex, _lastIndex) {
        return this._http.post(this._nextPartOfPostsUrl, { firstIndex: _startingIndex, lastIndex: _lastIndex });
    };
    PostsManagerService.prototype.savePostsToLocalStorage = function (newPosts) {
        // get posts as string
        var postsFromStorage = localStorage.getItem('currentPosts');
        // place for posts as array
        var storedArray;
        if (postsFromStorage != null) {
            // if posts exists in local storage create array from them
            storedArray = JSON.parse(postsFromStorage);
        }
        else {
            storedArray = [];
        }
        // save again all posts
        localStorage.setItem('currentPosts', JSON.stringify(storedArray.concat(newPosts)));
    };
    PostsManagerService.prototype.savePostsZavod = function (newPosts, idZavoda) {
        var postsFromStorage = localStorage.getItem("novostiZavod" + idZavoda);
        var storedArray;
        if (postsFromStorage != null) {
            storedArray = JSON.parse(postsFromStorage);
        }
        else {
            storedArray = [];
        }
        localStorage.setItem("novostiZavod" + idZavoda, JSON.stringify(storedArray.concat(newPosts)));
    };
    PostsManagerService.prototype.getLastPostIndex = function () {
        var storedValue = localStorage.getItem('lastPostIndex');
        // tslint:disable-next-line:curly
        if (storedValue != null)
            // tslint:disable-next-line:radix
            return parseInt(storedValue);
        else
            return 0;
    };
    PostsManagerService.prototype.getLastPostIndexZavod = function (idZavoda) {
        var storedValue = localStorage.getItem("lastPostIndexZavod" + idZavoda);
        if (storedValue != null)
            return parseInt(storedValue);
        else
            return 0;
    };
    PostsManagerService.prototype.getLastDefaultNovostiIndex = function () {
        var storedValue = localStorage.getItem("lastDefaultNovostiIndex");
        if (storedValue != null)
            return parseInt(storedValue);
        else
            return 0;
    };
    PostsManagerService.prototype.saveLastPostIndex = function (index) {
        localStorage.setItem('lastPostIndex', index);
    };
    PostsManagerService.prototype.saveLastDefaultNovostiIndex = function (index) {
        localStorage.setItem("lastDefaultNovostiIndex", index);
    };
    PostsManagerService.prototype.getUserContent_Novosti = function (userId) {
        console.log('Sending request for pracene_novosti on: ' + this._userContent_NovostiUrl);
        return this._http.post(this._userContent_NovostiUrl, { id: userId });
    };
    PostsManagerService.prototype.getUserContent_Obavestenja = function (userId) {
        console.log('Sending request for pracene_obavestenja on: ' + this._userContent_ObavestenjaUrl);
        return this._http.post(this._userContent_ObavestenjaUrl, { id: userId });
    };
    PostsManagerService.prototype.savePraceneNovostiToLocalStorage = function (novosti) {
    };
    PostsManagerService.prototype.saveObavestenjaToLocalStorage = function (obavestenja) {
    };
    PostsManagerService.prototype.userSubscribedToPost = function (postId) {
        return true;
    };
    PostsManagerService.prototype.subscribeToPost = function (postId) {
        console.log("Subscibing to " + postId);
    };
    PostsManagerService.prototype.unsubscribeFromPost = function (postId) {
        console.log("Unsubscribing " + postId);
    };
    PostsManagerService.prototype.getNextPostsZavod = function (firstIndex, lastIndex, idZavoda) {
        return this._http.post(this._serverConfig.getZavodNovostiInterval(), {
            firstIndex: firstIndex,
            lastIndex: lastIndex,
            idZavoda: idZavoda
        });
    };
    PostsManagerService.prototype.saveLastPostIndexZavod = function (index, idZavod) {
        localStorage.setItem("lastPostIndexZavod" + idZavod, index);
    };
    PostsManagerService.prototype.getDefaultNovosti = function (_firstIndex, _lastIndex) {
        return this._http.post(this._serverConfig.getDefaultNovosti(), {
            firstIndex: _firstIndex,
            lastIndex: _lastIndex
        });
    };
    PostsManagerService.prototype.saveDefaultNovosti = function (data) {
        var postsFromStorage = localStorage.getItem("defaultNovosti");
        var storedArray;
        if (postsFromStorage != null) {
            storedArray = JSON.parse(postsFromStorage);
        }
        else {
            storedArray = [];
        }
        localStorage.setItem("defaultNovosti", JSON.stringify(storedArray.concat(data)));
    };
    PostsManagerService.prototype.getZavodi = function () {
        return this._http.get(this._serverConfig.getZavodiUrl());
    };
    PostsManagerService.prototype.saveZavodi = function (data) {
        localStorage.setItem("zavodiStorage", JSON.stringify(data));
    };
    PostsManagerService.prototype.savePrikazaniZavod = function (index) {
        localStorage.setItem("prikazaniZavod", index);
    };
    PostsManagerService.prototype.getLastPrikazaniZavod = function () {
        var zavod = localStorage.getItem("prikazaniZavod");
        if (zavod != null)
            return parseInt(zavod);
        else
            return -1;
    };
    PostsManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _server_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ServerConfigurationService"]])
    ], PostsManagerService);
    return PostsManagerService;
}());



/***/ }),

/***/ "./src/app/pretraga-zavod/pretraga-zavod.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pretraga-zavod/pretraga-zavod.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pretraga-zavod/pretraga-zavod.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pretraga-zavod/pretraga-zavod.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h4 class=\"page-header\">Drzava:</h4>\n  <div class=\"row\" style=\"height: 10px\">\n      <select class=\"form-control\">\n        <option value=\"+47\">Norge (+47)</option>\n        <option value=\"+46\">Sverige (+46)</option>\n        <option value=\"+45\">Danmark (+45)</option>\n      </select>\n  </div>\n  <br/>\n  <h4 class=\"page-header\">Grad:</h4>\n  <div class=\"row\">\n    <div class=\"col-m-3\">\n      <select class=\"form-control\">\n        <option value=\"+47\">Norge (+47)</option>\n        <option value=\"+46\">Sverige (+46)</option>\n        <option value=\"+45\">Danmark (+45)</option>\n      </select>\n    </div>\n  </div>\n  <br/>\n  <h4 class=\"page-header\">Zavod:</h4>\n  <div class=\"row\">\n    <div class=\"col-xl-3\">\n      <select class=\"form-control\">\n        <option value=\"+47\">Norge (+47)</option>\n        <option value=\"+46\">Sverige (+46)</option>\n        <option value=\"+45\">Danmark (+45)</option>\n      </select>\n    </div>\n  </div>\n  <br/>\n  <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-dark\"\n          btn-lg btn-block>Submit\n  </button>\n</div>\n\n<script>$(document).ready(function () {\n  // convert selects already on the page at dom load\n  $('select.form-control').combobox();\n\n  $('#it').click(function (e) {\n    $('ul.dropdown-menu').toggle();\n  });\n\n  //  $('input').focus(function(e){\n  //    $('ul.dropdown-menu').toggle();\n  //  });\n\n});\n\n</script>\n"

/***/ }),

/***/ "./src/app/pretraga-zavod/pretraga-zavod.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pretraga-zavod/pretraga-zavod.component.ts ***!
  \************************************************************/
/*! exports provided: PretragaZavodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PretragaZavodComponent", function() { return PretragaZavodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PretragaZavodComponent = /** @class */ (function () {
    function PretragaZavodComponent() {
    }
    PretragaZavodComponent.prototype.ngOnInit = function () {
    };
    PretragaZavodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pretraga-zavod',
            template: __webpack_require__(/*! ./pretraga-zavod.component.html */ "./src/app/pretraga-zavod/pretraga-zavod.component.html"),
            styles: [__webpack_require__(/*! ./pretraga-zavod.component.css */ "./src/app/pretraga-zavod/pretraga-zavod.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PretragaZavodComponent);
    return PretragaZavodComponent;
}());



/***/ }),

/***/ "./src/app/privilegovana-strana/privilegovana-strana.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/privilegovana-strana/privilegovana-strana.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n    width:  100%;\n    height: inherit;\n}\nbutton {\n    width:  23%;\n    height: inherit;\n    margin: 0px;\n}\n@media (max-width: 700px) {\n    [class*=\"btn-\"] {\n        width: 90%;\n        margin-top: 2px;\n        box-sizing: border-box;\n        padding: 0;\n    }   \n}\n"

/***/ }),

/***/ "./src/app/privilegovana-strana/privilegovana-strana.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/privilegovana-strana/privilegovana-strana.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"\" *ngIf=\"_authService.getUserType().toLowerCase()=='zaposleni'\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"\">\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#dodavanje_korisnika_form\"\n          aria-expanded=\"false\" aria-controls=\"dodavanje_korisnika_form\" (click)=\"saveClickHistory($event)\">\n    Dodavanje korisnika\n  </button>\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#dodavanje_novosti_form\"\n          aria-expanded=\"false\" aria-controls=\"dodavanje_novosti_form\" (click)=\"saveClickHistory($event)\">\n    Dodavanje novosti\n  </button>\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#belezenje_davanja_form\"\n          aria-expanded=\"false\" aria-controls=\"belezenje_davanja_form\" (click)=\"saveClickHistory($event)\">\n    Belezenje davanja krvi\n  </button>\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#brisanje_naloga_form\"\n          aria-expanded=\"false\" aria-controls=\"brisanje_naloga_form\" (click)=\"saveClickHistory($event)\">\n    Brisanje naloga\n  </button>\n  </div>\n</div>\n<div class=\"collapse\" id=\"dodavanje_korisnika_form\">\n  <div class=\"card card-body\">\n    <app-user-form></app-user-form>\n  </div>\n</div>\n<div class=\"collapse\" id=\"dodavanje_novosti_form\">\n  <div class=\"card card-body\">\n    <app-novost-form></app-novost-form>\n  </div>\n</div>\n<div class=\"collapse\" id=\"belezenje_davanja_form\">\n  <div class=\"card card-body\">\n    <app-blezenje-davanja-form></app-blezenje-davanja-form>\n  </div>\n</div>\n<div class=\"collapse\" id=\"brisanje_naloga_form\">\n  <div class=\"card card-body\">\n    cetvrti veliki neki pasusAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\n    squid. Nihil anim\n    keffiyeh\n    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/privilegovana-strana/privilegovana-strana.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/privilegovana-strana/privilegovana-strana.component.ts ***!
  \************************************************************************/
/*! exports provided: PrivilegovanaStranaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegovanaStranaComponent", function() { return PrivilegovanaStranaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivilegovanaStranaComponent = /** @class */ (function () {
    function PrivilegovanaStranaComponent(_authService) {
        this._authService = _authService;
        this._activeTab = null;
    }
    PrivilegovanaStranaComponent.prototype.ngOnInit = function () {
    };
    PrivilegovanaStranaComponent.prototype.saveClickHistory = function (event) {
        if (this._activeTab === event.target) {
            this._activeTab = null;
        }
        else {
            var tmp = event.target;
            if (this._activeTab != null)
                this._activeTab.click();
            this._activeTab = tmp;
        }
    };
    PrivilegovanaStranaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privilegovana-strana',
            template: __webpack_require__(/*! ./privilegovana-strana.component.html */ "./src/app/privilegovana-strana/privilegovana-strana.component.html"),
            styles: [__webpack_require__(/*! ./privilegovana-strana.component.css */ "./src/app/privilegovana-strana/privilegovana-strana.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PrivilegovanaStranaComponent);
    return PrivilegovanaStranaComponent;
}());



/***/ }),

/***/ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\n    display: flex;\n    flex-flow: row wrap;\n    width: 90%;\n    \n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n    float: left;\n}\n\n.img-rounder {\n    border-radius: 100%;\n}\n\n.card {\n    padding: 5px;\n    width: 30%;\n}\n\n.card-group {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <blockquote>\n\n    <h1>O procesu davanja krvi</h1>\n\n    <div class=\"text\">\n\n      <p>Цео поступак од доласка даваоца до напуштања службе траје око 30 минута, а састоји се од: попуњавања Упитника за даваоца,\n        регистрације, одређивања нивоа хемоглобина, лекарског прегледа, давања крви из вене у прегибу лакта и послужења захвалним\n        оброком.\n        <br> Информације о процедури давања крви су сажете у штампаном Упутству за даваоце који добија сваки давалац при доласку.</p>\n\n      <h2>Упутство за даваоце</h2>\n\n      <ol>\n        <li>Молимо Вас да попуните упитник</li>\n        <li>Предајте упитник службеном лицу које ради на регистрацији давалаца</li>\n        <li>Медицински техничар ће из капи крви узетој из Вашег прста одредити ниво хемаглобина</li>\n        <li>Лекар ће Вас прегледати и одлучити да ли ћете данас дати крв</li>\n        <li>Сетом за једнократну употребу медицински техничар ће узети крв</li>\n        <li>Након давања крви останите код нас још десетак минута и послужите се оброком захвалности</li>\n        <li>Завој на прегибу лакта немојте скидати следећа два сата</li>\n        <li>У интересу Вашег здравља је да у наредна два сата не заплаите цигарету</li>\n        <li>Уколико сматрате да Ваша крв може да нашкоди болеснику, од тренутак доласка до напуштања места прикупљања крви можете\n          да обавестите одговорне да Вашу крв не употребе.</li>\n      </ol>\n\n      <p>Ваша крв биће употребљена благовремено, што је од изузетне важности за здравље болесника који ће је примти.</p>\n\n      <p>Ваша крв ће бити детаљно испитана и на болести које се могу пренети и трансфузијом: СИДА, жутица Б и Ц и сифилис.</p>\n\n      <p>Ове анализе за Вас су бесплатне, а раде се из узорка крви сваког даваоца после сваког давања крви.</p>\n\n      <p>При попуњавању\n        <em>Упитника за даваоца,</em> који се састоји од низа питања на које је неопходно дати искрене одговоре јер су у функцији\n        бриге и за здравље даваоца који жели да дарује крв као и болесника коме ће та крв бити примењена својим потписом\n        давалац потврђује да савесно и са пуном одговорношћу стоји иза датих одговора. Давање крви не треба да буде одраз\n        само жеље да се помогне другима, већ и свести о потенцијалним ризицима примене дате крви. Особа која жели да давањем\n        крви помогне другима мора бити сигурна да овим чином неће угрозити онога коме жели да помогне. Ова сигурност се постиже\n        едукацијом и самоискључивањем у случају постојања ризичних стања и понашања као и искреним одговорима на питања при\n        лекарском прегледу.</p>\n\n\n\n    </div>\n\n  </blockquote>\n\n</div>"

/***/ }),

/***/ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProcesDavanjaKrviFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesDavanjaKrviFormComponent", function() { return ProcesDavanjaKrviFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcesDavanjaKrviFormComponent = /** @class */ (function () {
    function ProcesDavanjaKrviFormComponent() {
    }
    ProcesDavanjaKrviFormComponent.prototype.ngOnInit = function () {
    };
    ProcesDavanjaKrviFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proces-davanja-krvi-form',
            template: __webpack_require__(/*! ./proces-davanja-krvi-form.component.html */ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.html"),
            styles: [__webpack_require__(/*! ./proces-davanja-krvi-form.component.css */ "./src/app/proces-davanja-krvi-form/proces-davanja-krvi-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcesDavanjaKrviFormComponent);
    return ProcesDavanjaKrviFormComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Register</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-froup\">\n            <label for=\"\">Email</label>\n            <input [(ngModel)]=\"registerUserData.email\" name=\"email\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label   for=\"\">Password</label>\n            <input [(ngModel)]=\"registerUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n\n          </div>\n          <button (click)=\"registerUser()\" type=\"button\" class=\"btn btn-primary float-right\">Register</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this._auth.registerUser(this.registerUserData)
            .subscribe(function (res) {
            console.log(res);
            // localStorage.setItem('token',res.token);
            _this._router.navigate(['/login']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n    width:  100%;\n    height: inherit;\n    margin-right: 10%;\n}\nbutton {\n    width:  18%;\n    height: inherit;\n    background-color: red;\n}\n@media (max-width: 1000px) {\n    [class*=\"btn-\"] {\n        width: 100%;\n        margin-right: 10px;\n        margin-top: 2px;\n        box-sizing: border-box;\n        padding: 0;\n    }   \n}\n"

/***/ }),

/***/ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<<<<<<< HEAD\n  <div class=\"col-xl-4 col-offset-6 centered\">\n=======\n  <div class=\"col-xl-10 col-offset-6 centered\">\n>>>>>>> duci_test\n    <div class=\"btn-group\" role=\"group\" style=\"height: 5vh\">\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaPracenimNovostima\"\n              (click)=\"saveClickHistory($event)\">Novosti\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaProcitanimObavestenjima\"\n              (click)=\"saveClickHistory($event)\">Procitana obavestenja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaNeprocitanimObavestenjima\"\n              (click)=\"saveClickHistory($event)\">Neprocitana obavestenja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijeDavanja\"\n              (click)=\"saveClickHistory($event)\">Istorija davanja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijePrisustvaDogadjajima\"\n<<<<<<< HEAD\n              (click)=\"saveClickHistory($event)\">Istorija prisustva dogadjajima\n=======\n        (click)=\"saveClickHistory($event)\">Moji dogadjaji\n>>>>>>> duci_test\n      </button>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaPracenimNovostima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _novost of _novosti\">\n              <h2 class=\"card-title\">{{_novost.naslov}}</h2>\n              <p class=\"card-text\">{{_novost.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaProcitanimObavestenjima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.procitana\">\n              <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n              <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaNeprocitanimObavestenjima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.neprocitana\">\n              <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n              <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabIstorijeDavanja\">\n          <div class=\"card card-body\">\n            <h3 *ngFor=\"let _datum of _user.istorijaDavanja\">\n              {{_datum}}\n            </h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabIstorijePrisustvaDogadjajima\">\n          <div class=\"card card-body\">\n            istorija prisustvovanja dogadjajima\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.ts ***!
  \******************************************************************/
/*! exports provided: SadrzajKorisnikaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SadrzajKorisnikaComponent", function() { return SadrzajKorisnikaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SadrzajKorisnikaComponent = /** @class */ (function () {
    function SadrzajKorisnikaComponent(_authService, _postsManager) {
        this._authService = _authService;
        this._postsManager = _postsManager;
        this._user = {};
        this._obavestenja = {
            procitana: [{}],
            neprocitana: [{}]
        };
    }
    SadrzajKorisnikaComponent.prototype.ngOnInit = function () {
        if (this._authService.loggedIn()) {
            this._user = JSON.parse(localStorage.getItem("loggedUserData"));
            this._novosti = JSON.parse(localStorage.getItem("_pracene_novosti"));
            this._obavestenja = JSON.parse(localStorage.getItem("_obavestenja"));
        }
    };
    SadrzajKorisnikaComponent.prototype.saveClickHistory = function (event) {
        // ako nije prvi klik klikni na poslednje dugme
        if (this._activeTab)
            this._activeTab.click();
        // zapamti na sta je kliknuto
        this._activeTab = event.currentTarget;
    };
    SadrzajKorisnikaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sadrzaj-korisnika',
            template: __webpack_require__(/*! ./sadrzaj-korisnika.component.html */ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.html"),
            styles: [__webpack_require__(/*! ./sadrzaj-korisnika.component.css */ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_2__["PostsManagerService"]])
    ], SadrzajKorisnikaComponent);
    return SadrzajKorisnikaComponent;
}());



/***/ }),

/***/ "./src/app/server-configuration.service.ts":
/*!*************************************************!*\
  !*** ./src/app/server-configuration.service.ts ***!
  \*************************************************/
/*! exports provided: ServerConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConfigurationService", function() { return ServerConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerConfigurationService = /** @class */ (function () {
    function ServerConfigurationService() {
        this.ipAddress = '192.168.0.100';
        // 192.168.0.172
        this.portNum = '3030';
    }
    ServerConfigurationService.prototype.getFullServerAddress = function () {
        return 'http://' + this.ipAddress + ':' + this.portNum;
    };
    ServerConfigurationService.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    ServerConfigurationService.prototype.getPortNum = function () {
        return this.portNum;
    };
    ServerConfigurationService.prototype.getLoginUrl = function () {
        return this.getFullServerAddress() + '/users/login';
    };
    ServerConfigurationService.prototype.getRegisterUrl = function () {
        return this.getFullServerAddress() + '/users/register';
    };
    ServerConfigurationService.prototype.getEventsNormalUrl = function () {
        return this.getFullServerAddress() + '/products/normal';
    };
    ServerConfigurationService.prototype.getEventsSpecialUrl = function () {
        return this.getFullServerAddress() + '/products/special';
    };
    ServerConfigurationService.prototype.getAllPostsUrl = function () {
        return this.getFullServerAddress() + '/novosti/all';
    };
    ServerConfigurationService.prototype.getNextPartOfPostsUrl = function () {
        return this.getFullServerAddress() + '/novosti/interval';
    };
    ServerConfigurationService.prototype.getUserContent_ObavestenjaUrl = function () {
        return this.getFullServerAddress() + '/users/getObavestenja';
    };
    ServerConfigurationService.prototype.getUserContent_NovostiUrl = function () {
        return this.getFullServerAddress() + '/users/getNovosti';
    };
    ServerConfigurationService.prototype.getUserSendForm = function () {
        return this.getFullServerAddress() + '/users/kreiraj';
    };
    ServerConfigurationService.prototype.getNovostSendForm = function () {
        return this.getFullServerAddress() + '/novosti/add';
    };
    ServerConfigurationService.prototype.getObavestenjeSendForm = function () {
        return this.getFullServerAddress() + '/obavestenja/add';
    };
    ServerConfigurationService.prototype.getZabeleziDavanjeUrl = function () {
        console.log('adresa pribaljena');
        return this.getFullServerAddress() + '/users/davanjeKrvi';
    };
    ServerConfigurationService.prototype.getZavodNovostiInterval = function () {
        return this.getFullServerAddress() + '/novosti/zavodNovostiInterval';
    };
    ServerConfigurationService.prototype.getObrisiUserForm = function () {
        return this.getFullServerAddress() + '/users/removeUser';
    };
    ServerConfigurationService.prototype.getDefaultNovosti = function () {
        // firstIndex lastIndex
        return this.getFullServerAddress() + '/novosti/interval';
    };
    ServerConfigurationService.prototype.getZavodiUrl = function () {
        return this.getFullServerAddress() + '/zavodi/all';
    };
    ServerConfigurationService.prototype.getAddObavestenjeUrl = function () {
        return this.getFullServerAddress() + '/obavestenja/add';
    };
    ServerConfigurationService.prototype.getAddObavestenjaToNovost = function () {
        return this.getFullServerAddress() + '/novosti/dodajObavestenje';
    };
    ServerConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServerConfigurationService);
    return ServerConfigurationService;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Kreiraj Korisnika</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n\n          <div class=\"form-group\">\n            <label for=\"\">Ime</label>\n            <input [(ngModel)]=\"userData.ime\" name=\"ime\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Prezime</label>\n            <input [(ngModel)]=\"userData.prezime\" name=\"prezime\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Krvna Grupa</label>\n            <input [(ngModel)]=\"userData.krvnaGrupa\" name=\"krvnaGrupa\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input [(ngModel)]=\"userData.email\" name=\"email\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label   for=\"\">Password</label>\n            <input [(ngModel)]=\"userData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n\n          </div>\n          <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-primary float-right\">Kreiraj</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forme.service */ "./src/app/forme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(_formeService) {
        this._formeService = _formeService;
        this.userData = {};
    }
    UserFormComponent.prototype.submitForm = function () {
        this._formeService.sendUserForm(this.userData)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_forme_service__WEBPACK_IMPORTED_MODULE_1__["FormeService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/vest/vest.component.css":
/*!*****************************************!*\
  !*** ./src/app/vest/vest.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vest/vest.component.html":
/*!******************************************!*\
  !*** ./src/app/vest/vest.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <app-lista-novosti [_listaNovosti]=\"_vesti\" ></app-lista-novosti>\n\n      <button (click)=\"dodajPostClick()\">Ucitaj jos</button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/vest/vest.component.ts":
/*!****************************************!*\
  !*** ./src/app/vest/vest.component.ts ***!
  \****************************************/
/*! exports provided: VestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VestComponent", function() { return VestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VestComponent = /** @class */ (function () {
    function VestComponent(_postsManager) {
        this._postsManager = _postsManager;
        this._vesti = [
            {
                id: "1",
                naslov: "Naslov 1",
                sadrzaj: "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. " +
                    "Everything so dispatched as it increasing pianoforte. Hearing now saw perhaps minutes herself his. " +
                    "Of instantly excellent therefore difficult he northward. Joy green but least marry rapid quiet but. " +
                    "Way devonshire introduced expression saw travelling affronting. Her and effects affixed pretend account " +
                    "ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening. "
            },
            {
                id: "2",
                naslov: "Naslov 2",
                sadrzaj: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight" +
                    " age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter " +
                    "highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but " +
                    "end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. " +
                    "On three thing chief years in money arise of."
            },
            {
                id: "3",
                naslov: "Naslov 3",
                sadrzaj: "Now led tedious shy lasting females off. Dashwood marianne in of entrance be on wondered possible " +
                    "building. Wondered sociable he carriage in speedily margaret. Up devonshire of he thoroughly insensible alteration." +
                    " An mr settling occasion insisted distance ladyship so. Not attention say frankness intention out dashwoods now " +
                    "curiosity. Stronger ecstatic as no judgment daughter speedily thoughts. Worse downs nor might she court did nay forth these. "
            },
            {
                id: "4",
                naslov: "Naslov 4",
                sadrzaj: "Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. " +
                    "Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face " +
                    "shed. ﻿no great but music too old found arose. "
            },
            {
                id: "5",
                naslov: "Naslov 5",
                sadrzaj: "Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. "
            }
        ];
        console.log("Component consturctor....");
        this._lastPostIndex = this._postsManager.getLastPostIndex();
        console.log("_lastPostIndex set to : " + this._lastPostIndex);
    }
    VestComponent.prototype.ngOnInit = function () {
        console.log("Uso u vest");
        // let _this = this;
        //
        // let savedPosts = localStorage.getItem("currentPosts");
        // console.log("INITIAL STORAGE STATE: \n" + savedPosts);
        // if (savedPosts != null) {
        //
        //   console.log("Loading posts from storage");
        //
        //   this._vesti = JSON.parse(savedPosts);
        //
        // } else {
        //
        //   console.log("Sending request for posts");
        //
        //   this.getNextPosts(2);
        //
        // }
    };
    VestComponent.prototype.dodajPostClick = function () {
        this.getNextPosts(2);
    };
    VestComponent.prototype.getNextPosts = function (count) {
        var _this = this;
        // get posts
        this._postsManager.getNextPart(this._lastPostIndex, parseInt(this._lastPostIndex) + count).subscribe(function (res) {
            console.log("Receiving from: " + _this._lastPostIndex + " to: " + (parseInt(_this._lastPostIndex) + count));
            _this._vesti = _this._vesti.concat(res);
            _this._lastPostIndex += count;
            console.log("Received: " + String(res));
            _this._postsManager.saveLastPostIndex(_this._lastPostIndex);
            _this._postsManager.savePostsToLocalStorage(res);
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("...FETCH COMPLETED...");
        });
    };
    VestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vest',
            template: __webpack_require__(/*! ./vest.component.html */ "./src/app/vest/vest.component.html"),
            styles: [__webpack_require__(/*! ./vest.component.css */ "./src/app/vest/vest.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__["PostsManagerService"]])
    ], VestComponent);
    return VestComponent;
}());



/***/ }),

/***/ "./src/app/zavod-informacije/zavod-informacije.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/zavod-informacije/zavod-informacije.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.parent {\n    display: flex;\n    flex-flow: row wrap;\n    width: 90%;\n    \n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n    float: left;\n}\n\n.img-rounder {\n    border-radius: 100%;\n}\n\n.card {\n    padding: 5px;\n    width: 30%;\n}\n\n.card-group {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/zavod-informacije/zavod-informacije.component.html":
/*!********************************************************************!*\
  !*** ./src/app/zavod-informacije/zavod-informacije.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <blockquote>\n\n    <p>Pre 60 godine formirana je služba za transfuziju krvi u Nišu koja je na svom razvojnom putu prošla kroz više faza, od\n      kojih je svaka ostavila tragove na njenu sadašnju fizionomiju.</p>\n\n    <p>Rad Zavoda za transfuziju krvi Niš karakteriše kontinuitet u svim delatnostima uz intenzivno osavremenjivanje rada.</p>\n\n\n\n    <p>Obezbedjivanje potrebnih količina krvi može se postići samo delatnošću dobro organizovane, medjusobno uskladjene i savremeno\n      postavljene službe za transfuziju krvi koja kao takva, u celini dobija realnu mogućnost da odgovori zadacima koji joj\n      se postavljaju, što su sve karakteristike Zavoda za transfuziju krvi Niš.</p>\n\n\n\n    <p>Zahvaljujući ovakvim karakteristikama, Zavod za transfuziju krvi Niš stiče uslove da prati i primenjuje sva savremena\n      dostignuća u svetskoj transfuziologiji, a to znači da se pacijentu obezbedjuje sve ono što je medicinski, etički i\n      ekonomski najcelishodnije.</p>\n\n    <p>Stručni rad Zavoda za transfuziju krvi Niš je pod stalnom kontrolom direktora, načelnika odeljenja i ostalih lekara,\n      što dovodi do visokostručnog rada, a sve usled toga što Niški Zavod ima vrhunske stručnjake u svim oblastima transfuzije.</p>\n\n\n\n    <p>Zavod intenzivno radi na omasovljavanju dobrovoljnog davalaštva krvi, separiranju krvi, uvodjenju novih analiza koje\n      daju sigurnost primene krvi i krvnih derivata, uvodjenju novih tehnologija u svim oblastima, prenatalnoj zaštiti, HLA\n      tipizaciji, terapijskoj i donorskoj plazmaferezi i citoferezi, ambulantnim i kućnim transfuzijama, kompjuterizaciji\n      procesa rada, uključujući i rad zajedničkih službi, edukaciju svih profila medicinskih radnika i praćenje i učestvovanje\n      u naučno istraživačkim radovima. </p>\n\n\n\n    <p>Danas je Zavod za transfuziju krvi visokostručna, specijalizovana, savremena institucija.</p>\n\n\n\n    <p>Razvoj i osavremenjivanje Zavoda i njegov prelazak iz sporedne delatnosti u savremenu, visokospecijalizovanu službu zasnovanu\n      na naučnim osnovama, podrazumeva bezbedno i efikasno lečenje bolesnika u svim granama medicine.</p>\n\n\n\n  </blockquote>\n\n\n  <p class=\"card-group\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"http://www.transfuzijanis.rs/slike/galerija12/01.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Zgrada zavoda za transfuziju</p>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"http://www.transfuzijanis.rs/slike/galerija12/01.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Zgrada zavoda za transfuziju</p>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"http://www.transfuzijanis.rs/slike/galerija12/01.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Zgrada zavoda za transfuziju</p>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"http://www.transfuzijanis.rs/slike/galerija12/01.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Zgrada zavoda za transfuziju</p>\n      </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/zavod-informacije/zavod-informacije.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/zavod-informacije/zavod-informacije.component.ts ***!
  \******************************************************************/
/*! exports provided: ZavodInformacijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZavodInformacijeComponent", function() { return ZavodInformacijeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZavodInformacijeComponent = /** @class */ (function () {
    function ZavodInformacijeComponent() {
    }
    ZavodInformacijeComponent.prototype.ngOnInit = function () {
    };
    ZavodInformacijeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zavod-informacije',
            template: __webpack_require__(/*! ./zavod-informacije.component.html */ "./src/app/zavod-informacije/zavod-informacije.component.html"),
            styles: [__webpack_require__(/*! ./zavod-informacije.component.css */ "./src/app/zavod-informacije/zavod-informacije.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZavodInformacijeComponent);
    return ZavodInformacijeComponent;
}());



/***/ }),

/***/ "./src/app/zavod/zavod.component.css":
/*!*******************************************!*\
  !*** ./src/app/zavod/zavod.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n    margin-left:0px; \n    padding: 0px;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background-color: lightgray;\n}\n.nav-item {\n    padding: 0px;\n    \n}\na {\n  cursor: default;\n}\n#wrapper {\n    padding-left: 173px;\n    transition: all 0.4s ease 0s;\n    padding-right: 0px;\n    margin-right: 0px;\n    width: inherit - 173px;\n  }\n#sidebar-wrapper {\n    margin-left: -172.5px;\n    left: 172.5px;\n    width: 172.5px;\n    background: #CCC;\n    position: fixed;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 1000;\n    transition: all 0.4s ease 0s;\n  }\n#page-content-wrapper {\n    width: 100%;\n  }\n@media (max-width:400) {\n  \n      #wrapper {\n        padding-left: 0;\n      }\n  \n      #sidebar-wrapper {\n        left: 0;\n      }\n  \n      #wrapper.active {\n        position: relative;\n        left: 250px;\n      }\n  \n      #wrapper.active #sidebar-wrapper {\n        left: 250px;\n        width: 250px;\n        transition: all 0.4s ease 0s;\n      }\n  \n  }\n\n"

/***/ }),

/***/ "./src/app/zavod/zavod.component.html":
/*!********************************************!*\
  !*** ./src/app/zavod/zavod.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"sidebar-wrapper\">\n    <div class=\"col-xl-4 col-lg-8 sidebar\" id=\"sidebar\" role=\"navigation\">\n      <ul *ngIf=\"_prikazaniZavod > -1\" class=\"nav nav-tabs|pills\" id=\"nav1Id\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_listaZavoda[_prikazaniZavod].idZavoda }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_listaZavoda[_prikazaniZavod].drzava}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_listaZavoda[_prikazaniZavod].grad}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">{{_listaZavoda[_prikazaniZavod].adresa}}</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"_prikazaniZavod==-1\" class=\"nav nav-tabs|pills\" id=\"nav2Id\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" style=\"background-color: red\">IZABERI ZAVOD</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">IDZavoda</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Drzava</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Grad</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Adresa zavoda</a>\n        </li>\n      </ul>\n      <hr>\n      <ul class=\"nav nav-tabs|pills\">\n        <li class=\"nav-item\">\n          <a (click)=\"saveClickHistory($event)\" class=\"nav-link active\" data-toggle=\"collapse\" href=\"#listaNovosti\"\n             role=\"button\" aria-expanded=\"false\"\n             aria-controls=\"listaNovosti\">\n            Novosti\n          </a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link active\">Dogadjaji</a>  &lt;!&ndash; treba da se otvore informacije kad se pritisne &ndash;&gt;-->\n        <!--</li>-->\n        <li class=\"nav-item\">\n          <a (click)=\"saveClickHistory($event)\" class=\"nav-link active\" data-toggle=\"collapse\"\n             href=\"#informacijeComponent\" role=\"button\" aria-expanded=\"false\"\n             aria-controls=\"informacijeComponent\">\n            Informacije\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Posalji poruku</a> <!-- treba da se otvore informacije kad se pritisne -->\n        </li>\n        <hr>\n\n        <!--ZAVODI         SU        OVDE      -->\n\n        <li *ngFor=\"let _zavod of _listaZavoda\" class=\"nav-item\">\n          <a class=\"nav-link active\" (click)=\"prikaziOZavodu(_zavod)\">{{_zavod.naziv}}</a>\n          <!-- treba da se otvore informacije kad se pritisne -->\n        </li>\n      </ul>\n\n      <p>\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#izborZavodaForm\"\n                aria-expanded=\"false\" aria-controls=\"izborZavodaForm\">Dodatni izbor zavoda\n        </button>\n      </p>\n      <div class=\"collapse\" id=\"izborZavodaForm\">\n        <div class=\"card card-body\">\n          <app-pretraga-zavod></app-pretraga-zavod>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"page-content-wrapper\">\n    <div class=\"page-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <div class=\"collapse\" id=\"listaNovosti\">\n              <div class=\"card card-body\">\n                <app-lista-novosti [_listaNovosti]=\"_listaPostova\"></app-lista-novosti>\n              </div>\n            </div>\n\n            <div class=\"collapse\" id=\"informacijeComponent\">\n              <div class=\"card card-body\">\n                <!-- <app-zavod-informacije></app-zavod-informacije> -->\n                <app-poruka></app-poruka>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zavod/zavod.component.ts":
/*!******************************************!*\
  !*** ./src/app/zavod/zavod.component.ts ***!
  \******************************************/
/*! exports provided: ZavodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZavodComponent", function() { return ZavodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts_manager_service/posts-manager.service */ "./src/app/posts_manager_service/posts-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZavodComponent = /** @class */ (function () {
    function ZavodComponent(_postsManager) {
        this._postsManager = _postsManager;
        this._listaZavoda = [];
        this._listaPostova = [];
        this._prikazaniZavod = -1;
        this._activeTab = null;
    }
    ZavodComponent.prototype.loadZavodi = function () {
        var storedZavodi = localStorage.getItem("zavodiStorage");
        var _this = this;
        if (storedZavodi != null) {
            console.log("reading from storage");
            console.log(storedZavodi);
            this._listaZavoda = JSON.parse(storedZavodi);
        }
        else {
            console.log("loading zavodi from server");
            this._postsManager.getZavodi().subscribe(function (data) {
                _this._listaZavoda = data;
            }, function (err) {
                console.log("Greska pri pribavljanju zavoda sa servera");
                console.log(err);
            }, function () {
                var lastPrikazaniZavod = _this._postsManager.getLastPrikazaniZavod();
                if (lastPrikazaniZavod > -1) {
                    _this._prikazaniZavod = lastPrikazaniZavod;
                    _this.loadNovostiForZavod();
                }
            });
        }
    };
    ZavodComponent.prototype.ngOnInit = function () {
        this.loadZavodi();
    };
    ZavodComponent.prototype.saveClickHistory = function (event) {
        if (this._activeTab === event.target) {
            this._activeTab = null;
        }
        else {
            if (this._activeTab != null)
                this._activeTab.click();
            this._activeTab = event.target;
        }
    };
    ZavodComponent.prototype.loadNovostiForZavod = function () {
        var storedNovosti = localStorage.getItem("novostiZavod" + this._listaZavoda[this._prikazaniZavod].idZavoda);
        if (storedNovosti != null) {
            console.log("loading novosti from storage");
            this._listaPostova = JSON.parse(storedNovosti);
            console.log(this._listaPostova);
        }
        else {
            this.getNextPosts(3);
        }
    };
    ZavodComponent.prototype.getNextPosts = function (count) {
        var _this = this;
        var drugaVrednost = parseInt(_this._lastPostIndexZavod) + count;
        console.log("Druga vrednsot je: " + drugaVrednost);
        console.log("Id je : " + this._listaZavoda[this._prikazaniZavod].idZavoda);
        this._postsManager.getNextPostsZavod(this._lastPostIndexZavod, drugaVrednost, this._listaZavoda[this._prikazaniZavod].idZavoda).subscribe(function (data) {
            console.log(data);
            _this._listaPostova = _this._listaPostova.concat(data);
            _this._postsManager.saveLastPostIndexZavod(_this._lastPostIndexZavod, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
            _this._postsManager.savePostsZavod(data, _this._listaZavoda[_this._prikazaniZavod].idZavoda);
        }, function (err) {
            console.log("Error in getting posts for zavod");
            console.log(err);
        });
    };
    ZavodComponent.prototype.prikaziOZavodu = function (trazeniZavod) {
        var stariPrikazaniZavod = this._prikazaniZavod;
        this._prikazaniZavod = this._listaZavoda.indexOf(trazeniZavod);
        this._postsManager.savePrikazaniZavod(this._prikazaniZavod);
        if (stariPrikazaniZavod != this._prikazaniZavod) {
            this._listaPostova = [];
            this._lastPostIndexZavod = this._postsManager.getLastPostIndexZavod(this._listaZavoda[this._prikazaniZavod].idZavoda);
            this.loadNovostiForZavod();
        }
    };
    ZavodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zavod',
            template: __webpack_require__(/*! ./zavod.component.html */ "./src/app/zavod/zavod.component.html"),
            styles: [__webpack_require__(/*! ./zavod.component.css */ "./src/app/zavod/zavod.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_manager_service_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__["PostsManagerService"]])
    ], ZavodComponent);
    return ZavodComponent;
}());



/***/ }),

/***/ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\n    display: flex;\n    flex-flow: row wrap;\n    width: 90%;\n    \n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n    float: left;\n}\n\n.img-rounder {\n    border-radius: 100%;\n}\n\n.card {\n    padding: 5px;\n    width: 30%;\n}\n\n.card-group {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <blockquote>\n    <div class=\"text\">\n\n      <h1>Znacaj davanja krvi</h1>\n\n      <h2>Трансфузијско лечење</h2>\n\n      <p>Трансфузија крви је незамењив терапијски метод који још увек нема адекватну алтернативу. Крв садржи специфичну супстанцу-хемоглобин\n        која веже кисеоник и преноси га у ткива помоћу незаменљивих црвених крвних зрнаца. Када болесник крвари губе се црвена\n        крвна зрнца и ниво хемоглобина се смањује што смањује пренос кисеоника и угрожава најосетљивија ткива као што су\n        мозак и срце. Крв је биолошки материјал а не класичан лек и зато нити може да се стандардизује, нити да се примењује\n        без велике опрезности. Лечење болесника код којих постоји несташица сопствене крви још увек није могуће без добровољних\n        давалаца крви.</p>\n\n      <h2>Безбедност крви за трансфузију</h2>\n\n      <p>Да би крв била безбедна за болесника који је прима, она не сме да садржи вирусе, узрочнике заразних болести као што\n        су жутица-хепатитис и СИДА. Зато се крв сваког даваоца, сваки пут када да крв, подвргава специјалном тестирању. Данашњи\n        тестови су толико усавршени да је ризик од преноса зараза путем крви скоро занемарљив.</p>\n\n      <p>Ипак, пошто се стално откривају нови вируси, који се могу пренети крвљу ни ово тестирање не обезбеђује апсолутну сигурност\n        болеснику који прима трансфузију.</p>\n\n      <h2>Стратегије смањења употребе крви</h2>\n\n      <p>Један од начина смањивања ризика од примене тудје крви је АУТОЛОГНА трансфузија. Код ове трансфузије давалац и прималац\n        су иста особа односно реч је о трансфузији сопствене крви. Болесник може, нпр. да пре планиране операције да своју\n        крв која ће бити сачувана и примењена, тј. враћена током операције, ако буде потребно.</p>\n\n      <p>Друга је могућност трансфузија сопствене крви која је прикупљена, пречишћена и враћена током саме операције. Овај метод\n        се назива \"интраоперативно спашавање крви\" и захтева употребу специјалних апарата. Треба знати да се ова врста трансфузије\n        не примењује код малокрвних особа.</p>\n\n      <p>У рестриктивну стратегију трансфузије спада и примена лекова који подстичу производњу црвених крвних зрнаца. Ови нови,\n        скупи лекови, су права замена за трансфузије крви у анемичних болесника, поготово оних који су на хемодијализи.</p>\n\n      <p>Данас се, током неких великих операција на срцу, користе, такође, и специјални лекови који регулишу процес згрушавања\n        крви. Њихова примена има за циљ да спречи претерано крварење болесника током операције и тиме смањи потребу за трансфузијама\n        крви.\n      </p>\n\n      <h2>Заменици крви</h2>\n\n      <p>Већ годинама научници трагају за супстанцама које, као људски еритроцити, могу да преносе кисеоник, а нису ризичне\n        за болесника. До данас су пронађене две супстанце са таквим жељеним потенцијалом. Једна од њих је чист хемоглобин,\n        а друга је једињење које се назива перфлуорокарбон. Ови препарати се непрестано усавршавају и унапређују и данас\n        већ постоји четврта генерација хемоглобинских препарата и друга генерација перфлуорокарбона.</p>\n\n      <p>Прва генерација препарата хемоглобина се производила из престарелих људских еритроцита. У другој генерацији хемоглобин\n        је био високо пречишћен и потицао је из говеђе крви. У трећој генерацији уведене су желатинозне партикуле које су\n        обмотавале молекуле хемоглобина имитирајући еритроците. Последња генерација хемоглобина се производи генетским инжињерингом\n        уз помоћ примитивних ћелија бактерија и биљака, које служе као мале фабрике. Иако су ови последњи препарати потпуно\n        безбедни и ефикасни у преносу кисеоника код болесника који су нагло искрварили њихова клиничка примена још није одобрена\n        ни у једној западној земљи. Једина земља у којој је 2001. године одобрена примена једног комерцијалног препарата\n        говеђег хемоглобина је Јужна Африка.</p>\n\n      <p>Други заменици за крв су перфлуорокарбони (ПФЦ) односно специјална једињења у којима се кисеоник изванредно раствара\n        те тако лако преноси ткивима. И они, према клиничком искуству имају своја ограничења у примени. За сада је једино\n        руско Министарство здравља одобрило њихову употребу..</p>\n\n      <h2>Најновије откриће</h2>\n\n      <p>Дански истраживачки тим је 1. априла 2007. године објавио откриће две врсте ензима који могу да еритроците крвних група\n        А и Б претворе у еритроците крвне групе О. Овај проналазак је значајан јер се О крвна група може сматрати универзалном\n        и као таква користити у случајевима дисбаланса између постојећих резерви крви и потреба болесника. Иначе, прва истраживања\n        у овој области су почела још 1980. године.</p>\n\n\n\n    </div>\n\n  </blockquote>\n\n\n  <div class=\"page_width\">\n    <ul>\n      <li>\n        <div class=\"images\" style=\"width: 131px;clear: left; float: left; margin-right: 10px\">\n          <img src=\"http://www.nbti.org.rs/upload/images/banner_rdks.gif\">\n        </div>\n      </li>\n      <li>\n        <div class=\"images\" style=\"width: 141px;clear: left; float: left; margin-right: 10px\">\n          <img src=\"http://www.nbti.org.rs/upload/images/banner_crveni-krst.gif\">\n        </div>\n      </li>\n    </ul>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ZnacajDavanjaKrviFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZnacajDavanjaKrviFormComponent", function() { return ZnacajDavanjaKrviFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZnacajDavanjaKrviFormComponent = /** @class */ (function () {
    function ZnacajDavanjaKrviFormComponent() {
    }
    ZnacajDavanjaKrviFormComponent.prototype.ngOnInit = function () {
    };
    ZnacajDavanjaKrviFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-znacaj-davanja-krvi-form',
            template: __webpack_require__(/*! ./znacaj-davanja-krvi-form.component.html */ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.html"),
            styles: [__webpack_require__(/*! ./znacaj-davanja-krvi-form.component.css */ "./src/app/znacaj-davanja-krvi-form/znacaj-davanja-krvi-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZnacajDavanjaKrviFormComponent);
    return ZnacajDavanjaKrviFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pereca/Documents/web/BM2000/BM/AngularApp/ngApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map