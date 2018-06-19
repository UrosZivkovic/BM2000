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
/* harmony import */ var _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./korisnik2/korisnik2.component */ "./src/app/korisnik2/korisnik2.component.ts");
/* harmony import */ var _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zavod/zavod.component */ "./src/app/zavod/zavod.component.ts");
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
        component: _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_6__["ZavodComponent"]
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
        component: _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_5__["Korisnik2Component"]
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

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 50px\">\n    <!-- <nav class=\"navbar navbar\" style=\"margin: 0px\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n          aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/\">BloodMaster2000</a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\">\n            <a routerLink=\"/home\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"active\">\n            <a routerLink=\"/show_posts\">Vesti\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        </ul>\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Trazi</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\">\n              <a *ngIf=\"_authService.getUserType()=='zaposleni'\" routerLink=\"/login\">Nalozi\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <li class=\"active\">\n              <a *ngIf=\"_authService.getUserType()=='zaposleni'\" routerLink=\"/show_posts\">Postovi\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n          </ul>\n\n          <li>\n            <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/profil\" routerLinkActive=\"active\">Profil</a>\n          </li>\n\n          <li>\n            <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">\n              <span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n          </li>\n          <li>\n            <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n          </li>\n          <li>\n            <a style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\">\n              <span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav> -->\n\n\n\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                  aria-expanded=\"false\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" routerLink=\"/\">BloodMaster2000</a>\n              </div>\n\n              <!-- Collect the nav links, forms, and other content for toggling -->\n              <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                  <li class=\"active\">\n                    <a routerLink=\"/home\">Home\n                      <span class=\"sr-only\">(current)</span>\n                    </a>\n                  </li>\n                  <li class=\"active\">\n                    <a routerLink=\"/show_posts\">Vesti\n                      <span class=\"sr-only\">(current)</span>\n                    </a>\n                  </li>\n                </ul>\n                <form class=\"navbar-form navbar-left\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-default\">Trazi</button>\n                </form>\n                <ul class=\"nav navbar-nav navbar-right\">\n\n                  <!-- Upravljanje nalozima i upravljanje obavestenjima -->\n                  <ul class=\"nav navbar-nav\">\n                    <li class=\"active\">\n                      <a *ngIf=\"_authService.getUserType()=='zaposleni'\" routerLink=\"/login\">Nalozi\n                        <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li>\n                    <li class=\"active\">\n                      <a *ngIf=\"_authService.getUserType()=='zaposleni'\" routerLink=\"/show_posts\">Postovi\n                        <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li>\n                  </ul>\n\n                  <li>\n                    <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/profil\" routerLinkActive=\"active\">Profil</a>\n                  </li>\n\n                  <li>\n                    <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">\n                      <span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n                  </li>\n                  <li>\n                    <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n                  </li>\n                  <li>\n                    <a style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\">\n                      <span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n                  </li>\n                </ul>\n              </div>\n        </div>\n      </nav>\n  </div>\n\n  <div>\n    <!--<app-zavod></app-zavod>-->\n     <router-outlet></router-outlet>\n  </div>\n"

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
/* harmony import */ var _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./korisnik2/korisnik2.component */ "./src/app/korisnik2/korisnik2.component.ts");
/* harmony import */ var _sadrzaj_korisnika_sadrzaj_korisnika_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sadrzaj-korisnika/sadrzaj-korisnika.component */ "./src/app/sadrzaj-korisnika/sadrzaj-korisnika.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















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
                _korisnik2_korisnik2_component__WEBPACK_IMPORTED_MODULE_18__["Korisnik2Component"],
                _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_16__["ZavodComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _vest_vest_component__WEBPACK_IMPORTED_MODULE_13__["VestComponent"],
                _sadrzaj_korisnika_sadrzaj_korisnika_component__WEBPACK_IMPORTED_MODULE_19__["SadrzajKorisnikaComponent"]
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
        localStorage.removeItem("loggedUserData");
        localStorage.removeItem("userType");
        this._router.navigate(['/home']);
    };
    AuthService.prototype.getUserType = function () {
        return localStorage.getItem("userType");
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

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n    width:  100%;\n    height: inherit;\n}\nbutton {\n    width:  30%;\n    height: inherit;\n    margin: 3.333333%;\n}\n@media (max-width: 600px) {\n    [class*=\"btn-\"] {\n        width: 100%;\n        margin: 10px;\n        box-sizing: border-box;\n        padding: 0;\n    }   \n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-xl-4 col-offset-8 centered\">\n    <div class=\"btn-group\" role=\"group\" style=\"height: 30vh\">\n      <button type=\"button\" class=\"btn btn-light\" routerLink=\"/izborZavoda\" style=\"border-radius: 20%\">Zavod</button>\n      <button type=\"button\" class=\"btn btn-light\" routerLink=\"/profil\" (click)=\"clickOnKorisnikHandler()\" style=\"border-radius: 20%\">Korisnik</button>\n      <button type=\"button\" class=\"btn btn-light\" style=\"border-radius: 20%\">Informacije</button>\n    </div>\n  </div>\n</div>\n"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "#sidebar {\n    margin-left:0px; \n    padding: 0px;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background-color: lightgray;\n}\n.nav-item {\n    padding: 0px;\n    \n}\na {\n  cursor: default;\n}\n#wrapper {\n    padding-left: 173px;\n    transition: all 0.4s ease 0s;\n    padding-right: 0px;\n    margin-right: 0px;\n    width: inherit - 173px;\n  }\n#sidebar-wrapper {\n    margin-left: -172.5px;\n    left: 172.5px;\n    width: 172.5px;\n    background: #CCC;\n    position: fixed;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 1000;\n    transition: all 0.4s ease 0s;\n  }\n#page-content-wrapper {\n    width: 100%;\n  }\n@media (max-width:400) {\n  \n      #wrapper {\n        padding-left: 0;\n      }\n  \n      #sidebar-wrapper {\n        left: 0;\n      }\n  \n      #wrapper.active {\n        position: relative;\n        left: 250px;\n      }\n  \n      #wrapper.active #sidebar-wrapper {\n        left: 250px;\n        width: 250px;\n        transition: all 0.4s ease 0s;\n      }\n  \n  }\n\n"

/***/ }),

