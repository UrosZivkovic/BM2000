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
/* harmony import */ var _special_e_special_e_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-e/special-e.component */ "./src/app/special-e/special-e.component.ts");
/* harmony import */ var _normal_e_normal_e_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normal-e/normal-e.component */ "./src/app/normal-e/normal-e.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _vest_vest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vest/vest.component */ "./src/app/vest/vest.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
<<<<<<< HEAD
        // dodao bez / (sve su bez / )
        path: '',
        redirectTo: '/normal',
        pathMatch: 'full'
=======
        path: '',
        redirectTo: '/normal',
        pathMatch: "full"
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
    },
    {
        path: 'normal',
        component: _normal_e_normal_e_component__WEBPACK_IMPORTED_MODULE_3__["NormalEComponent"]
    },
    {
        path: 'special',
        component: _special_e_special_e_component__WEBPACK_IMPORTED_MODULE_2__["SpecialEComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'show_posts',
        component: _vest_vest_component__WEBPACK_IMPORTED_MODULE_7__["VestComponent"]
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

<<<<<<< HEAD
module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">BloodMaster2000</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"active\">\n          <a href=\"#\">Vesti\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </li>\n        <li>\n          <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </li>\n        <li>\n          <a style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"
=======
module.exports = "<nav class=\"navbar navbar-default\" style=\"margin-bottom: 0px\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">BloodMaster2000</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li class=\"active\"><a href=\"#\">Vesti <span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Trazi</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li><a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\" >Register</a></li>\n        <li><a style= \"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" class=\"nav-link\" (click)=\"_authService.logoutUser()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<div>\n  <router-outlet></router-outlet>\n  <app-korisnik></app-korisnik>\n</div>"
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714

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
/* harmony import */ var _special_e_special_e_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./special-e/special-e.component */ "./src/app/special-e/special-e.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
<<<<<<< HEAD
/* harmony import */ var _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./korisnik/korisnik.component */ "./src/app/korisnik/korisnik.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zavod/zavod.component */ "./src/app/zavod/zavod.component.ts");
=======
/* harmony import */ var _vest_vest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vest/vest.component */ "./src/app/vest/vest.component.ts");
/* harmony import */ var _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./korisnik/korisnik.component */ "./src/app/korisnik/korisnik.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
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
                _special_e_special_e_component__WEBPACK_IMPORTED_MODULE_9__["SpecialEComponent"],
<<<<<<< HEAD
                _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_14__["KorisnikComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _zavod_zavod_component__WEBPACK_IMPORTED_MODULE_16__["ZavodComponent"]
=======
                _vest_vest_component__WEBPACK_IMPORTED_MODULE_14__["VestComponent"],
                _korisnik_korisnik_component__WEBPACK_IMPORTED_MODULE_15__["KorisnikComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"]
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
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
        this._router.navigate(['/normal']);
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
        console.log("\n\n\n\n\n GETTING NORMAL EVENTS \n\n\n\n\n");
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

<<<<<<< HEAD
module.exports = "<!-- \n<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n</div> -->\n\n<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->\n\n<div class=\"container-fluid\">\n    <div class=\"row row-offcanvas row-offcanvas-left\">\n        <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\" style=\"margin: 0px; padding: 0px;\">\n            <div class=\"sidebar-nav\">\n                <ul class=\"nav\" style=\"background-color: lightgray; height: 100vh; width: 172.25px\">\n                    <li class=\"active\"><a href=\"#\">Link</a></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li class=\"nav-divider\"></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li class=\"nav-divider\"></li>\n                    <li><a href=\"#\">Link</a></li>\n                    <li><a href=\"#\">Link</a></li>\n                </ul>\n            </div>\n            <!--/.well -->\n        </div>\n        <!--/span-->\n\n        <div>\n            <ul>\n                <li><h2>Ime</h2></li>\n                <li><h2>Prezime</h2></li>\n            </ul>\n        </div>\n    </div>\n    <!--/row-->\n\n    \n\n    <hr>\n</div>\n<!--/.container-->"
=======
module.exports = "<!-- \n<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n</div> -->\n\n<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->\n\n<div class=\"container-fluid\">\n  <div class=\"row row-offcanvas row-offcanvas-left\">\n      <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\" style=\"margin: 0px; padding: 0px;\">\n          <div class=\"sidebar-nav\">\n              <ul class=\"nav\" style=\"background-color: lightgray; height: 100vh; width: 172.25px\">\n                  <li class=\"active\"><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li class=\"nav-divider\"></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li class=\"nav-divider\"></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n              </ul>\n          </div>\n          <!--/.well -->\n      </div>\n      <!--/span-->\n\n      <div>\n          <ul>\n              <li><h2>Ime</h2></li>\n              <li><h2>Prezime</h2></li>\n          </ul>\n      </div>\n  </div>\n  <!--/row-->\n\n  \n\n  <hr>\n</div>\n<!--/.container-->"
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714

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
    function KorisnikComponent() {
    }
    KorisnikComponent.prototype.ngOnInit = function () {
    };
    KorisnikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-korisnik',
            template: __webpack_require__(/*! ./korisnik.component.html */ "./src/app/korisnik/korisnik.component.html"),
            styles: [__webpack_require__(/*! ./korisnik.component.css */ "./src/app/korisnik/korisnik.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KorisnikComponent);
    return KorisnikComponent;
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
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/special']);
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
<<<<<<< HEAD
        console.log("\n\n\n SALJE SE ZAHTEV " + this._eventService.getEventsNormalUrl() + "\n\n\n\n");
        var _this = this;
        this._eventService.getNormalEvents().subscribe(function (res) {
            console.log("\n\n\n\n\n RESOURCES RECEIVED \n\n\n\n\n");
            console.log(res);
=======
        console.log("SALJE SE ZAHTEV " + this._eventService.getEventsNormalUrl());
        var _this = this;
        this._eventService.getNormalEvents().subscribe(function (res) {
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
            _this.events = res;
        }, function (err) {
            console.log("\n\n\n\n\n GRESKA:      " + err + "\n\n\n\n\n\n");
        });
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

/***/ "./src/app/posts_manager_service/fake-posts-manager.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/posts_manager_service/fake-posts-manager.service.ts ***!
  \*********************************************************************/
/*! exports provided: FakePostsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakePostsManagerService", function() { return FakePostsManagerService; });
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

var FakePostsManagerService = /** @class */ (function () {
    function FakePostsManagerService() {
        this._postsList = [
            {
                idZavoda: "2",
                naslov: "Prvi post",
                sadrzaj: "E jbg sad, ovo je neki sadrzj",
                datum: "ima",
                ukratko: "bas kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            },
            {
                idZavoda: "1",
                naslov: "neki drugi post",
                sadrzaj: "ovo je neki lep sadrzj",
                datum: "nema",
                ukratko: "bas dosta kratko"
            }
        ];
    }
    FakePostsManagerService.prototype.getAllPosts = function () {
        return this._postsList;
    };
    FakePostsManagerService.prototype.getNextPart = function (_lastPostIndex) {
        return this._postsList.slice(_lastPostIndex, _lastPostIndex + 2);
    };
    FakePostsManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FakePostsManagerService);
    return FakePostsManagerService;
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
            // localStorage.setItem('token',res.token)
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
        this.ipAddress = "192.168.0.172";
        // 192.168.0.172
        this.portNum = "3030";
    }
    ServerConfigurationService.prototype.getFullServerAddress = function () {
        return "http://" + this.ipAddress + ":" + this.portNum;
    };
    ServerConfigurationService.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    ServerConfigurationService.prototype.getPortNum = function () {
        return this.portNum;
    };
    ServerConfigurationService.prototype.getLoginUrl = function () {
        return this.getFullServerAddress() + "/users/login";
    };
    ServerConfigurationService.prototype.getRegisterUrl = function () {
        return this.getFullServerAddress() + "/users/register";
    };
    ServerConfigurationService.prototype.getEventsNormalUrl = function () {
        return this.getFullServerAddress() + "/products/normal";
    };
    ServerConfigurationService.prototype.getEventsSpecialUrl = function () {
        return this.getFullServerAddress() + "/products/special";
    };
<<<<<<< HEAD
=======
    ServerConfigurationService.prototype.getAllPostsUrl = function () {
        return this.getFullServerAddress() + "/novosti/all";
    };
    ServerConfigurationService.prototype.getNextPartOfPostsUrl = function () {
        // podesi novu rutu na serveru
        return this.getFullServerAddress() + "/novosti/next";
    };
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
    ServerConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServerConfigurationService);
    return ServerConfigurationService;
}());



/***/ }),

/***/ "./src/app/special-e/special-e.component.css":
/*!***************************************************!*\
  !*** ./src/app/special-e/special-e.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/special-e/special-e.component.html":
/*!****************************************************!*\
  !*** ./src/app/special-e/special-e.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let event of specialEvents\">\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{event.name}}</h5>\n        <p class=\"card-text\">{{event.price}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Buy Tickets</a>\n      </div>\n     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/special-e/special-e.component.ts":
/*!**************************************************!*\
  !*** ./src/app/special-e/special-e.component.ts ***!
  \**************************************************/
/*! exports provided: SpecialEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialEComponent", function() { return SpecialEComponent; });
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


var SpecialEComponent = /** @class */ (function () {
    function SpecialEComponent(_eventService) {
        this._eventService = _eventService;
        this.specialEvents = [];
    }
    SpecialEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getSpecialEvents().subscribe(function (res) { return _this.specialEvents = res; }, function (err) { return console.log(err); });
    };
    SpecialEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-special-e',
            template: __webpack_require__(/*! ./special-e.component.html */ "./src/app/special-e/special-e.component.html"),
            styles: [__webpack_require__(/*! ./special-e.component.css */ "./src/app/special-e/special-e.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], SpecialEComponent);
    return SpecialEComponent;
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

<<<<<<< HEAD
/***/ "./src/app/zavod/zavod.component.css":
/*!*******************************************!*\
  !*** ./src/app/zavod/zavod.component.css ***!
  \*******************************************/
=======
/***/ "./src/app/vest/vest.component.css":
/*!*****************************************!*\
  !*** ./src/app/vest/vest.component.css ***!
  \*****************************************/
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

<<<<<<< HEAD
/***/ "./src/app/zavod/zavod.component.html":
/*!********************************************!*\
  !*** ./src/app/zavod/zavod.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  zavod works!\n</p>\n"

/***/ }),

/***/ "./src/app/zavod/zavod.component.ts":
/*!******************************************!*\
  !*** ./src/app/zavod/zavod.component.ts ***!
  \******************************************/
/*! exports provided: ZavodComponent */
=======
/***/ "./src/app/vest/vest.component.html":
/*!******************************************!*\
  !*** ./src/app/vest/vest.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto\" *ngFor=\"let vest of _vesti\">\n        <h2 class=\"card-title\">{{vest.naslov}}</h2>\n        <p class=\"card-text\">{{vest.ukratko}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Procitaj jos</a>\n      </div>\n      <button (click)=\"dodajPostClick()\">Dodaj post</button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/vest/vest.component.ts":
/*!****************************************!*\
  !*** ./src/app/vest/vest.component.ts ***!
  \****************************************/
/*! exports provided: VestComponent */
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZavodComponent", function() { return ZavodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VestComponent", function() { return VestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_manager_service_fake_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts_manager_service/fake-posts-manager.service */ "./src/app/posts_manager_service/fake-posts-manager.service.ts");
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

<<<<<<< HEAD
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
=======

var VestComponent = /** @class */ (function () {
    function VestComponent(_postsManager) {
        this._postsManager = _postsManager;
        this._vesti = [];
        this._lastPostIndex = 0;
    }
    VestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._vesti = this._vesti.concat(this._postsManager.getNextPart(this._lastPostIndex));
        console.log(this._vesti);
        // this._postsManager.getNextPart(this._lastPostIndex).subscribe(
        //   function (res) {
        //     _this._vesti = res;
        //   }
        //   , function (err) {
        //     console.log(err);
        //   });
    };
    VestComponent.prototype.dodajPostClick = function () {
        var tempArray = this._postsManager.getNextPart(this._lastPostIndex);
        this._lastPostIndex += tempArray.length;
        this._vesti = this._vesti.concat(tempArray);
    };
    VestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vest',
            template: __webpack_require__(/*! ./vest.component.html */ "./src/app/vest/vest.component.html"),
            styles: [__webpack_require__(/*! ./vest.component.css */ "./src/app/vest/vest.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_manager_service_fake_posts_manager_service__WEBPACK_IMPORTED_MODULE_1__["FakePostsManagerService"]])
    ], VestComponent);
    return VestComponent;
>>>>>>> ab8452b5e568de781201f22114cf54f1b2f73714
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