/***/ "./src/app/korisnik2/korisnik2.component.html":
/*!****************************************************!*\
  !*** ./src/app/korisnik2/korisnik2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n  <div class = \"col-xs-6 col-lg-8 sidebar\" id=\"sidebar\" role=\"navigation\">\n    <ul class=\"nav nav-tabs|pills\" id=\"navId\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Ime</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Prezime</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Email</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Krvna grupa</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Broj davanja</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Datum poslednjeg davanja</a>\n      </li>\n      <hr>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</div> -->\n\n<div id=\"wrapper\">\n  <div id=\"sidebar-wrapper\">\n    <div class=\"col-xl-4 col-lg-8 sidebar\" id=\"sidebar\" role=\"navigation\">\n      <ul class=\"nav nav-tabs|pills\" id=\"navId\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Ime</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Prezime</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Email</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Krvna grupa</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Broj davanja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Datum poslednjeg davanja</a>\n        </li>\n        <hr>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaPracenimNovostima\"\n          (click)=\"saveClickHistory($event)\">Novosti</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaProcitanimObavestenjima\"\n          (click)=\"saveClickHistory($event)\">Procitana obavestenja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaNeprocitanimObavestenjima\"\n          (click)=\"saveClickHistory($event)\">Neprocitana obavestenja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijeDavanja\"\n          (click)=\"saveClickHistory($event)\">Istorija davanja</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijePrisustvaDogadjajima\"\n          (click)=\"saveClickHistory($event)\">Moji dogadjaji</a>\n        </li>\n        <hr>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div id=\"page-content-wrapper\">\n    <div class=\"page-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaPracenimNovostima\">\n                  <div class=\"card card-body\">\n        \n                    <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _novost of _novosti\">\n                      <h2 class=\"card-title\">{{_novost.naslov}}</h2>\n                      <p class=\"card-text\">{{_novost.sadrzaj}}</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n                    </div>\n        \n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaProcitanimObavestenjima\">\n                  <div class=\"card card-body\">\n        \n                    <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.procitana\">\n                      <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n                      <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n                    </div>\n        \n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabSaNeprocitanimObavestenjima\">\n                  <div class=\"card card-body\">\n        \n                    <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.neprocitana\">\n                      <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n                      <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n                    </div>\n        \n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabIstorijeDavanja\">\n                  <div class=\"card card-body\">\n                    <h3 *ngFor=\"let _datum of _user.istorijaDavanja\">\n                      {{_datum}}\n                    </h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"collapse multi-collapse\" id=\"tabIstorijePrisustvaDogadjajima\">\n                  <div class=\"card card-body\">\n                    istorija prisustvovanja dogadjajima\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- <div class=\"wrapper\">\n\n    <nav id=\"sidebar\">\n\n        <div class=\"sidebar-header\">\n            <h3>Collapsible Sidebar</h3>\n        </div>\n\n\n        <ul class=\"list-unstyled components\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">About</a></li>\n\n            <li>\n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Pages</a>\n                <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n                    <li><a href=\"#\">Page</a></li>\n                    <li><a href=\"#\">Page</a></li>\n                    <li><a href=\"#\">Page</a></li>\n                </ul>\n\n            <li><a href=\"#\">Portfolio</a></li>\n            <li><a href=\"#\">Contact</a></li>\n        </ul>\n    </nav>\n\n</div>\n\n<script>\n  $(document).ready(function () {\n\n$('#sidebarCollapse').on('click', function () {\n    $('#sidebar').toggleClass('active');\n});\n\n});\n</script> -->"

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
    }
    Korisnik2Component.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._authService.loggedIn()) {
            this._router.navigate(['/login']);
        }
        else {
            this._user = JSON.parse(localStorage.getItem("loggedUserData"));
            this._novosti = JSON.parse(localStorage.getItem("_pracene_novosti"));
            // ukoliko podaci jos nisu pribavljeni (prvi put posecuje stranicu profil)
            if (this._novosti == null) {
                this._postsManager.getUserContent_Novosti(this._user._id).subscribe(function (data) {
                    _this._novosti = data;
                }, function (err) {
                    console.log("ERROR");
                    console.log(err);
                });
                // save novosti to local storage
                this._postsManager.savePraceneNovostiToLocalStorage(this._novosti);
            }
            this._obavestenja = JSON.parse(localStorage.getItem("_obavestenja"));
            // ukoliko podaci jos nisu pribavljeni (prvi put posecuje stranicu profil)
            if (this._novosti == null) {
                this._postsManager.getUserContent_Obavestenja(this._user._id).subscribe(function (data) {
                    _this._obavestenja = data;
                }, function (err) {
                    console.log("ERROR");
                    console.log(err);
                });
                // save obavestenja to local storage
                this._postsManager.saveObavestenjaToLocalStorage(this._obavestenja);
            }
        }
    };
    Korisnik2Component.prototype.saveClickHistory = function (event) {
        // ako nije prvi klik klikni na poslednje dugme
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

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-froup\">\n            <label for=\"\">Email</label>\n            <input [(ngModel)]=\"loginUserData.email\" name=\"email\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label   for=\"\">Password</label>\n            <input [(ngModel)]=\"loginUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n\n          </div>\n          <button (click)=\"loginUser()\" type=\"button\" class=\"btn btn-success float-right\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">BloodMaster2000</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n          <li><a href=\"#\">Link</a></li>\n        </ul>\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n          <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\" >Register</a></li>\n          <li><a style= \"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\">Logout</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>"

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
        var postsFromStorage = localStorage.getItem("currentPosts");
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
        localStorage.setItem("currentPosts", JSON.stringify(storedArray.concat(newPosts)));
    };
    PostsManagerService.prototype.getLastPostIndex = function () {
        var storedValue = localStorage.getItem("lastPostIndex");
        if (storedValue != null)
            return parseInt(storedValue);
        else
            return 0;
    };
    PostsManagerService.prototype.saveLastPostIndex = function (index) {
        localStorage.setItem("lastPostIndex", index);
    };
    PostsManagerService.prototype.getUserContent_Novosti = function (userId) {
        console.log("Sending request for pracene_novosti on: " + this._userContent_NovostiUrl);
        return this._http.post(this._userContent_NovostiUrl, { id: userId });
    };
    PostsManagerService.prototype.getUserContent_Obavestenja = function (userId) {
        console.log("Sending request for pracene_obavestenja on: " + this._userContent_ObavestenjaUrl);
        return this._http.post(this._userContent_ObavestenjaUrl, { id: userId });
    };
    PostsManagerService.prototype.savePraceneNovostiToLocalStorage = function (novosti) {
    };
    PostsManagerService.prototype.saveObavestenjaToLocalStorage = function (obavestenja) {
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
            //localStorage.setItem('token',res.token);
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-xl-10 col-offset-6 centered\">\n    <div class=\"btn-group\" role=\"group\" style=\"height: 5vh\">\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaPracenimNovostima\"\n        (click)=\"saveClickHistory($event)\">Novosti\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaProcitanimObavestenjima\"\n        (click)=\"saveClickHistory($event)\">Procitana obavestenja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabSaNeprocitanimObavestenjima\"\n        (click)=\"saveClickHistory($event)\">Neprocitana obavestenja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijeDavanja\"\n        (click)=\"saveClickHistory($event)\">Istorija davanja\n      </button>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#tabIstorijePrisustvaDogadjajima\"\n        (click)=\"saveClickHistory($event)\">Moji dogadjaji\n      </button>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaPracenimNovostima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _novost of _novosti\">\n              <h2 class=\"card-title\">{{_novost.naslov}}</h2>\n              <p class=\"card-text\">{{_novost.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaProcitanimObavestenjima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.procitana\">\n              <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n              <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabSaNeprocitanimObavestenjima\">\n          <div class=\"card card-body\">\n\n            <div class=\"col-lg-8 mx-auto\" *ngFor=\"let _obavestenje of _obavestenja.neprocitana\">\n              <h2 class=\"card-title\">{{_obavestenje.naslov}}</h2>\n              <p class=\"card-text\">{{_obavestenje.sadrzaj}}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabIstorijeDavanja\">\n          <div class=\"card card-body\">\n            <h3 *ngFor=\"let _datum of _user.istorijaDavanja\">\n              {{_datum}}\n            </h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"collapse multi-collapse\" id=\"tabIstorijePrisustvaDogadjajima\">\n          <div class=\"card card-body\">\n            istorija prisustvovanja dogadjajima\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.ipAddress = '192.168.131.135';
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
        return this.getFullServerAddress() + "/novosti/interval";
    };
    ServerConfigurationService.prototype.getUserContent_ObavestenjaUrl = function () {
        return this.getFullServerAddress() + "/users/getObavestenja";
    };
    ServerConfigurationService.prototype.getUserContent_NovostiUrl = function () {
        return this.getFullServerAddress() + "/users/getNovosti";
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

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto\" *ngFor=\"let vest of _vesti\">\n        <h2 class=\"card-title\">{{vest.naslov}}</h2>\n        <p class=\"card-text\">{{vest.sadrzaj}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n      </div>\n      <button (click)=\"dodajPostClick()\">Dodaj post</button>\n    </div>\n  </div>\n</section>\n"

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
        this._vesti = [];
        console.log("Component consturctor....");
        this._lastPostIndex = this._postsManager.getLastPostIndex();
        console.log("_lastPostIndex set to : " + this._lastPostIndex);
    }
    VestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var savedPosts = localStorage.getItem("currentPosts");
        console.log("INITIAL STORAGE STATE: \n" + savedPosts);
        if (savedPosts != null) {
            console.log("Loading posts from storage");
            this._vesti = JSON.parse(savedPosts);
        }
        else {
            console.log("Sending request for posts");
            this.getNextPosts(2);
        }
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

module.exports = "<div id=\"wrapper\">\n    <div id=\"sidebar-wrapper\">\n      <div class = \"col-xl-4 col-lg-8 sidebar\" id=\"sidebar\" role=\"navigation\">\n        <ul class=\"nav nav-tabs|pills\" id=\"navId\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">ID</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Drzava</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Grad</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Adresa</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Novosti</a>  <!-- treba da se otvore informacije kad se pritisne -->\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Dogadjaji</a>  <!-- treba da se otvore informacije kad se pritisne -->\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">Informacije</a> <!-- treba da se otvore informacije kad se pritisne -->\n          </li>\n        </ul>\n      </div>\n    </div>\n  <div id=\"page-content-wrapper\">\n      <div class=\"page-content\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <p>qwpdqwpdk</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n\n\n"

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
    function ZavodComponent() {
    }
    ZavodComponent.prototype.ngOnInit = function () {
    };
    ZavodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zavod',
            template: __webpack_require__(/*! ./zavod.component.html */ "./src/app/zavod/zavod.component.html"),
            styles: [__webpack_require__(/*! ./zavod.component.css */ "./src/app/zavod/zavod.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZavodComponent);
    return ZavodComponent;
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