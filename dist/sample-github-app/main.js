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

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/app.config.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/app.config.ts ***!
  \****************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.DATAPERPAGE = '50';
    AppConfig.SERVICE = {
        'USER_SEARCH': 'search/users',
        'REPO_SEARCH': 'search/repositories'
    };
    return AppConfig;
}());

;


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // for testing currently not using 
                //  this.authenticationService.logout();
                //   location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/http-error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/http-error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/_helpers/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, HttpErrorHandler, MessageService, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/_helpers/http-error-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return _http_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/_helpers/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]; });

/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ "./src/app/_helpers/app.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return _app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]; });








/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.mercy-preview+json'
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        localStorage.setItem('currentUser', JSON.stringify(username));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(username);
        /* Actual code should be like this  */
        /*
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
        })); */
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, AlertService, AuthenticationService, RepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repo.service */ "./src/app/_services/repo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepoService", function() { return _repo_service__WEBPACK_IMPORTED_MODULE_3__["RepoService"]; });







/***/ }),

/***/ "./src/app/_services/repo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/repo.service.ts ***!
  \*******************************************/
/*! exports provided: RepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoService", function() { return RepoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/app.config */ "./src/app/_helpers/app.config.ts");
/* harmony import */ var _helpers_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/http-error-handler.service */ "./src/app/_helpers/http-error-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RepoService = /** @class */ (function () {
    function RepoService(http, httpErrorHandler) {
        this.http = http;
        this.repoInfo = [];
        this.handleError = httpErrorHandler.createHandleError('RepoService');
    }
    RepoService.prototype.getAllRepos = function (query, page) {
        var pageSize = _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].DATAPERPAGE;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].SERVICE.REPO_SEARCH;
        var obj = {
            'per_page': pageSize,
            'page': page,
            'q': query
        };
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: obj });
        var options = { params: httpParams };
        var a = {
            "total_count": 439064,
            "incomplete_results": false,
            "items": [
                {
                    "id": 24195339,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyNDE5NTMzOQ==",
                    "name": "angular",
                    "full_name": "angular/angular",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular",
                    "description": "One framework. Mobile & desktop.",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular",
                    "forks_url": "https://api.github.com/repos/angular/angular/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular/deployments",
                    "created_at": "2014-09-18T16:12:01Z",
                    "updated_at": "2018-10-31T05:52:01Z",
                    "pushed_at": "2018-10-31T00:58:42Z",
                    "git_url": "git://github.com/angular/angular.git",
                    "ssh_url": "git@github.com:angular/angular.git",
                    "clone_url": "https://github.com/angular/angular.git",
                    "svn_url": "https://github.com/angular/angular",
                    "homepage": "https://angular.io",
                    "size": 92877,
                    "stargazers_count": 42163,
                    "watchers_count": 42163,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": false,
                    "has_pages": false,
                    "forks_count": 10595,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 2570,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "javascript",
                        "pwa",
                        "typescript",
                        "web",
                        "web-framework",
                        "web-performance"
                    ],
                    "forks": 10595,
                    "open_issues": 2570,
                    "watchers": 42163,
                    "default_branch": "master",
                    "score": 149.4488
                },
                {
                    "id": 460078,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0NjAwNzg=",
                    "name": "angular.js",
                    "full_name": "angular/angular.js",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular.js",
                    "description": "AngularJS - HTML enhanced for web apps!",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular.js",
                    "forks_url": "https://api.github.com/repos/angular/angular.js/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular.js/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular.js/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular.js/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular.js/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular.js/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular.js/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular.js/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular.js/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular.js/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular.js/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular.js/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular.js/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular.js/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular.js/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular.js/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular.js/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular.js/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular.js/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular.js/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular.js/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular.js/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular.js/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular.js/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular.js/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular.js/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular.js/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular.js/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular.js/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular.js/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular.js/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular.js/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular.js/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular.js/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular.js/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular.js/deployments",
                    "created_at": "2010-01-06T00:34:37Z",
                    "updated_at": "2018-10-31T02:39:27Z",
                    "pushed_at": "2018-10-30T10:36:09Z",
                    "git_url": "git://github.com/angular/angular.js.git",
                    "ssh_url": "git@github.com:angular/angular.js.git",
                    "clone_url": "https://github.com/angular/angular.js.git",
                    "svn_url": "https://github.com/angular/angular.js",
                    "homepage": "https://angularjs.org",
                    "size": 99611,
                    "stargazers_count": 59222,
                    "watchers_count": 59222,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 29016,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 495,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 29016,
                    "open_issues": 495,
                    "watchers": 59222,
                    "default_branch": "master",
                    "score": 96.8323
                },
                {
                    "id": 26634362,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyNjYzNDM2Mg==",
                    "name": "angular",
                    "full_name": "OOP-Code-Bunny/angular",
                    "private": false,
                    "owner": {
                        "login": "OOP-Code-Bunny",
                        "id": 6986968,
                        "node_id": "MDQ6VXNlcjY5ODY5Njg=",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/6986968?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/OOP-Code-Bunny",
                        "html_url": "https://github.com/OOP-Code-Bunny",
                        "followers_url": "https://api.github.com/users/OOP-Code-Bunny/followers",
                        "following_url": "https://api.github.com/users/OOP-Code-Bunny/following{/other_user}",
                        "gists_url": "https://api.github.com/users/OOP-Code-Bunny/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/OOP-Code-Bunny/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/OOP-Code-Bunny/subscriptions",
                        "organizations_url": "https://api.github.com/users/OOP-Code-Bunny/orgs",
                        "repos_url": "https://api.github.com/users/OOP-Code-Bunny/repos",
                        "events_url": "https://api.github.com/users/OOP-Code-Bunny/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/OOP-Code-Bunny/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/OOP-Code-Bunny/angular",
                    "description": "所有angular学习过程中的代码",
                    "fork": false,
                    "url": "https://api.github.com/repos/OOP-Code-Bunny/angular",
                    "forks_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/forks",
                    "keys_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/teams",
                    "hooks_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/events",
                    "assignees_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/tags",
                    "blobs_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/subscription",
                    "commits_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/merges",
                    "archive_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/downloads",
                    "issues_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/OOP-Code-Bunny/angular/deployments",
                    "created_at": "2014-11-14T10:45:33Z",
                    "updated_at": "2018-10-19T02:56:57Z",
                    "pushed_at": "2015-05-24T10:34:20Z",
                    "git_url": "git://github.com/OOP-Code-Bunny/angular.git",
                    "ssh_url": "git@github.com:OOP-Code-Bunny/angular.git",
                    "clone_url": "https://github.com/OOP-Code-Bunny/angular.git",
                    "svn_url": "https://github.com/OOP-Code-Bunny/angular",
                    "homepage": null,
                    "size": 13394,
                    "stargazers_count": 336,
                    "watchers_count": 336,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 322,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 0,
                    "license": null,
                    "topics": [],
                    "forks": 322,
                    "open_issues": 0,
                    "watchers": 336,
                    "default_branch": "master",
                    "score": 92.71747
                },
                {
                    "id": 14539434,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxNDUzOTQzNA==",
                    "name": "angular",
                    "full_name": "scalyr/angular",
                    "private": false,
                    "owner": {
                        "login": "scalyr",
                        "id": 1189709,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjExODk3MDk=",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/1189709?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/scalyr",
                        "html_url": "https://github.com/scalyr",
                        "followers_url": "https://api.github.com/users/scalyr/followers",
                        "following_url": "https://api.github.com/users/scalyr/following{/other_user}",
                        "gists_url": "https://api.github.com/users/scalyr/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/scalyr/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/scalyr/subscriptions",
                        "organizations_url": "https://api.github.com/users/scalyr/orgs",
                        "repos_url": "https://api.github.com/users/scalyr/repos",
                        "events_url": "https://api.github.com/users/scalyr/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/scalyr/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/scalyr/angular",
                    "description": "Code to optimize AngularJS for complex pages",
                    "fork": false,
                    "url": "https://api.github.com/repos/scalyr/angular",
                    "forks_url": "https://api.github.com/repos/scalyr/angular/forks",
                    "keys_url": "https://api.github.com/repos/scalyr/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/scalyr/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/scalyr/angular/teams",
                    "hooks_url": "https://api.github.com/repos/scalyr/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/scalyr/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/scalyr/angular/events",
                    "assignees_url": "https://api.github.com/repos/scalyr/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/scalyr/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/scalyr/angular/tags",
                    "blobs_url": "https://api.github.com/repos/scalyr/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/scalyr/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/scalyr/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/scalyr/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/scalyr/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/scalyr/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/scalyr/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/scalyr/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/scalyr/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/scalyr/angular/subscription",
                    "commits_url": "https://api.github.com/repos/scalyr/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/scalyr/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/scalyr/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/scalyr/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/scalyr/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/scalyr/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/scalyr/angular/merges",
                    "archive_url": "https://api.github.com/repos/scalyr/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/scalyr/angular/downloads",
                    "issues_url": "https://api.github.com/repos/scalyr/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/scalyr/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/scalyr/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/scalyr/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/scalyr/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/scalyr/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/scalyr/angular/deployments",
                    "created_at": "2013-11-19T22:06:53Z",
                    "updated_at": "2018-10-15T05:37:04Z",
                    "pushed_at": "2018-05-20T13:14:49Z",
                    "git_url": "git://github.com/scalyr/angular.git",
                    "ssh_url": "git@github.com:scalyr/angular.git",
                    "clone_url": "https://github.com/scalyr/angular.git",
                    "svn_url": "https://github.com/scalyr/angular",
                    "homepage": null,
                    "size": 552,
                    "stargazers_count": 866,
                    "watchers_count": 866,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 189,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 14,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 189,
                    "open_issues": 14,
                    "watchers": 866,
                    "default_branch": "master",
                    "score": 91.2081
                },
                {
                    "id": 36891867,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzNjg5MTg2Nw==",
                    "name": "angular-cli",
                    "full_name": "angular/angular-cli",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular-cli",
                    "description": "CLI tool for Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular-cli",
                    "forks_url": "https://api.github.com/repos/angular/angular-cli/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular-cli/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular-cli/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular-cli/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular-cli/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular-cli/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular-cli/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular-cli/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular-cli/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular-cli/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular-cli/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular-cli/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular-cli/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular-cli/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular-cli/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular-cli/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular-cli/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular-cli/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular-cli/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular-cli/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular-cli/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular-cli/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular-cli/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular-cli/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular-cli/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular-cli/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular-cli/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular-cli/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular-cli/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular-cli/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular-cli/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular-cli/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular-cli/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular-cli/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular-cli/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular-cli/deployments",
                    "created_at": "2015-06-04T19:49:37Z",
                    "updated_at": "2018-10-31T05:39:30Z",
                    "pushed_at": "2018-10-31T06:16:19Z",
                    "git_url": "git://github.com/angular/angular-cli.git",
                    "ssh_url": "git@github.com:angular/angular-cli.git",
                    "clone_url": "https://github.com/angular/angular-cli.git",
                    "svn_url": "https://github.com/angular/angular-cli",
                    "homepage": "https://cli.angular.io/",
                    "size": 16273,
                    "stargazers_count": 20129,
                    "watchers_count": 20129,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": false,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 4922,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 1264,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular-cli",
                        "cli",
                        "typescript"
                    ],
                    "forks": 4922,
                    "open_issues": 1264,
                    "watchers": 20129,
                    "default_branch": "master",
                    "score": 90.859764
                },
                {
                    "id": 10536180,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxMDUzNjE4MA==",
                    "name": "AngularJS-Learning",
                    "full_name": "jmcunningham/AngularJS-Learning",
                    "private": false,
                    "owner": {
                        "login": "jmcunningham",
                        "id": 4570610,
                        "node_id": "MDQ6VXNlcjQ1NzA2MTA=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/4570610?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/jmcunningham",
                        "html_url": "https://github.com/jmcunningham",
                        "followers_url": "https://api.github.com/users/jmcunningham/followers",
                        "following_url": "https://api.github.com/users/jmcunningham/following{/other_user}",
                        "gists_url": "https://api.github.com/users/jmcunningham/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/jmcunningham/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/jmcunningham/subscriptions",
                        "organizations_url": "https://api.github.com/users/jmcunningham/orgs",
                        "repos_url": "https://api.github.com/users/jmcunningham/repos",
                        "events_url": "https://api.github.com/users/jmcunningham/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/jmcunningham/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/jmcunningham/AngularJS-Learning",
                    "description": "A bunch of links to blog posts, articles, videos, etc for learning AngularJS",
                    "fork": false,
                    "url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning",
                    "forks_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/forks",
                    "keys_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/teams",
                    "hooks_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/hooks",
                    "issue_events_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/events",
                    "assignees_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/tags",
                    "blobs_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/languages",
                    "stargazers_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/stargazers",
                    "contributors_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/contributors",
                    "subscribers_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/subscribers",
                    "subscription_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/subscription",
                    "commits_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/merges",
                    "archive_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/downloads",
                    "issues_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/labels{/name}",
                    "releases_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/jmcunningham/AngularJS-Learning/deployments",
                    "created_at": "2013-06-06T20:48:17Z",
                    "updated_at": "2018-10-31T02:05:45Z",
                    "pushed_at": "2016-12-29T13:19:35Z",
                    "git_url": "git://github.com/jmcunningham/AngularJS-Learning.git",
                    "ssh_url": "git@github.com:jmcunningham/AngularJS-Learning.git",
                    "clone_url": "https://github.com/jmcunningham/AngularJS-Learning.git",
                    "svn_url": "https://github.com/jmcunningham/AngularJS-Learning",
                    "homepage": null,
                    "size": 1125,
                    "stargazers_count": 10891,
                    "watchers_count": 10891,
                    "language": null,
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 2229,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 9,
                    "license": null,
                    "topics": [],
                    "forks": 2229,
                    "open_issues": 9,
                    "watchers": 10891,
                    "default_branch": "master",
                    "score": 88.352135
                },
                {
                    "id": 60701086,
                    "node_id": "MDEwOlJlcG9zaXRvcnk2MDcwMTA4Ng==",
                    "name": "angular",
                    "full_name": "dart-lang/angular",
                    "private": false,
                    "owner": {
                        "login": "dart-lang",
                        "id": 1609975,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2MDk5NzU=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/1609975?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/dart-lang",
                        "html_url": "https://github.com/dart-lang",
                        "followers_url": "https://api.github.com/users/dart-lang/followers",
                        "following_url": "https://api.github.com/users/dart-lang/following{/other_user}",
                        "gists_url": "https://api.github.com/users/dart-lang/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/dart-lang/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/dart-lang/subscriptions",
                        "organizations_url": "https://api.github.com/users/dart-lang/orgs",
                        "repos_url": "https://api.github.com/users/dart-lang/repos",
                        "events_url": "https://api.github.com/users/dart-lang/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/dart-lang/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/dart-lang/angular",
                    "description": "Fast and productive web framework provided by Dart",
                    "fork": false,
                    "url": "https://api.github.com/repos/dart-lang/angular",
                    "forks_url": "https://api.github.com/repos/dart-lang/angular/forks",
                    "keys_url": "https://api.github.com/repos/dart-lang/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/dart-lang/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/dart-lang/angular/teams",
                    "hooks_url": "https://api.github.com/repos/dart-lang/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/dart-lang/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/dart-lang/angular/events",
                    "assignees_url": "https://api.github.com/repos/dart-lang/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/dart-lang/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/dart-lang/angular/tags",
                    "blobs_url": "https://api.github.com/repos/dart-lang/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/dart-lang/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/dart-lang/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/dart-lang/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/dart-lang/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/dart-lang/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/dart-lang/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/dart-lang/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/dart-lang/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/dart-lang/angular/subscription",
                    "commits_url": "https://api.github.com/repos/dart-lang/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/dart-lang/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/dart-lang/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/dart-lang/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/dart-lang/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/dart-lang/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/dart-lang/angular/merges",
                    "archive_url": "https://api.github.com/repos/dart-lang/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/dart-lang/angular/downloads",
                    "issues_url": "https://api.github.com/repos/dart-lang/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/dart-lang/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/dart-lang/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/dart-lang/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/dart-lang/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/dart-lang/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/dart-lang/angular/deployments",
                    "created_at": "2016-06-08T13:45:10Z",
                    "updated_at": "2018-10-30T23:16:35Z",
                    "pushed_at": "2018-10-30T23:16:37Z",
                    "git_url": "git://github.com/dart-lang/angular.git",
                    "ssh_url": "git@github.com:dart-lang/angular.git",
                    "clone_url": "https://github.com/dart-lang/angular.git",
                    "svn_url": "https://github.com/dart-lang/angular",
                    "homepage": "https://pub.dartlang.org/packages/angular",
                    "size": 11206,
                    "stargazers_count": 869,
                    "watchers_count": 869,
                    "language": "Dart",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": false,
                    "has_pages": false,
                    "forks_count": 122,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 43,
                    "license": null,
                    "topics": [
                        "angular",
                        "angular2",
                        "angulardart",
                        "dart",
                        "dart-web",
                        "dartlang",
                        "web-framework"
                    ],
                    "forks": 122,
                    "open_issues": 43,
                    "watchers": 869,
                    "default_branch": "master",
                    "score": 87.20093
                },
                {
                    "id": 1195004,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxMTk1MDA0",
                    "name": "angular-seed",
                    "full_name": "angular/angular-seed",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular-seed",
                    "description": "Seed project for angular apps. ",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular-seed",
                    "forks_url": "https://api.github.com/repos/angular/angular-seed/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular-seed/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular-seed/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular-seed/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular-seed/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular-seed/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular-seed/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular-seed/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular-seed/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular-seed/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular-seed/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular-seed/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular-seed/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular-seed/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular-seed/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular-seed/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular-seed/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular-seed/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular-seed/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular-seed/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular-seed/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular-seed/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular-seed/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular-seed/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular-seed/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular-seed/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular-seed/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular-seed/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular-seed/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular-seed/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular-seed/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular-seed/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular-seed/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular-seed/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular-seed/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular-seed/deployments",
                    "created_at": "2010-12-24T06:07:50Z",
                    "updated_at": "2018-10-31T02:29:53Z",
                    "pushed_at": "2018-10-30T11:37:26Z",
                    "git_url": "git://github.com/angular/angular-seed.git",
                    "ssh_url": "git@github.com:angular/angular-seed.git",
                    "clone_url": "https://github.com/angular/angular-seed.git",
                    "svn_url": "https://github.com/angular/angular-seed",
                    "homepage": "http://angularjs.org/",
                    "size": 14481,
                    "stargazers_count": 13300,
                    "watchers_count": 13300,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 7488,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 18,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 7488,
                    "open_issues": 18,
                    "watchers": 13300,
                    "default_branch": "master",
                    "score": 87.00449
                },
                {
                    "id": 49453413,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0OTQ1MzQxMw==",
                    "name": "angularfire2",
                    "full_name": "angular/angularfire2",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angularfire2",
                    "description": "The official Angular library for Firebase.",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angularfire2",
                    "forks_url": "https://api.github.com/repos/angular/angularfire2/forks",
                    "keys_url": "https://api.github.com/repos/angular/angularfire2/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angularfire2/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angularfire2/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angularfire2/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angularfire2/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angularfire2/events",
                    "assignees_url": "https://api.github.com/repos/angular/angularfire2/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angularfire2/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angularfire2/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angularfire2/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angularfire2/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angularfire2/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angularfire2/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angularfire2/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angularfire2/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angularfire2/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angularfire2/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angularfire2/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angularfire2/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angularfire2/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angularfire2/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angularfire2/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angularfire2/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angularfire2/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angularfire2/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angularfire2/merges",
                    "archive_url": "https://api.github.com/repos/angular/angularfire2/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angularfire2/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angularfire2/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angularfire2/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angularfire2/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angularfire2/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angularfire2/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angularfire2/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angularfire2/deployments",
                    "created_at": "2016-01-11T20:47:23Z",
                    "updated_at": "2018-10-31T02:54:27Z",
                    "pushed_at": "2018-10-26T02:42:30Z",
                    "git_url": "git://github.com/angular/angularfire2.git",
                    "ssh_url": "git@github.com:angular/angularfire2.git",
                    "clone_url": "https://github.com/angular/angularfire2.git",
                    "svn_url": "https://github.com/angular/angularfire2",
                    "homepage": "https://github.com/angular/angularfire2",
                    "size": 1671,
                    "stargazers_count": 4342,
                    "watchers_count": 4342,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 1259,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 56,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angularfire",
                        "firebase"
                    ],
                    "forks": 1259,
                    "open_issues": 56,
                    "watchers": 4342,
                    "default_branch": "master",
                    "score": 84.23987
                },
                {
                    "id": 49016322,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0OTAxNjMyMg==",
                    "name": "material2",
                    "full_name": "angular/material2",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/material2",
                    "description": "Material Design components for Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/material2",
                    "forks_url": "https://api.github.com/repos/angular/material2/forks",
                    "keys_url": "https://api.github.com/repos/angular/material2/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/material2/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/material2/teams",
                    "hooks_url": "https://api.github.com/repos/angular/material2/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/material2/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/material2/events",
                    "assignees_url": "https://api.github.com/repos/angular/material2/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/material2/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/material2/tags",
                    "blobs_url": "https://api.github.com/repos/angular/material2/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/material2/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/material2/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/material2/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/material2/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/material2/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/material2/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/material2/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/material2/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/material2/subscription",
                    "commits_url": "https://api.github.com/repos/angular/material2/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/material2/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/material2/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/material2/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/material2/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/material2/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/material2/merges",
                    "archive_url": "https://api.github.com/repos/angular/material2/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/material2/downloads",
                    "issues_url": "https://api.github.com/repos/angular/material2/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/material2/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/material2/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/material2/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/material2/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/material2/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/material2/deployments",
                    "created_at": "2016-01-04T18:50:02Z",
                    "updated_at": "2018-10-31T06:15:28Z",
                    "pushed_at": "2018-10-31T04:59:27Z",
                    "git_url": "git://github.com/angular/material2.git",
                    "ssh_url": "git@github.com:angular/material2.git",
                    "clone_url": "https://github.com/angular/material2.git",
                    "svn_url": "https://github.com/angular/material2",
                    "homepage": "https://material.angular.io",
                    "size": 21021,
                    "stargazers_count": 16301,
                    "watchers_count": 16301,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 4128,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 1348,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular-components",
                        "material",
                        "material-design"
                    ],
                    "forks": 4128,
                    "open_issues": 1348,
                    "watchers": 16301,
                    "default_branch": "master",
                    "score": 83.757675
                },
                {
                    "id": 22362099,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyMjM2MjA5OQ==",
                    "name": "angular-styleguide",
                    "full_name": "johnpapa/angular-styleguide",
                    "private": false,
                    "owner": {
                        "login": "johnpapa",
                        "id": 1202528,
                        "node_id": "MDQ6VXNlcjEyMDI1Mjg=",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/1202528?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/johnpapa",
                        "html_url": "https://github.com/johnpapa",
                        "followers_url": "https://api.github.com/users/johnpapa/followers",
                        "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
                        "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
                        "organizations_url": "https://api.github.com/users/johnpapa/orgs",
                        "repos_url": "https://api.github.com/users/johnpapa/repos",
                        "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/johnpapa/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/johnpapa/angular-styleguide",
                    "description": "Angular Style Guide: A starting point for Angular development teams to provide consistency through good practices.",
                    "fork": false,
                    "url": "https://api.github.com/repos/johnpapa/angular-styleguide",
                    "forks_url": "https://api.github.com/repos/johnpapa/angular-styleguide/forks",
                    "keys_url": "https://api.github.com/repos/johnpapa/angular-styleguide/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/johnpapa/angular-styleguide/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/johnpapa/angular-styleguide/teams",
                    "hooks_url": "https://api.github.com/repos/johnpapa/angular-styleguide/hooks",
                    "issue_events_url": "https://api.github.com/repos/johnpapa/angular-styleguide/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/johnpapa/angular-styleguide/events",
                    "assignees_url": "https://api.github.com/repos/johnpapa/angular-styleguide/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/johnpapa/angular-styleguide/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/johnpapa/angular-styleguide/tags",
                    "blobs_url": "https://api.github.com/repos/johnpapa/angular-styleguide/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/johnpapa/angular-styleguide/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/johnpapa/angular-styleguide/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/johnpapa/angular-styleguide/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/johnpapa/angular-styleguide/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/johnpapa/angular-styleguide/languages",
                    "stargazers_url": "https://api.github.com/repos/johnpapa/angular-styleguide/stargazers",
                    "contributors_url": "https://api.github.com/repos/johnpapa/angular-styleguide/contributors",
                    "subscribers_url": "https://api.github.com/repos/johnpapa/angular-styleguide/subscribers",
                    "subscription_url": "https://api.github.com/repos/johnpapa/angular-styleguide/subscription",
                    "commits_url": "https://api.github.com/repos/johnpapa/angular-styleguide/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/johnpapa/angular-styleguide/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/johnpapa/angular-styleguide/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/johnpapa/angular-styleguide/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/johnpapa/angular-styleguide/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/johnpapa/angular-styleguide/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/johnpapa/angular-styleguide/merges",
                    "archive_url": "https://api.github.com/repos/johnpapa/angular-styleguide/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/johnpapa/angular-styleguide/downloads",
                    "issues_url": "https://api.github.com/repos/johnpapa/angular-styleguide/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/johnpapa/angular-styleguide/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/johnpapa/angular-styleguide/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/johnpapa/angular-styleguide/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/johnpapa/angular-styleguide/labels{/name}",
                    "releases_url": "https://api.github.com/repos/johnpapa/angular-styleguide/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/johnpapa/angular-styleguide/deployments",
                    "created_at": "2014-07-29T00:07:51Z",
                    "updated_at": "2018-10-30T22:32:42Z",
                    "pushed_at": "2018-10-29T21:39:48Z",
                    "git_url": "git://github.com/johnpapa/angular-styleguide.git",
                    "ssh_url": "git@github.com:johnpapa/angular-styleguide.git",
                    "clone_url": "https://github.com/johnpapa/angular-styleguide.git",
                    "svn_url": "https://github.com/johnpapa/angular-styleguide",
                    "homepage": "http://johnpapa.net",
                    "size": 4140,
                    "stargazers_count": 24085,
                    "watchers_count": 24085,
                    "language": null,
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": false,
                    "has_pages": false,
                    "forks_count": 4553,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 76,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 4553,
                    "open_issues": 76,
                    "watchers": 24085,
                    "default_branch": "master",
                    "score": 83.49727
                },
                {
                    "id": 31829770,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzMTgyOTc3MA==",
                    "name": "angular-starter",
                    "full_name": "gdi2290/angular-starter",
                    "private": false,
                    "owner": {
                        "login": "gdi2290",
                        "id": 1016365,
                        "node_id": "MDQ6VXNlcjEwMTYzNjU=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/1016365?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/gdi2290",
                        "html_url": "https://github.com/gdi2290",
                        "followers_url": "https://api.github.com/users/gdi2290/followers",
                        "following_url": "https://api.github.com/users/gdi2290/following{/other_user}",
                        "gists_url": "https://api.github.com/users/gdi2290/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/gdi2290/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/gdi2290/subscriptions",
                        "organizations_url": "https://api.github.com/users/gdi2290/orgs",
                        "repos_url": "https://api.github.com/users/gdi2290/repos",
                        "events_url": "https://api.github.com/users/gdi2290/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/gdi2290/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/gdi2290/angular-starter",
                    "description": ":tada: An Angular Starter kit featuring Angular (Router, Http, Forms, Services, Tests, E2E, Dev/Prod, HMR, Async/Lazy Routes, AoT via ngc), Karma, Protractor, Jasmine, Istanbul, TypeScript, TsLint, Codelyzer, Hot Module Replacement, @types, and Webpack by @TipeIO",
                    "fork": false,
                    "url": "https://api.github.com/repos/gdi2290/angular-starter",
                    "forks_url": "https://api.github.com/repos/gdi2290/angular-starter/forks",
                    "keys_url": "https://api.github.com/repos/gdi2290/angular-starter/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/gdi2290/angular-starter/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/gdi2290/angular-starter/teams",
                    "hooks_url": "https://api.github.com/repos/gdi2290/angular-starter/hooks",
                    "issue_events_url": "https://api.github.com/repos/gdi2290/angular-starter/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/gdi2290/angular-starter/events",
                    "assignees_url": "https://api.github.com/repos/gdi2290/angular-starter/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/gdi2290/angular-starter/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/gdi2290/angular-starter/tags",
                    "blobs_url": "https://api.github.com/repos/gdi2290/angular-starter/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/gdi2290/angular-starter/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/gdi2290/angular-starter/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/gdi2290/angular-starter/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/gdi2290/angular-starter/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/gdi2290/angular-starter/languages",
                    "stargazers_url": "https://api.github.com/repos/gdi2290/angular-starter/stargazers",
                    "contributors_url": "https://api.github.com/repos/gdi2290/angular-starter/contributors",
                    "subscribers_url": "https://api.github.com/repos/gdi2290/angular-starter/subscribers",
                    "subscription_url": "https://api.github.com/repos/gdi2290/angular-starter/subscription",
                    "commits_url": "https://api.github.com/repos/gdi2290/angular-starter/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/gdi2290/angular-starter/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/gdi2290/angular-starter/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/gdi2290/angular-starter/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/gdi2290/angular-starter/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/gdi2290/angular-starter/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/gdi2290/angular-starter/merges",
                    "archive_url": "https://api.github.com/repos/gdi2290/angular-starter/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/gdi2290/angular-starter/downloads",
                    "issues_url": "https://api.github.com/repos/gdi2290/angular-starter/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/gdi2290/angular-starter/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/gdi2290/angular-starter/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/gdi2290/angular-starter/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/gdi2290/angular-starter/labels{/name}",
                    "releases_url": "https://api.github.com/repos/gdi2290/angular-starter/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/gdi2290/angular-starter/deployments",
                    "created_at": "2015-03-07T22:25:10Z",
                    "updated_at": "2018-10-31T04:35:07Z",
                    "pushed_at": "2018-10-18T01:39:44Z",
                    "git_url": "git://github.com/gdi2290/angular-starter.git",
                    "ssh_url": "git@github.com:gdi2290/angular-starter.git",
                    "clone_url": "https://github.com/gdi2290/angular-starter.git",
                    "svn_url": "https://github.com/gdi2290/angular-starter",
                    "homepage": "https://tipe.io",
                    "size": 4306,
                    "stargazers_count": 10103,
                    "watchers_count": 10103,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 5478,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 74,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular6",
                        "angularclass",
                        "aot",
                        "aot-compilation",
                        "codelyzer",
                        "docker",
                        "hmr",
                        "hot-module-replacement",
                        "istanbul",
                        "jasmine",
                        "jasmine-tests",
                        "javascript",
                        "karma",
                        "lazy-loading",
                        "lazyload",
                        "protractor",
                        "starter-kit",
                        "typescript",
                        "webpack"
                    ],
                    "forks": 5478,
                    "open_issues": 74,
                    "watchers": 10103,
                    "default_branch": "master",
                    "score": 82.46574
                },
                {
                    "id": 51803340,
                    "node_id": "MDEwOlJlcG9zaXRvcnk1MTgwMzM0MA==",
                    "name": "Angular-GettingStarted",
                    "full_name": "DeborahK/Angular-GettingStarted",
                    "private": false,
                    "owner": {
                        "login": "DeborahK",
                        "id": 7987365,
                        "node_id": "MDQ6VXNlcjc5ODczNjU=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/7987365?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/DeborahK",
                        "html_url": "https://github.com/DeborahK",
                        "followers_url": "https://api.github.com/users/DeborahK/followers",
                        "following_url": "https://api.github.com/users/DeborahK/following{/other_user}",
                        "gists_url": "https://api.github.com/users/DeborahK/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/DeborahK/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/DeborahK/subscriptions",
                        "organizations_url": "https://api.github.com/users/DeborahK/orgs",
                        "repos_url": "https://api.github.com/users/DeborahK/repos",
                        "events_url": "https://api.github.com/users/DeborahK/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/DeborahK/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/DeborahK/Angular-GettingStarted",
                    "description": "Sample Angular application used in the \"Angular: Getting Started\" course: http://bit.ly/Angular-GettingStarted",
                    "fork": false,
                    "url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted",
                    "forks_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/forks",
                    "keys_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/teams",
                    "hooks_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/hooks",
                    "issue_events_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/events",
                    "assignees_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/tags",
                    "blobs_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/languages",
                    "stargazers_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/stargazers",
                    "contributors_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/contributors",
                    "subscribers_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/subscribers",
                    "subscription_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/subscription",
                    "commits_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/merges",
                    "archive_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/downloads",
                    "issues_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/labels{/name}",
                    "releases_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/DeborahK/Angular-GettingStarted/deployments",
                    "created_at": "2016-02-16T02:56:05Z",
                    "updated_at": "2018-10-29T23:18:33Z",
                    "pushed_at": "2018-10-29T03:26:51Z",
                    "git_url": "git://github.com/DeborahK/Angular-GettingStarted.git",
                    "ssh_url": "git@github.com:DeborahK/Angular-GettingStarted.git",
                    "clone_url": "https://github.com/DeborahK/Angular-GettingStarted.git",
                    "svn_url": "https://github.com/DeborahK/Angular-GettingStarted",
                    "homepage": "",
                    "size": 585,
                    "stargazers_count": 1329,
                    "watchers_count": 1329,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 2006,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 0,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 2006,
                    "open_issues": 0,
                    "watchers": 1329,
                    "default_branch": "master",
                    "score": 81.792946
                },
                {
                    "id": 49767244,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0OTc2NzI0NA==",
                    "name": "primeng",
                    "full_name": "primefaces/primeng",
                    "private": false,
                    "owner": {
                        "login": "primefaces",
                        "id": 3494069,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjM0OTQwNjk=",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/3494069?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/primefaces",
                        "html_url": "https://github.com/primefaces",
                        "followers_url": "https://api.github.com/users/primefaces/followers",
                        "following_url": "https://api.github.com/users/primefaces/following{/other_user}",
                        "gists_url": "https://api.github.com/users/primefaces/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/primefaces/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/primefaces/subscriptions",
                        "organizations_url": "https://api.github.com/users/primefaces/orgs",
                        "repos_url": "https://api.github.com/users/primefaces/repos",
                        "events_url": "https://api.github.com/users/primefaces/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/primefaces/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/primefaces/primeng",
                    "description": "UI Components for Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/primefaces/primeng",
                    "forks_url": "https://api.github.com/repos/primefaces/primeng/forks",
                    "keys_url": "https://api.github.com/repos/primefaces/primeng/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/primefaces/primeng/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/primefaces/primeng/teams",
                    "hooks_url": "https://api.github.com/repos/primefaces/primeng/hooks",
                    "issue_events_url": "https://api.github.com/repos/primefaces/primeng/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/primefaces/primeng/events",
                    "assignees_url": "https://api.github.com/repos/primefaces/primeng/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/primefaces/primeng/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/primefaces/primeng/tags",
                    "blobs_url": "https://api.github.com/repos/primefaces/primeng/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/primefaces/primeng/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/primefaces/primeng/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/primefaces/primeng/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/primefaces/primeng/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/primefaces/primeng/languages",
                    "stargazers_url": "https://api.github.com/repos/primefaces/primeng/stargazers",
                    "contributors_url": "https://api.github.com/repos/primefaces/primeng/contributors",
                    "subscribers_url": "https://api.github.com/repos/primefaces/primeng/subscribers",
                    "subscription_url": "https://api.github.com/repos/primefaces/primeng/subscription",
                    "commits_url": "https://api.github.com/repos/primefaces/primeng/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/primefaces/primeng/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/primefaces/primeng/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/primefaces/primeng/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/primefaces/primeng/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/primefaces/primeng/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/primefaces/primeng/merges",
                    "archive_url": "https://api.github.com/repos/primefaces/primeng/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/primefaces/primeng/downloads",
                    "issues_url": "https://api.github.com/repos/primefaces/primeng/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/primefaces/primeng/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/primefaces/primeng/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/primefaces/primeng/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/primefaces/primeng/labels{/name}",
                    "releases_url": "https://api.github.com/repos/primefaces/primeng/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/primefaces/primeng/deployments",
                    "created_at": "2016-01-16T09:23:28Z",
                    "updated_at": "2018-10-31T05:35:54Z",
                    "pushed_at": "2018-10-30T12:51:57Z",
                    "git_url": "git://github.com/primefaces/primeng.git",
                    "ssh_url": "git@github.com:primefaces/primeng.git",
                    "clone_url": "https://github.com/primefaces/primeng.git",
                    "svn_url": "https://github.com/primefaces/primeng",
                    "homepage": "https://www.primefaces.org/primeng",
                    "size": 37838,
                    "stargazers_count": 4670,
                    "watchers_count": 4670,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 2125,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 843,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "charts",
                        "components",
                        "datagrid",
                        "datatable",
                        "mit",
                        "typescript",
                        "ui"
                    ],
                    "forks": 2125,
                    "open_issues": 843,
                    "watchers": 4670,
                    "default_branch": "master",
                    "score": 81.123085
                },
                {
                    "id": 16049833,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxNjA0OTgzMw==",
                    "name": "angularUtils",
                    "full_name": "michaelbromley/angularUtils",
                    "private": false,
                    "owner": {
                        "login": "michaelbromley",
                        "id": 6275952,
                        "node_id": "MDQ6VXNlcjYyNzU5NTI=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/6275952?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/michaelbromley",
                        "html_url": "https://github.com/michaelbromley",
                        "followers_url": "https://api.github.com/users/michaelbromley/followers",
                        "following_url": "https://api.github.com/users/michaelbromley/following{/other_user}",
                        "gists_url": "https://api.github.com/users/michaelbromley/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/michaelbromley/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/michaelbromley/subscriptions",
                        "organizations_url": "https://api.github.com/users/michaelbromley/orgs",
                        "repos_url": "https://api.github.com/users/michaelbromley/repos",
                        "events_url": "https://api.github.com/users/michaelbromley/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/michaelbromley/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/michaelbromley/angularUtils",
                    "description": "A place where I will collect useful re-usable Angular components that I make",
                    "fork": false,
                    "url": "https://api.github.com/repos/michaelbromley/angularUtils",
                    "forks_url": "https://api.github.com/repos/michaelbromley/angularUtils/forks",
                    "keys_url": "https://api.github.com/repos/michaelbromley/angularUtils/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/michaelbromley/angularUtils/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/michaelbromley/angularUtils/teams",
                    "hooks_url": "https://api.github.com/repos/michaelbromley/angularUtils/hooks",
                    "issue_events_url": "https://api.github.com/repos/michaelbromley/angularUtils/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/michaelbromley/angularUtils/events",
                    "assignees_url": "https://api.github.com/repos/michaelbromley/angularUtils/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/michaelbromley/angularUtils/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/michaelbromley/angularUtils/tags",
                    "blobs_url": "https://api.github.com/repos/michaelbromley/angularUtils/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/michaelbromley/angularUtils/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/michaelbromley/angularUtils/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/michaelbromley/angularUtils/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/michaelbromley/angularUtils/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/michaelbromley/angularUtils/languages",
                    "stargazers_url": "https://api.github.com/repos/michaelbromley/angularUtils/stargazers",
                    "contributors_url": "https://api.github.com/repos/michaelbromley/angularUtils/contributors",
                    "subscribers_url": "https://api.github.com/repos/michaelbromley/angularUtils/subscribers",
                    "subscription_url": "https://api.github.com/repos/michaelbromley/angularUtils/subscription",
                    "commits_url": "https://api.github.com/repos/michaelbromley/angularUtils/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/michaelbromley/angularUtils/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/michaelbromley/angularUtils/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/michaelbromley/angularUtils/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/michaelbromley/angularUtils/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/michaelbromley/angularUtils/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/michaelbromley/angularUtils/merges",
                    "archive_url": "https://api.github.com/repos/michaelbromley/angularUtils/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/michaelbromley/angularUtils/downloads",
                    "issues_url": "https://api.github.com/repos/michaelbromley/angularUtils/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/michaelbromley/angularUtils/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/michaelbromley/angularUtils/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/michaelbromley/angularUtils/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/michaelbromley/angularUtils/labels{/name}",
                    "releases_url": "https://api.github.com/repos/michaelbromley/angularUtils/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/michaelbromley/angularUtils/deployments",
                    "created_at": "2014-01-19T16:47:02Z",
                    "updated_at": "2018-10-23T15:37:43Z",
                    "pushed_at": "2018-08-09T11:05:52Z",
                    "git_url": "git://github.com/michaelbromley/angularUtils.git",
                    "ssh_url": "git@github.com:michaelbromley/angularUtils.git",
                    "clone_url": "https://github.com/michaelbromley/angularUtils.git",
                    "svn_url": "https://github.com/michaelbromley/angularUtils",
                    "homepage": null,
                    "size": 871,
                    "stargazers_count": 2043,
                    "watchers_count": 2043,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 893,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 86,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 893,
                    "open_issues": 86,
                    "watchers": 2043,
                    "default_branch": "master",
                    "score": 79.421844
                },
                {
                    "id": 1452079,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxNDUyMDc5",
                    "name": "angular-phonecat",
                    "full_name": "angular/angular-phonecat",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular-phonecat",
                    "description": "Tutorial on building an angular application.",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular-phonecat",
                    "forks_url": "https://api.github.com/repos/angular/angular-phonecat/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular-phonecat/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular-phonecat/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular-phonecat/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular-phonecat/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular-phonecat/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular-phonecat/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular-phonecat/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular-phonecat/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular-phonecat/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular-phonecat/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular-phonecat/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular-phonecat/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular-phonecat/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular-phonecat/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular-phonecat/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular-phonecat/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular-phonecat/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular-phonecat/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular-phonecat/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular-phonecat/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular-phonecat/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular-phonecat/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular-phonecat/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular-phonecat/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular-phonecat/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular-phonecat/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular-phonecat/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular-phonecat/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular-phonecat/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular-phonecat/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular-phonecat/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular-phonecat/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular-phonecat/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular-phonecat/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular-phonecat/deployments",
                    "created_at": "2011-03-07T21:42:29Z",
                    "updated_at": "2018-10-26T13:02:11Z",
                    "pushed_at": "2018-10-31T00:12:18Z",
                    "git_url": "git://github.com/angular/angular-phonecat.git",
                    "ssh_url": "git@github.com:angular/angular-phonecat.git",
                    "clone_url": "https://github.com/angular/angular-phonecat.git",
                    "svn_url": "https://github.com/angular/angular-phonecat",
                    "homepage": "http://docs.angularjs.org/tutorial",
                    "size": 105029,
                    "stargazers_count": 3038,
                    "watchers_count": 3038,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 4894,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 10,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 4894,
                    "open_issues": 10,
                    "watchers": 3038,
                    "default_branch": "master",
                    "score": 78.312515
                },
                {
                    "id": 71081599,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3MTA4MTU5OQ==",
                    "name": "angular",
                    "full_name": "ui-router/angular",
                    "private": false,
                    "owner": {
                        "login": "ui-router",
                        "id": 16856735,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2ODU2NzM1",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/16856735?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/ui-router",
                        "html_url": "https://github.com/ui-router",
                        "followers_url": "https://api.github.com/users/ui-router/followers",
                        "following_url": "https://api.github.com/users/ui-router/following{/other_user}",
                        "gists_url": "https://api.github.com/users/ui-router/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/ui-router/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/ui-router/subscriptions",
                        "organizations_url": "https://api.github.com/users/ui-router/orgs",
                        "repos_url": "https://api.github.com/users/ui-router/repos",
                        "events_url": "https://api.github.com/users/ui-router/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/ui-router/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/ui-router/angular",
                    "description": "UI-Router for Angular: State-based routing for Angular (v2+)",
                    "fork": false,
                    "url": "https://api.github.com/repos/ui-router/angular",
                    "forks_url": "https://api.github.com/repos/ui-router/angular/forks",
                    "keys_url": "https://api.github.com/repos/ui-router/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/ui-router/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/ui-router/angular/teams",
                    "hooks_url": "https://api.github.com/repos/ui-router/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/ui-router/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/ui-router/angular/events",
                    "assignees_url": "https://api.github.com/repos/ui-router/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/ui-router/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/ui-router/angular/tags",
                    "blobs_url": "https://api.github.com/repos/ui-router/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/ui-router/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/ui-router/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/ui-router/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/ui-router/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/ui-router/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/ui-router/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/ui-router/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/ui-router/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/ui-router/angular/subscription",
                    "commits_url": "https://api.github.com/repos/ui-router/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/ui-router/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/ui-router/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/ui-router/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/ui-router/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/ui-router/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/ui-router/angular/merges",
                    "archive_url": "https://api.github.com/repos/ui-router/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/ui-router/angular/downloads",
                    "issues_url": "https://api.github.com/repos/ui-router/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/ui-router/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/ui-router/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/ui-router/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/ui-router/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/ui-router/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/ui-router/angular/deployments",
                    "created_at": "2016-10-16T22:39:13Z",
                    "updated_at": "2018-10-20T19:27:45Z",
                    "pushed_at": "2018-10-29T07:40:13Z",
                    "git_url": "git://github.com/ui-router/angular.git",
                    "ssh_url": "git@github.com:ui-router/angular.git",
                    "clone_url": "https://github.com/ui-router/angular.git",
                    "svn_url": "https://github.com/ui-router/angular",
                    "homepage": "https://ui-router.github.io/ng2/",
                    "size": 8085,
                    "stargazers_count": 219,
                    "watchers_count": 219,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 90,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 45,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular2",
                        "aot-compatible",
                        "javascript",
                        "ng2",
                        "router",
                        "spa",
                        "typescript",
                        "ui-router"
                    ],
                    "forks": 90,
                    "open_issues": 45,
                    "watchers": 219,
                    "default_branch": "master",
                    "score": 78.118774
                },
                {
                    "id": 42481664,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0MjQ4MTY2NA==",
                    "name": "ng-bootstrap",
                    "full_name": "ng-bootstrap/ng-bootstrap",
                    "private": false,
                    "owner": {
                        "login": "ng-bootstrap",
                        "id": 14283866,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0MjgzODY2",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/14283866?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/ng-bootstrap",
                        "html_url": "https://github.com/ng-bootstrap",
                        "followers_url": "https://api.github.com/users/ng-bootstrap/followers",
                        "following_url": "https://api.github.com/users/ng-bootstrap/following{/other_user}",
                        "gists_url": "https://api.github.com/users/ng-bootstrap/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/ng-bootstrap/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/ng-bootstrap/subscriptions",
                        "organizations_url": "https://api.github.com/users/ng-bootstrap/orgs",
                        "repos_url": "https://api.github.com/users/ng-bootstrap/repos",
                        "events_url": "https://api.github.com/users/ng-bootstrap/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/ng-bootstrap/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/ng-bootstrap/ng-bootstrap",
                    "description": "Angular powered Bootstrap",
                    "fork": false,
                    "url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap",
                    "forks_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/forks",
                    "keys_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/teams",
                    "hooks_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/hooks",
                    "issue_events_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/events",
                    "assignees_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/tags",
                    "blobs_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/languages",
                    "stargazers_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/stargazers",
                    "contributors_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/contributors",
                    "subscribers_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/subscribers",
                    "subscription_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/subscription",
                    "commits_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/merges",
                    "archive_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/downloads",
                    "issues_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/labels{/name}",
                    "releases_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/ng-bootstrap/ng-bootstrap/deployments",
                    "created_at": "2015-09-14T22:55:53Z",
                    "updated_at": "2018-10-31T05:17:24Z",
                    "pushed_at": "2018-10-30T08:40:16Z",
                    "git_url": "git://github.com/ng-bootstrap/ng-bootstrap.git",
                    "ssh_url": "git@github.com:ng-bootstrap/ng-bootstrap.git",
                    "clone_url": "https://github.com/ng-bootstrap/ng-bootstrap.git",
                    "svn_url": "https://github.com/ng-bootstrap/ng-bootstrap",
                    "homepage": "https://ng-bootstrap.github.io",
                    "size": 3146,
                    "stargazers_count": 6195,
                    "watchers_count": 6195,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 1019,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 173,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "accordion",
                        "alert",
                        "angular",
                        "bootstrap",
                        "buttons",
                        "carousel",
                        "collapse",
                        "datepicker",
                        "dropdown",
                        "modal",
                        "ng-bootstrap",
                        "pagination",
                        "popover",
                        "progress-bar",
                        "rating",
                        "tabs",
                        "timepicker",
                        "tooltip",
                        "typeahead",
                        "widgets"
                    ],
                    "forks": 1019,
                    "open_issues": 173,
                    "watchers": 6195,
                    "default_branch": "master",
                    "score": 77.21534
                },
                {
                    "id": 20328840,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyMDMyODg0MA==",
                    "name": "AngularJSAuthentication",
                    "full_name": "tjoudeh/AngularJSAuthentication",
                    "private": false,
                    "owner": {
                        "login": "tjoudeh",
                        "id": 3114431,
                        "node_id": "MDQ6VXNlcjMxMTQ0MzE=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/3114431?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/tjoudeh",
                        "html_url": "https://github.com/tjoudeh",
                        "followers_url": "https://api.github.com/users/tjoudeh/followers",
                        "following_url": "https://api.github.com/users/tjoudeh/following{/other_user}",
                        "gists_url": "https://api.github.com/users/tjoudeh/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/tjoudeh/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/tjoudeh/subscriptions",
                        "organizations_url": "https://api.github.com/users/tjoudeh/orgs",
                        "repos_url": "https://api.github.com/users/tjoudeh/repos",
                        "events_url": "https://api.github.com/users/tjoudeh/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/tjoudeh/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/tjoudeh/AngularJSAuthentication",
                    "description": "Tutorial shows Authentication in AngularJS with ASP.NET Web API 2 and Owin Middle-ware using access tokens and refresh tokens approach",
                    "fork": false,
                    "url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication",
                    "forks_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/forks",
                    "keys_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/teams",
                    "hooks_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/hooks",
                    "issue_events_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/events",
                    "assignees_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/tags",
                    "blobs_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/languages",
                    "stargazers_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/stargazers",
                    "contributors_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/contributors",
                    "subscribers_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/subscribers",
                    "subscription_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/subscription",
                    "commits_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/merges",
                    "archive_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/downloads",
                    "issues_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/labels{/name}",
                    "releases_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/tjoudeh/AngularJSAuthentication/deployments",
                    "created_at": "2014-05-30T12:43:22Z",
                    "updated_at": "2018-10-26T20:21:37Z",
                    "pushed_at": "2017-05-17T20:42:39Z",
                    "git_url": "git://github.com/tjoudeh/AngularJSAuthentication.git",
                    "ssh_url": "git@github.com:tjoudeh/AngularJSAuthentication.git",
                    "clone_url": "https://github.com/tjoudeh/AngularJSAuthentication.git",
                    "svn_url": "https://github.com/tjoudeh/AngularJSAuthentication",
                    "homepage": "bit.ly/TokenAuth",
                    "size": 21531,
                    "stargazers_count": 1179,
                    "watchers_count": 1179,
                    "language": "C#",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 820,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 28,
                    "license": null,
                    "topics": [],
                    "forks": 820,
                    "open_issues": 28,
                    "watchers": 1179,
                    "default_branch": "master",
                    "score": 77.11884
                },
                {
                    "id": 74495563,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3NDQ5NTU2Mw==",
                    "name": "angular7-example-app",
                    "full_name": "Ismaestro/angular7-example-app",
                    "private": false,
                    "owner": {
                        "login": "Ismaestro",
                        "id": 10084945,
                        "node_id": "MDQ6VXNlcjEwMDg0OTQ1",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/10084945?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/Ismaestro",
                        "html_url": "https://github.com/Ismaestro",
                        "followers_url": "https://api.github.com/users/Ismaestro/followers",
                        "following_url": "https://api.github.com/users/Ismaestro/following{/other_user}",
                        "gists_url": "https://api.github.com/users/Ismaestro/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/Ismaestro/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/Ismaestro/subscriptions",
                        "organizations_url": "https://api.github.com/users/Ismaestro/orgs",
                        "repos_url": "https://api.github.com/users/Ismaestro/repos",
                        "events_url": "https://api.github.com/users/Ismaestro/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/Ismaestro/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/Ismaestro/angular7-example-app",
                    "description": "Angular 7 Example App + Angular CLI + Angular Material + Docker + Angular Example Library",
                    "fork": false,
                    "url": "https://api.github.com/repos/Ismaestro/angular7-example-app",
                    "forks_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/forks",
                    "keys_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/teams",
                    "hooks_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/hooks",
                    "issue_events_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/events",
                    "assignees_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/tags",
                    "blobs_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/languages",
                    "stargazers_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/stargazers",
                    "contributors_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/contributors",
                    "subscribers_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/subscribers",
                    "subscription_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/subscription",
                    "commits_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/merges",
                    "archive_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/downloads",
                    "issues_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/labels{/name}",
                    "releases_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/Ismaestro/angular7-example-app/deployments",
                    "created_at": "2016-11-22T17:10:18Z",
                    "updated_at": "2018-10-31T02:30:31Z",
                    "pushed_at": "2018-10-30T22:22:09Z",
                    "git_url": "git://github.com/Ismaestro/angular7-example-app.git",
                    "ssh_url": "git@github.com:Ismaestro/angular7-example-app.git",
                    "clone_url": "https://github.com/Ismaestro/angular7-example-app.git",
                    "svn_url": "https://github.com/Ismaestro/angular7-example-app",
                    "homepage": "https://angularexampleapp.com/",
                    "size": 23301,
                    "stargazers_count": 756,
                    "watchers_count": 756,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 477,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 0,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular-2",
                        "angular-4",
                        "angular-5",
                        "angular-6",
                        "angular-cli",
                        "angular-material",
                        "angular2",
                        "angular4",
                        "angular5",
                        "angular6",
                        "base-project",
                        "boiler-plate",
                        "boilerplate",
                        "boilerplate-application",
                        "example-app",
                        "example-code",
                        "example-project",
                        "example-repo",
                        "sample-app"
                    ],
                    "forks": 477,
                    "open_issues": 0,
                    "watchers": 756,
                    "default_branch": "master",
                    "score": 76.66347
                },
                {
                    "id": 83716883,
                    "node_id": "MDEwOlJlcG9zaXRvcnk4MzcxNjg4Mw==",
                    "name": "platform",
                    "full_name": "ngrx/platform",
                    "private": false,
                    "owner": {
                        "login": "ngrx",
                        "id": 16272733,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2MjcyNzMz",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/16272733?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/ngrx",
                        "html_url": "https://github.com/ngrx",
                        "followers_url": "https://api.github.com/users/ngrx/followers",
                        "following_url": "https://api.github.com/users/ngrx/following{/other_user}",
                        "gists_url": "https://api.github.com/users/ngrx/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/ngrx/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/ngrx/subscriptions",
                        "organizations_url": "https://api.github.com/users/ngrx/orgs",
                        "repos_url": "https://api.github.com/users/ngrx/repos",
                        "events_url": "https://api.github.com/users/ngrx/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/ngrx/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/ngrx/platform",
                    "description": "Reactive libraries for Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/ngrx/platform",
                    "forks_url": "https://api.github.com/repos/ngrx/platform/forks",
                    "keys_url": "https://api.github.com/repos/ngrx/platform/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/ngrx/platform/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/ngrx/platform/teams",
                    "hooks_url": "https://api.github.com/repos/ngrx/platform/hooks",
                    "issue_events_url": "https://api.github.com/repos/ngrx/platform/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/ngrx/platform/events",
                    "assignees_url": "https://api.github.com/repos/ngrx/platform/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/ngrx/platform/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/ngrx/platform/tags",
                    "blobs_url": "https://api.github.com/repos/ngrx/platform/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/ngrx/platform/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/ngrx/platform/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/ngrx/platform/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/ngrx/platform/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/ngrx/platform/languages",
                    "stargazers_url": "https://api.github.com/repos/ngrx/platform/stargazers",
                    "contributors_url": "https://api.github.com/repos/ngrx/platform/contributors",
                    "subscribers_url": "https://api.github.com/repos/ngrx/platform/subscribers",
                    "subscription_url": "https://api.github.com/repos/ngrx/platform/subscription",
                    "commits_url": "https://api.github.com/repos/ngrx/platform/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/ngrx/platform/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/ngrx/platform/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/ngrx/platform/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/ngrx/platform/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/ngrx/platform/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/ngrx/platform/merges",
                    "archive_url": "https://api.github.com/repos/ngrx/platform/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/ngrx/platform/downloads",
                    "issues_url": "https://api.github.com/repos/ngrx/platform/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/ngrx/platform/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/ngrx/platform/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/ngrx/platform/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/ngrx/platform/labels{/name}",
                    "releases_url": "https://api.github.com/repos/ngrx/platform/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/ngrx/platform/deployments",
                    "created_at": "2017-03-02T19:34:15Z",
                    "updated_at": "2018-10-31T03:38:17Z",
                    "pushed_at": "2018-10-30T13:17:48Z",
                    "git_url": "git://github.com/ngrx/platform.git",
                    "ssh_url": "git@github.com:ngrx/platform.git",
                    "clone_url": "https://github.com/ngrx/platform.git",
                    "svn_url": "https://github.com/ngrx/platform",
                    "homepage": "",
                    "size": 4809,
                    "stargazers_count": 3854,
                    "watchers_count": 3854,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1027,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 48,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "ngrx",
                        "observables",
                        "reactive",
                        "redux",
                        "rxjs",
                        "state-management"
                    ],
                    "forks": 1027,
                    "open_issues": 48,
                    "watchers": 3854,
                    "default_branch": "master",
                    "score": 75.99889
                },
                {
                    "id": 31985425,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzMTk4NTQyNQ==",
                    "name": "angular.io",
                    "full_name": "angular/angular.io",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular.io",
                    "description": "Website for the Angular project (see github.com/angular/angular for the project repo)",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular.io",
                    "forks_url": "https://api.github.com/repos/angular/angular.io/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular.io/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular.io/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular.io/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular.io/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular.io/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular.io/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular.io/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular.io/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular.io/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular.io/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular.io/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular.io/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular.io/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular.io/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular.io/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular.io/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular.io/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular.io/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular.io/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular.io/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular.io/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular.io/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular.io/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular.io/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular.io/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular.io/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular.io/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular.io/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular.io/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular.io/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular.io/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular.io/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular.io/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular.io/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular.io/deployments",
                    "created_at": "2015-03-10T22:32:34Z",
                    "updated_at": "2018-10-29T16:52:16Z",
                    "pushed_at": "2017-12-03T16:38:32Z",
                    "git_url": "git://github.com/angular/angular.io.git",
                    "ssh_url": "git@github.com:angular/angular.io.git",
                    "clone_url": "https://github.com/angular/angular.io.git",
                    "svn_url": "https://github.com/angular/angular.io",
                    "homepage": "https://angular.io",
                    "size": 42801,
                    "stargazers_count": 1021,
                    "watchers_count": 1021,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 957,
                    "mirror_url": null,
                    "archived": true,
                    "open_issues_count": 213,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 957,
                    "open_issues": 213,
                    "watchers": 1021,
                    "default_branch": "master",
                    "score": 75.6658
                },
                {
                    "id": 90904321,
                    "node_id": "MDEwOlJlcG9zaXRvcnk5MDkwNDMyMQ==",
                    "name": "angular-ngrx-material-starter",
                    "full_name": "tomastrajan/angular-ngrx-material-starter",
                    "private": false,
                    "owner": {
                        "login": "tomastrajan",
                        "id": 3764868,
                        "node_id": "MDQ6VXNlcjM3NjQ4Njg=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/3764868?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/tomastrajan",
                        "html_url": "https://github.com/tomastrajan",
                        "followers_url": "https://api.github.com/users/tomastrajan/followers",
                        "following_url": "https://api.github.com/users/tomastrajan/following{/other_user}",
                        "gists_url": "https://api.github.com/users/tomastrajan/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/tomastrajan/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/tomastrajan/subscriptions",
                        "organizations_url": "https://api.github.com/users/tomastrajan/orgs",
                        "repos_url": "https://api.github.com/users/tomastrajan/repos",
                        "events_url": "https://api.github.com/users/tomastrajan/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/tomastrajan/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/tomastrajan/angular-ngrx-material-starter",
                    "description": "Angular, NgRx, Angular CLI & Angular Material Starter Project",
                    "fork": false,
                    "url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter",
                    "forks_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/forks",
                    "keys_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/teams",
                    "hooks_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/hooks",
                    "issue_events_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/events",
                    "assignees_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/tags",
                    "blobs_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/languages",
                    "stargazers_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/stargazers",
                    "contributors_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/contributors",
                    "subscribers_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/subscribers",
                    "subscription_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/subscription",
                    "commits_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/merges",
                    "archive_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/downloads",
                    "issues_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/labels{/name}",
                    "releases_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/tomastrajan/angular-ngrx-material-starter/deployments",
                    "created_at": "2017-05-10T20:13:47Z",
                    "updated_at": "2018-10-30T18:59:47Z",
                    "pushed_at": "2018-10-30T18:37:42Z",
                    "git_url": "git://github.com/tomastrajan/angular-ngrx-material-starter.git",
                    "ssh_url": "git@github.com:tomastrajan/angular-ngrx-material-starter.git",
                    "clone_url": "https://github.com/tomastrajan/angular-ngrx-material-starter.git",
                    "svn_url": "https://github.com/tomastrajan/angular-ngrx-material-starter",
                    "homepage": "https://tomastrajan.github.io/angular-ngrx-material-starter",
                    "size": 16128,
                    "stargazers_count": 951,
                    "watchers_count": 951,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 310,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 23,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular-cli",
                        "angular-material",
                        "bootstrap4",
                        "lazy-loading",
                        "material-design",
                        "ngrx",
                        "starter-project"
                    ],
                    "forks": 310,
                    "open_issues": 23,
                    "watchers": 951,
                    "default_branch": "master",
                    "score": 75.510796
                },
                {
                    "id": 5676886,
                    "node_id": "MDEwOlJlcG9zaXRvcnk1Njc2ODg2",
                    "name": "angular-app",
                    "full_name": "angular-app/angular-app",
                    "private": false,
                    "owner": {
                        "login": "angular-app",
                        "id": 2279752,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzk3NTI=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/2279752?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular-app",
                        "html_url": "https://github.com/angular-app",
                        "followers_url": "https://api.github.com/users/angular-app/followers",
                        "following_url": "https://api.github.com/users/angular-app/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular-app/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular-app/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular-app/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular-app/orgs",
                        "repos_url": "https://api.github.com/users/angular-app/repos",
                        "events_url": "https://api.github.com/users/angular-app/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular-app/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular-app/angular-app",
                    "description": "Reference application for AngularJS",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular-app/angular-app",
                    "forks_url": "https://api.github.com/repos/angular-app/angular-app/forks",
                    "keys_url": "https://api.github.com/repos/angular-app/angular-app/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular-app/angular-app/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular-app/angular-app/teams",
                    "hooks_url": "https://api.github.com/repos/angular-app/angular-app/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular-app/angular-app/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular-app/angular-app/events",
                    "assignees_url": "https://api.github.com/repos/angular-app/angular-app/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular-app/angular-app/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular-app/angular-app/tags",
                    "blobs_url": "https://api.github.com/repos/angular-app/angular-app/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular-app/angular-app/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular-app/angular-app/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular-app/angular-app/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular-app/angular-app/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular-app/angular-app/languages",
                    "stargazers_url": "https://api.github.com/repos/angular-app/angular-app/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular-app/angular-app/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular-app/angular-app/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular-app/angular-app/subscription",
                    "commits_url": "https://api.github.com/repos/angular-app/angular-app/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular-app/angular-app/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular-app/angular-app/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular-app/angular-app/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular-app/angular-app/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular-app/angular-app/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular-app/angular-app/merges",
                    "archive_url": "https://api.github.com/repos/angular-app/angular-app/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular-app/angular-app/downloads",
                    "issues_url": "https://api.github.com/repos/angular-app/angular-app/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular-app/angular-app/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular-app/angular-app/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular-app/angular-app/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular-app/angular-app/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular-app/angular-app/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular-app/angular-app/deployments",
                    "created_at": "2012-09-04T18:47:38Z",
                    "updated_at": "2018-10-30T15:03:57Z",
                    "pushed_at": "2017-05-18T04:21:00Z",
                    "git_url": "git://github.com/angular-app/angular-app.git",
                    "ssh_url": "git@github.com:angular-app/angular-app.git",
                    "clone_url": "https://github.com/angular-app/angular-app.git",
                    "svn_url": "https://github.com/angular-app/angular-app",
                    "homepage": null,
                    "size": 1925,
                    "stargazers_count": 6052,
                    "watchers_count": 6052,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 1941,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 50,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 1941,
                    "open_issues": 50,
                    "watchers": 6052,
                    "default_branch": "master",
                    "score": 74.53899
                },
                {
                    "id": 17568233,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxNzU2ODIzMw==",
                    "name": "ng-demos",
                    "full_name": "johnpapa/ng-demos",
                    "private": false,
                    "owner": {
                        "login": "johnpapa",
                        "id": 1202528,
                        "node_id": "MDQ6VXNlcjEyMDI1Mjg=",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/1202528?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/johnpapa",
                        "html_url": "https://github.com/johnpapa",
                        "followers_url": "https://api.github.com/users/johnpapa/followers",
                        "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
                        "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
                        "organizations_url": "https://api.github.com/users/johnpapa/orgs",
                        "repos_url": "https://api.github.com/users/johnpapa/repos",
                        "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/johnpapa/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/johnpapa/ng-demos",
                    "description": "variety of angular demos",
                    "fork": false,
                    "url": "https://api.github.com/repos/johnpapa/ng-demos",
                    "forks_url": "https://api.github.com/repos/johnpapa/ng-demos/forks",
                    "keys_url": "https://api.github.com/repos/johnpapa/ng-demos/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/johnpapa/ng-demos/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/johnpapa/ng-demos/teams",
                    "hooks_url": "https://api.github.com/repos/johnpapa/ng-demos/hooks",
                    "issue_events_url": "https://api.github.com/repos/johnpapa/ng-demos/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/johnpapa/ng-demos/events",
                    "assignees_url": "https://api.github.com/repos/johnpapa/ng-demos/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/johnpapa/ng-demos/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/johnpapa/ng-demos/tags",
                    "blobs_url": "https://api.github.com/repos/johnpapa/ng-demos/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/johnpapa/ng-demos/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/johnpapa/ng-demos/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/johnpapa/ng-demos/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/johnpapa/ng-demos/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/johnpapa/ng-demos/languages",
                    "stargazers_url": "https://api.github.com/repos/johnpapa/ng-demos/stargazers",
                    "contributors_url": "https://api.github.com/repos/johnpapa/ng-demos/contributors",
                    "subscribers_url": "https://api.github.com/repos/johnpapa/ng-demos/subscribers",
                    "subscription_url": "https://api.github.com/repos/johnpapa/ng-demos/subscription",
                    "commits_url": "https://api.github.com/repos/johnpapa/ng-demos/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/johnpapa/ng-demos/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/johnpapa/ng-demos/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/johnpapa/ng-demos/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/johnpapa/ng-demos/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/johnpapa/ng-demos/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/johnpapa/ng-demos/merges",
                    "archive_url": "https://api.github.com/repos/johnpapa/ng-demos/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/johnpapa/ng-demos/downloads",
                    "issues_url": "https://api.github.com/repos/johnpapa/ng-demos/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/johnpapa/ng-demos/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/johnpapa/ng-demos/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/johnpapa/ng-demos/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/johnpapa/ng-demos/labels{/name}",
                    "releases_url": "https://api.github.com/repos/johnpapa/ng-demos/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/johnpapa/ng-demos/deployments",
                    "created_at": "2014-03-09T16:25:39Z",
                    "updated_at": "2018-10-30T12:01:58Z",
                    "pushed_at": "2017-09-28T09:29:18Z",
                    "git_url": "git://github.com/johnpapa/ng-demos.git",
                    "ssh_url": "git@github.com:johnpapa/ng-demos.git",
                    "clone_url": "https://github.com/johnpapa/ng-demos.git",
                    "svn_url": "https://github.com/johnpapa/ng-demos",
                    "homepage": null,
                    "size": 14066,
                    "stargazers_count": 1749,
                    "watchers_count": 1749,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 1095,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 41,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 1095,
                    "open_issues": 41,
                    "watchers": 1749,
                    "default_branch": "master",
                    "score": 74.03408
                },
                {
                    "id": 6804324,
                    "node_id": "MDEwOlJlcG9zaXRvcnk2ODA0MzI0",
                    "name": "generator-angular",
                    "full_name": "yeoman/generator-angular",
                    "private": false,
                    "owner": {
                        "login": "yeoman",
                        "id": 1714870,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE3MTQ4NzA=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/1714870?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/yeoman",
                        "html_url": "https://github.com/yeoman",
                        "followers_url": "https://api.github.com/users/yeoman/followers",
                        "following_url": "https://api.github.com/users/yeoman/following{/other_user}",
                        "gists_url": "https://api.github.com/users/yeoman/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/yeoman/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/yeoman/subscriptions",
                        "organizations_url": "https://api.github.com/users/yeoman/orgs",
                        "repos_url": "https://api.github.com/users/yeoman/repos",
                        "events_url": "https://api.github.com/users/yeoman/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/yeoman/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/yeoman/generator-angular",
                    "description": "Yeoman generator for AngularJS",
                    "fork": false,
                    "url": "https://api.github.com/repos/yeoman/generator-angular",
                    "forks_url": "https://api.github.com/repos/yeoman/generator-angular/forks",
                    "keys_url": "https://api.github.com/repos/yeoman/generator-angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/yeoman/generator-angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/yeoman/generator-angular/teams",
                    "hooks_url": "https://api.github.com/repos/yeoman/generator-angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/yeoman/generator-angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/yeoman/generator-angular/events",
                    "assignees_url": "https://api.github.com/repos/yeoman/generator-angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/yeoman/generator-angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/yeoman/generator-angular/tags",
                    "blobs_url": "https://api.github.com/repos/yeoman/generator-angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/yeoman/generator-angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/yeoman/generator-angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/yeoman/generator-angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/yeoman/generator-angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/yeoman/generator-angular/languages",
                    "stargazers_url": "https://api.github.com/repos/yeoman/generator-angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/yeoman/generator-angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/yeoman/generator-angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/yeoman/generator-angular/subscription",
                    "commits_url": "https://api.github.com/repos/yeoman/generator-angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/yeoman/generator-angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/yeoman/generator-angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/yeoman/generator-angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/yeoman/generator-angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/yeoman/generator-angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/yeoman/generator-angular/merges",
                    "archive_url": "https://api.github.com/repos/yeoman/generator-angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/yeoman/generator-angular/downloads",
                    "issues_url": "https://api.github.com/repos/yeoman/generator-angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/yeoman/generator-angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/yeoman/generator-angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/yeoman/generator-angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/yeoman/generator-angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/yeoman/generator-angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/yeoman/generator-angular/deployments",
                    "created_at": "2012-11-21T22:43:39Z",
                    "updated_at": "2018-10-29T21:10:03Z",
                    "pushed_at": "2017-06-08T15:28:19Z",
                    "git_url": "git://github.com/yeoman/generator-angular.git",
                    "ssh_url": "git@github.com:yeoman/generator-angular.git",
                    "clone_url": "https://github.com/yeoman/generator-angular.git",
                    "svn_url": "https://github.com/yeoman/generator-angular",
                    "homepage": "http://yeoman.io",
                    "size": 1520,
                    "stargazers_count": 5934,
                    "watchers_count": 5934,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": false,
                    "has_downloads": true,
                    "has_wiki": false,
                    "has_pages": false,
                    "forks_count": 1626,
                    "mirror_url": null,
                    "archived": true,
                    "open_issues_count": 90,
                    "license": null,
                    "topics": [],
                    "forks": 1626,
                    "open_issues": 90,
                    "watchers": 5934,
                    "default_branch": "master",
                    "score": 73.696846
                },
                {
                    "id": 47585378,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0NzU4NTM3OA==",
                    "name": "angular2-seed",
                    "full_name": "angular/angular2-seed",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/angular2-seed",
                    "description": null,
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/angular2-seed",
                    "forks_url": "https://api.github.com/repos/angular/angular2-seed/forks",
                    "keys_url": "https://api.github.com/repos/angular/angular2-seed/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/angular2-seed/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/angular2-seed/teams",
                    "hooks_url": "https://api.github.com/repos/angular/angular2-seed/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/angular2-seed/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/angular2-seed/events",
                    "assignees_url": "https://api.github.com/repos/angular/angular2-seed/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/angular2-seed/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/angular2-seed/tags",
                    "blobs_url": "https://api.github.com/repos/angular/angular2-seed/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/angular2-seed/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/angular2-seed/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/angular2-seed/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/angular2-seed/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/angular2-seed/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/angular2-seed/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/angular2-seed/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/angular2-seed/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/angular2-seed/subscription",
                    "commits_url": "https://api.github.com/repos/angular/angular2-seed/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/angular2-seed/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/angular2-seed/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/angular2-seed/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/angular2-seed/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/angular2-seed/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/angular2-seed/merges",
                    "archive_url": "https://api.github.com/repos/angular/angular2-seed/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/angular2-seed/downloads",
                    "issues_url": "https://api.github.com/repos/angular/angular2-seed/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/angular2-seed/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/angular2-seed/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/angular2-seed/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/angular2-seed/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/angular2-seed/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/angular2-seed/deployments",
                    "created_at": "2015-12-07T23:17:14Z",
                    "updated_at": "2018-10-15T05:18:10Z",
                    "pushed_at": "2017-10-12T18:06:18Z",
                    "git_url": "git://github.com/angular/angular2-seed.git",
                    "ssh_url": "git@github.com:angular/angular2-seed.git",
                    "clone_url": "https://github.com/angular/angular2-seed.git",
                    "svn_url": "https://github.com/angular/angular2-seed",
                    "homepage": null,
                    "size": 182,
                    "stargazers_count": 1043,
                    "watchers_count": 1043,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 739,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 23,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 739,
                    "open_issues": 23,
                    "watchers": 1043,
                    "default_branch": "master",
                    "score": 73.46082
                },
                {
                    "id": 5718947,
                    "node_id": "MDEwOlJlcG9zaXRvcnk1NzE4OTQ3",
                    "name": "angular-strap",
                    "full_name": "mgcrea/angular-strap",
                    "private": false,
                    "owner": {
                        "login": "mgcrea",
                        "id": 108273,
                        "node_id": "MDQ6VXNlcjEwODI3Mw==",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/108273?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/mgcrea",
                        "html_url": "https://github.com/mgcrea",
                        "followers_url": "https://api.github.com/users/mgcrea/followers",
                        "following_url": "https://api.github.com/users/mgcrea/following{/other_user}",
                        "gists_url": "https://api.github.com/users/mgcrea/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/mgcrea/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/mgcrea/subscriptions",
                        "organizations_url": "https://api.github.com/users/mgcrea/orgs",
                        "repos_url": "https://api.github.com/users/mgcrea/repos",
                        "events_url": "https://api.github.com/users/mgcrea/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/mgcrea/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/mgcrea/angular-strap",
                    "description": "AngularJS 1.2+ native directives for Bootstrap 3.",
                    "fork": false,
                    "url": "https://api.github.com/repos/mgcrea/angular-strap",
                    "forks_url": "https://api.github.com/repos/mgcrea/angular-strap/forks",
                    "keys_url": "https://api.github.com/repos/mgcrea/angular-strap/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/mgcrea/angular-strap/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/mgcrea/angular-strap/teams",
                    "hooks_url": "https://api.github.com/repos/mgcrea/angular-strap/hooks",
                    "issue_events_url": "https://api.github.com/repos/mgcrea/angular-strap/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/mgcrea/angular-strap/events",
                    "assignees_url": "https://api.github.com/repos/mgcrea/angular-strap/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/mgcrea/angular-strap/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/mgcrea/angular-strap/tags",
                    "blobs_url": "https://api.github.com/repos/mgcrea/angular-strap/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/mgcrea/angular-strap/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/mgcrea/angular-strap/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/mgcrea/angular-strap/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/mgcrea/angular-strap/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/mgcrea/angular-strap/languages",
                    "stargazers_url": "https://api.github.com/repos/mgcrea/angular-strap/stargazers",
                    "contributors_url": "https://api.github.com/repos/mgcrea/angular-strap/contributors",
                    "subscribers_url": "https://api.github.com/repos/mgcrea/angular-strap/subscribers",
                    "subscription_url": "https://api.github.com/repos/mgcrea/angular-strap/subscription",
                    "commits_url": "https://api.github.com/repos/mgcrea/angular-strap/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/mgcrea/angular-strap/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/mgcrea/angular-strap/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/mgcrea/angular-strap/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/mgcrea/angular-strap/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/mgcrea/angular-strap/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/mgcrea/angular-strap/merges",
                    "archive_url": "https://api.github.com/repos/mgcrea/angular-strap/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/mgcrea/angular-strap/downloads",
                    "issues_url": "https://api.github.com/repos/mgcrea/angular-strap/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/mgcrea/angular-strap/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/mgcrea/angular-strap/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/mgcrea/angular-strap/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/mgcrea/angular-strap/labels{/name}",
                    "releases_url": "https://api.github.com/repos/mgcrea/angular-strap/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/mgcrea/angular-strap/deployments",
                    "created_at": "2012-09-07T15:50:43Z",
                    "updated_at": "2018-10-21T02:14:30Z",
                    "pushed_at": "2018-06-08T09:16:26Z",
                    "git_url": "git://github.com/mgcrea/angular-strap.git",
                    "ssh_url": "git@github.com:mgcrea/angular-strap.git",
                    "clone_url": "https://github.com/mgcrea/angular-strap.git",
                    "svn_url": "https://github.com/mgcrea/angular-strap",
                    "homepage": "mgcrea.github.io/angular-strap",
                    "size": 11588,
                    "stargazers_count": 6005,
                    "watchers_count": 6005,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1519,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 526,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 1519,
                    "open_issues": 526,
                    "watchers": 6005,
                    "default_branch": "master",
                    "score": 73.24468
                },
                {
                    "id": 32654500,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzMjY1NDUwMA==",
                    "name": "angular-seed",
                    "full_name": "mgechev/angular-seed",
                    "private": false,
                    "owner": {
                        "login": "mgechev",
                        "id": 455023,
                        "node_id": "MDQ6VXNlcjQ1NTAyMw==",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/455023?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/mgechev",
                        "html_url": "https://github.com/mgechev",
                        "followers_url": "https://api.github.com/users/mgechev/followers",
                        "following_url": "https://api.github.com/users/mgechev/following{/other_user}",
                        "gists_url": "https://api.github.com/users/mgechev/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/mgechev/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/mgechev/subscriptions",
                        "organizations_url": "https://api.github.com/users/mgechev/orgs",
                        "repos_url": "https://api.github.com/users/mgechev/repos",
                        "events_url": "https://api.github.com/users/mgechev/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/mgechev/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/mgechev/angular-seed",
                    "description": "Extensible, reliable, modular, PWA ready starter project for Angular (2 and beyond) with statically typed build and AoT compilation",
                    "fork": false,
                    "url": "https://api.github.com/repos/mgechev/angular-seed",
                    "forks_url": "https://api.github.com/repos/mgechev/angular-seed/forks",
                    "keys_url": "https://api.github.com/repos/mgechev/angular-seed/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/mgechev/angular-seed/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/mgechev/angular-seed/teams",
                    "hooks_url": "https://api.github.com/repos/mgechev/angular-seed/hooks",
                    "issue_events_url": "https://api.github.com/repos/mgechev/angular-seed/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/mgechev/angular-seed/events",
                    "assignees_url": "https://api.github.com/repos/mgechev/angular-seed/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/mgechev/angular-seed/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/mgechev/angular-seed/tags",
                    "blobs_url": "https://api.github.com/repos/mgechev/angular-seed/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/mgechev/angular-seed/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/mgechev/angular-seed/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/mgechev/angular-seed/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/mgechev/angular-seed/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/mgechev/angular-seed/languages",
                    "stargazers_url": "https://api.github.com/repos/mgechev/angular-seed/stargazers",
                    "contributors_url": "https://api.github.com/repos/mgechev/angular-seed/contributors",
                    "subscribers_url": "https://api.github.com/repos/mgechev/angular-seed/subscribers",
                    "subscription_url": "https://api.github.com/repos/mgechev/angular-seed/subscription",
                    "commits_url": "https://api.github.com/repos/mgechev/angular-seed/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/mgechev/angular-seed/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/mgechev/angular-seed/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/mgechev/angular-seed/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/mgechev/angular-seed/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/mgechev/angular-seed/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/mgechev/angular-seed/merges",
                    "archive_url": "https://api.github.com/repos/mgechev/angular-seed/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/mgechev/angular-seed/downloads",
                    "issues_url": "https://api.github.com/repos/mgechev/angular-seed/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/mgechev/angular-seed/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/mgechev/angular-seed/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/mgechev/angular-seed/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/mgechev/angular-seed/labels{/name}",
                    "releases_url": "https://api.github.com/repos/mgechev/angular-seed/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/mgechev/angular-seed/deployments",
                    "created_at": "2015-03-21T23:36:28Z",
                    "updated_at": "2018-10-30T17:50:48Z",
                    "pushed_at": "2018-10-30T21:33:49Z",
                    "git_url": "git://github.com/mgechev/angular-seed.git",
                    "ssh_url": "git@github.com:mgechev/angular-seed.git",
                    "clone_url": "https://github.com/mgechev/angular-seed.git",
                    "svn_url": "https://github.com/mgechev/angular-seed",
                    "homepage": "https://mgechev.github.io/angular-seed",
                    "size": 5135,
                    "stargazers_count": 4770,
                    "watchers_count": 4770,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1711,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 17,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular-applications",
                        "aot-compilation",
                        "rollup",
                        "seed",
                        "typescript"
                    ],
                    "forks": 1711,
                    "open_issues": 17,
                    "watchers": 4770,
                    "default_branch": "master",
                    "score": 73.22684
                },
                {
                    "id": 42195451,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0MjE5NTQ1MQ==",
                    "name": "angular2-rxjs-chat",
                    "full_name": "ng-book/angular2-rxjs-chat",
                    "private": false,
                    "owner": {
                        "login": "ng-book",
                        "id": 13290168,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMjkwMTY4",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/13290168?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/ng-book",
                        "html_url": "https://github.com/ng-book",
                        "followers_url": "https://api.github.com/users/ng-book/followers",
                        "following_url": "https://api.github.com/users/ng-book/following{/other_user}",
                        "gists_url": "https://api.github.com/users/ng-book/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/ng-book/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/ng-book/subscriptions",
                        "organizations_url": "https://api.github.com/users/ng-book/orgs",
                        "repos_url": "https://api.github.com/users/ng-book/repos",
                        "events_url": "https://api.github.com/users/ng-book/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/ng-book/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/ng-book/angular2-rxjs-chat",
                    "description": "Example Chat Application using RxJS and Angular 2",
                    "fork": false,
                    "url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat",
                    "forks_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/forks",
                    "keys_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/teams",
                    "hooks_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/hooks",
                    "issue_events_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/events",
                    "assignees_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/tags",
                    "blobs_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/languages",
                    "stargazers_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/stargazers",
                    "contributors_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/contributors",
                    "subscribers_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/subscribers",
                    "subscription_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/subscription",
                    "commits_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/merges",
                    "archive_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/downloads",
                    "issues_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/labels{/name}",
                    "releases_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/ng-book/angular2-rxjs-chat/deployments",
                    "created_at": "2015-09-09T18:03:49Z",
                    "updated_at": "2018-10-31T05:51:51Z",
                    "pushed_at": "2018-10-05T10:03:27Z",
                    "git_url": "git://github.com/ng-book/angular2-rxjs-chat.git",
                    "ssh_url": "git@github.com:ng-book/angular2-rxjs-chat.git",
                    "clone_url": "https://github.com/ng-book/angular2-rxjs-chat.git",
                    "svn_url": "https://github.com/ng-book/angular2-rxjs-chat",
                    "homepage": null,
                    "size": 2639,
                    "stargazers_count": 1555,
                    "watchers_count": 1555,
                    "language": "CSS",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 515,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 33,
                    "license": null,
                    "topics": [],
                    "forks": 515,
                    "open_issues": 33,
                    "watchers": 1555,
                    "default_branch": "master",
                    "score": 72.416565
                },
                {
                    "id": 31702454,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzMTcwMjQ1NA==",
                    "name": "quickstart",
                    "full_name": "angular/quickstart",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/quickstart",
                    "description": "Angular QuickStart - source from the documentation",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/quickstart",
                    "forks_url": "https://api.github.com/repos/angular/quickstart/forks",
                    "keys_url": "https://api.github.com/repos/angular/quickstart/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/quickstart/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/quickstart/teams",
                    "hooks_url": "https://api.github.com/repos/angular/quickstart/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/quickstart/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/quickstart/events",
                    "assignees_url": "https://api.github.com/repos/angular/quickstart/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/quickstart/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/quickstart/tags",
                    "blobs_url": "https://api.github.com/repos/angular/quickstart/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/quickstart/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/quickstart/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/quickstart/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/quickstart/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/quickstart/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/quickstart/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/quickstart/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/quickstart/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/quickstart/subscription",
                    "commits_url": "https://api.github.com/repos/angular/quickstart/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/quickstart/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/quickstart/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/quickstart/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/quickstart/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/quickstart/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/quickstart/merges",
                    "archive_url": "https://api.github.com/repos/angular/quickstart/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/quickstart/downloads",
                    "issues_url": "https://api.github.com/repos/angular/quickstart/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/quickstart/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/quickstart/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/quickstart/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/quickstart/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/quickstart/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/quickstart/deployments",
                    "created_at": "2015-03-05T07:59:59Z",
                    "updated_at": "2018-10-30T13:40:28Z",
                    "pushed_at": "2018-07-26T16:58:04Z",
                    "git_url": "git://github.com/angular/quickstart.git",
                    "ssh_url": "git@github.com:angular/quickstart.git",
                    "clone_url": "https://github.com/angular/quickstart.git",
                    "svn_url": "https://github.com/angular/quickstart",
                    "homepage": "",
                    "size": 1394,
                    "stargazers_count": 3220,
                    "watchers_count": 3220,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 3442,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 22,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 3442,
                    "open_issues": 22,
                    "watchers": 3220,
                    "default_branch": "master",
                    "score": 71.992294
                },
                {
                    "id": 6198699,
                    "node_id": "MDEwOlJlcG9zaXRvcnk2MTk4Njk5",
                    "name": "ui-grid",
                    "full_name": "angular-ui/ui-grid",
                    "private": false,
                    "owner": {
                        "login": "angular-ui",
                        "id": 1530011,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE1MzAwMTE=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/1530011?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular-ui",
                        "html_url": "https://github.com/angular-ui",
                        "followers_url": "https://api.github.com/users/angular-ui/followers",
                        "following_url": "https://api.github.com/users/angular-ui/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular-ui/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular-ui/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular-ui/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular-ui/orgs",
                        "repos_url": "https://api.github.com/users/angular-ui/repos",
                        "events_url": "https://api.github.com/users/angular-ui/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular-ui/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular-ui/ui-grid",
                    "description": "UI Grid: an Angular Data Grid",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular-ui/ui-grid",
                    "forks_url": "https://api.github.com/repos/angular-ui/ui-grid/forks",
                    "keys_url": "https://api.github.com/repos/angular-ui/ui-grid/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular-ui/ui-grid/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular-ui/ui-grid/teams",
                    "hooks_url": "https://api.github.com/repos/angular-ui/ui-grid/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular-ui/ui-grid/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular-ui/ui-grid/events",
                    "assignees_url": "https://api.github.com/repos/angular-ui/ui-grid/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular-ui/ui-grid/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular-ui/ui-grid/tags",
                    "blobs_url": "https://api.github.com/repos/angular-ui/ui-grid/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular-ui/ui-grid/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular-ui/ui-grid/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular-ui/ui-grid/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular-ui/ui-grid/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular-ui/ui-grid/languages",
                    "stargazers_url": "https://api.github.com/repos/angular-ui/ui-grid/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular-ui/ui-grid/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular-ui/ui-grid/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular-ui/ui-grid/subscription",
                    "commits_url": "https://api.github.com/repos/angular-ui/ui-grid/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular-ui/ui-grid/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular-ui/ui-grid/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular-ui/ui-grid/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular-ui/ui-grid/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular-ui/ui-grid/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular-ui/ui-grid/merges",
                    "archive_url": "https://api.github.com/repos/angular-ui/ui-grid/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular-ui/ui-grid/downloads",
                    "issues_url": "https://api.github.com/repos/angular-ui/ui-grid/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular-ui/ui-grid/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular-ui/ui-grid/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular-ui/ui-grid/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular-ui/ui-grid/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular-ui/ui-grid/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular-ui/ui-grid/deployments",
                    "created_at": "2012-10-13T01:39:25Z",
                    "updated_at": "2018-10-31T05:07:11Z",
                    "pushed_at": "2018-10-30T22:23:36Z",
                    "git_url": "git://github.com/angular-ui/ui-grid.git",
                    "ssh_url": "git@github.com:angular-ui/ui-grid.git",
                    "clone_url": "https://github.com/angular-ui/ui-grid.git",
                    "svn_url": "https://github.com/angular-ui/ui-grid",
                    "homepage": "http://ui-grid.info",
                    "size": 17077,
                    "stargazers_count": 5216,
                    "watchers_count": 5216,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": false,
                    "has_pages": false,
                    "forks_count": 2592,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 698,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "javascript",
                        "ui-grid"
                    ],
                    "forks": 2592,
                    "open_issues": 698,
                    "watchers": 5216,
                    "default_branch": "master",
                    "score": 71.70549
                },
                {
                    "id": 44948282,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0NDk0ODI4Mg==",
                    "name": "angular2-jwt",
                    "full_name": "auth0/angular2-jwt",
                    "private": false,
                    "owner": {
                        "login": "auth0",
                        "id": 2824157,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4MjQxNTc=",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/2824157?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/auth0",
                        "html_url": "https://github.com/auth0",
                        "followers_url": "https://api.github.com/users/auth0/followers",
                        "following_url": "https://api.github.com/users/auth0/following{/other_user}",
                        "gists_url": "https://api.github.com/users/auth0/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/auth0/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/auth0/subscriptions",
                        "organizations_url": "https://api.github.com/users/auth0/orgs",
                        "repos_url": "https://api.github.com/users/auth0/repos",
                        "events_url": "https://api.github.com/users/auth0/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/auth0/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/auth0/angular2-jwt",
                    "description": "Helper library for handling JWTs in Angular 2+ apps",
                    "fork": false,
                    "url": "https://api.github.com/repos/auth0/angular2-jwt",
                    "forks_url": "https://api.github.com/repos/auth0/angular2-jwt/forks",
                    "keys_url": "https://api.github.com/repos/auth0/angular2-jwt/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/auth0/angular2-jwt/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/auth0/angular2-jwt/teams",
                    "hooks_url": "https://api.github.com/repos/auth0/angular2-jwt/hooks",
                    "issue_events_url": "https://api.github.com/repos/auth0/angular2-jwt/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/auth0/angular2-jwt/events",
                    "assignees_url": "https://api.github.com/repos/auth0/angular2-jwt/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/auth0/angular2-jwt/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/auth0/angular2-jwt/tags",
                    "blobs_url": "https://api.github.com/repos/auth0/angular2-jwt/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/auth0/angular2-jwt/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/auth0/angular2-jwt/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/auth0/angular2-jwt/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/auth0/angular2-jwt/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/auth0/angular2-jwt/languages",
                    "stargazers_url": "https://api.github.com/repos/auth0/angular2-jwt/stargazers",
                    "contributors_url": "https://api.github.com/repos/auth0/angular2-jwt/contributors",
                    "subscribers_url": "https://api.github.com/repos/auth0/angular2-jwt/subscribers",
                    "subscription_url": "https://api.github.com/repos/auth0/angular2-jwt/subscription",
                    "commits_url": "https://api.github.com/repos/auth0/angular2-jwt/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/auth0/angular2-jwt/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/auth0/angular2-jwt/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/auth0/angular2-jwt/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/auth0/angular2-jwt/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/auth0/angular2-jwt/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/auth0/angular2-jwt/merges",
                    "archive_url": "https://api.github.com/repos/auth0/angular2-jwt/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/auth0/angular2-jwt/downloads",
                    "issues_url": "https://api.github.com/repos/auth0/angular2-jwt/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/auth0/angular2-jwt/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/auth0/angular2-jwt/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/auth0/angular2-jwt/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/auth0/angular2-jwt/labels{/name}",
                    "releases_url": "https://api.github.com/repos/auth0/angular2-jwt/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/auth0/angular2-jwt/deployments",
                    "created_at": "2015-10-26T05:37:39Z",
                    "updated_at": "2018-10-30T20:59:06Z",
                    "pushed_at": "2018-10-21T03:37:43Z",
                    "git_url": "git://github.com/auth0/angular2-jwt.git",
                    "ssh_url": "git@github.com:auth0/angular2-jwt.git",
                    "clone_url": "https://github.com/auth0/angular2-jwt.git",
                    "svn_url": "https://github.com/auth0/angular2-jwt",
                    "homepage": "",
                    "size": 481,
                    "stargazers_count": 1926,
                    "watchers_count": 1926,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 431,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 134,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 431,
                    "open_issues": 134,
                    "watchers": 1926,
                    "default_branch": "master",
                    "score": 71.45091
                },
                {
                    "id": 7639232,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3NjM5MjMy",
                    "name": "protractor",
                    "full_name": "angular/protractor",
                    "private": false,
                    "owner": {
                        "login": "angular",
                        "id": 139426,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular",
                        "html_url": "https://github.com/angular",
                        "followers_url": "https://api.github.com/users/angular/followers",
                        "following_url": "https://api.github.com/users/angular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular/orgs",
                        "repos_url": "https://api.github.com/users/angular/repos",
                        "events_url": "https://api.github.com/users/angular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular/protractor",
                    "description": "E2E test framework for Angular apps",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular/protractor",
                    "forks_url": "https://api.github.com/repos/angular/protractor/forks",
                    "keys_url": "https://api.github.com/repos/angular/protractor/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular/protractor/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular/protractor/teams",
                    "hooks_url": "https://api.github.com/repos/angular/protractor/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular/protractor/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular/protractor/events",
                    "assignees_url": "https://api.github.com/repos/angular/protractor/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular/protractor/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular/protractor/tags",
                    "blobs_url": "https://api.github.com/repos/angular/protractor/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular/protractor/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular/protractor/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular/protractor/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular/protractor/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular/protractor/languages",
                    "stargazers_url": "https://api.github.com/repos/angular/protractor/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular/protractor/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular/protractor/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular/protractor/subscription",
                    "commits_url": "https://api.github.com/repos/angular/protractor/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular/protractor/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular/protractor/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular/protractor/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular/protractor/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular/protractor/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular/protractor/merges",
                    "archive_url": "https://api.github.com/repos/angular/protractor/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular/protractor/downloads",
                    "issues_url": "https://api.github.com/repos/angular/protractor/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular/protractor/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular/protractor/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular/protractor/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular/protractor/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular/protractor/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular/protractor/deployments",
                    "created_at": "2013-01-16T04:30:53Z",
                    "updated_at": "2018-10-31T06:20:26Z",
                    "pushed_at": "2018-10-16T16:10:25Z",
                    "git_url": "git://github.com/angular/protractor.git",
                    "ssh_url": "git@github.com:angular/protractor.git",
                    "clone_url": "https://github.com/angular/protractor.git",
                    "svn_url": "https://github.com/angular/protractor",
                    "homepage": "http://www.protractortest.org",
                    "size": 8888,
                    "stargazers_count": 7857,
                    "watchers_count": 7857,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 2078,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 424,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "end-to-end",
                        "javascript",
                        "node",
                        "protractor",
                        "selenium",
                        "test",
                        "webdriver"
                    ],
                    "forks": 2078,
                    "open_issues": 424,
                    "watchers": 7857,
                    "default_branch": "master",
                    "score": 71.153275
                },
                {
                    "id": 8962069,
                    "node_id": "MDEwOlJlcG9zaXRvcnk4OTYyMDY5",
                    "name": "angularfire",
                    "full_name": "firebase/angularfire",
                    "private": false,
                    "owner": {
                        "login": "firebase",
                        "id": 1335026,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMzUwMjY=",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/1335026?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/firebase",
                        "html_url": "https://github.com/firebase",
                        "followers_url": "https://api.github.com/users/firebase/followers",
                        "following_url": "https://api.github.com/users/firebase/following{/other_user}",
                        "gists_url": "https://api.github.com/users/firebase/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/firebase/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/firebase/subscriptions",
                        "organizations_url": "https://api.github.com/users/firebase/orgs",
                        "repos_url": "https://api.github.com/users/firebase/repos",
                        "events_url": "https://api.github.com/users/firebase/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/firebase/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/firebase/angularfire",
                    "description": "AngularJS bindings for Firebase",
                    "fork": false,
                    "url": "https://api.github.com/repos/firebase/angularfire",
                    "forks_url": "https://api.github.com/repos/firebase/angularfire/forks",
                    "keys_url": "https://api.github.com/repos/firebase/angularfire/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/firebase/angularfire/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/firebase/angularfire/teams",
                    "hooks_url": "https://api.github.com/repos/firebase/angularfire/hooks",
                    "issue_events_url": "https://api.github.com/repos/firebase/angularfire/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/firebase/angularfire/events",
                    "assignees_url": "https://api.github.com/repos/firebase/angularfire/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/firebase/angularfire/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/firebase/angularfire/tags",
                    "blobs_url": "https://api.github.com/repos/firebase/angularfire/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/firebase/angularfire/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/firebase/angularfire/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/firebase/angularfire/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/firebase/angularfire/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/firebase/angularfire/languages",
                    "stargazers_url": "https://api.github.com/repos/firebase/angularfire/stargazers",
                    "contributors_url": "https://api.github.com/repos/firebase/angularfire/contributors",
                    "subscribers_url": "https://api.github.com/repos/firebase/angularfire/subscribers",
                    "subscription_url": "https://api.github.com/repos/firebase/angularfire/subscription",
                    "commits_url": "https://api.github.com/repos/firebase/angularfire/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/firebase/angularfire/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/firebase/angularfire/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/firebase/angularfire/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/firebase/angularfire/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/firebase/angularfire/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/firebase/angularfire/merges",
                    "archive_url": "https://api.github.com/repos/firebase/angularfire/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/firebase/angularfire/downloads",
                    "issues_url": "https://api.github.com/repos/firebase/angularfire/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/firebase/angularfire/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/firebase/angularfire/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/firebase/angularfire/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/firebase/angularfire/labels{/name}",
                    "releases_url": "https://api.github.com/repos/firebase/angularfire/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/firebase/angularfire/deployments",
                    "created_at": "2013-03-22T22:18:38Z",
                    "updated_at": "2018-10-29T09:59:04Z",
                    "pushed_at": "2018-10-03T08:32:48Z",
                    "git_url": "git://github.com/firebase/angularfire.git",
                    "ssh_url": "git@github.com:firebase/angularfire.git",
                    "clone_url": "https://github.com/firebase/angularfire.git",
                    "svn_url": "https://github.com/firebase/angularfire",
                    "homepage": "",
                    "size": 1929,
                    "stargazers_count": 2755,
                    "watchers_count": 2755,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 689,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 34,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 689,
                    "open_issues": 34,
                    "watchers": 2755,
                    "default_branch": "master",
                    "score": 70.84883
                },
                {
                    "id": 68725774,
                    "node_id": "MDEwOlJlcG9zaXRvcnk2ODcyNTc3NA==",
                    "name": "aspnetcore-angular2-universal",
                    "full_name": "MarkPieszak/aspnetcore-angular2-universal",
                    "private": false,
                    "owner": {
                        "login": "MarkPieszak",
                        "id": 2574412,
                        "node_id": "MDQ6VXNlcjI1NzQ0MTI=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/2574412?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/MarkPieszak",
                        "html_url": "https://github.com/MarkPieszak",
                        "followers_url": "https://api.github.com/users/MarkPieszak/followers",
                        "following_url": "https://api.github.com/users/MarkPieszak/following{/other_user}",
                        "gists_url": "https://api.github.com/users/MarkPieszak/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/MarkPieszak/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/MarkPieszak/subscriptions",
                        "organizations_url": "https://api.github.com/users/MarkPieszak/orgs",
                        "repos_url": "https://api.github.com/users/MarkPieszak/repos",
                        "events_url": "https://api.github.com/users/MarkPieszak/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/MarkPieszak/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/MarkPieszak/aspnetcore-angular2-universal",
                    "description": "Angular Universal & ASP.NET Core 2.1 Advanced Starter - PWA w/ server-side rendering for SEO, Bootstrap, i18n internationalization, TypeScript, unit testing, WebAPI REST setup, SignalR, Swagger docs, and more! By @DevHelp-Online",
                    "fork": false,
                    "url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal",
                    "forks_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/forks",
                    "keys_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/teams",
                    "hooks_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/hooks",
                    "issue_events_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/events",
                    "assignees_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/tags",
                    "blobs_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/languages",
                    "stargazers_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/stargazers",
                    "contributors_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/contributors",
                    "subscribers_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/subscribers",
                    "subscription_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/subscription",
                    "commits_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/merges",
                    "archive_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/downloads",
                    "issues_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/labels{/name}",
                    "releases_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/MarkPieszak/aspnetcore-angular2-universal/deployments",
                    "created_at": "2016-09-20T15:25:10Z",
                    "updated_at": "2018-10-30T10:50:40Z",
                    "pushed_at": "2018-10-18T14:47:21Z",
                    "git_url": "git://github.com/MarkPieszak/aspnetcore-angular2-universal.git",
                    "ssh_url": "git@github.com:MarkPieszak/aspnetcore-angular2-universal.git",
                    "clone_url": "https://github.com/MarkPieszak/aspnetcore-angular2-universal.git",
                    "svn_url": "https://github.com/MarkPieszak/aspnetcore-angular2-universal",
                    "homepage": "http://aspnetcore-angular2-universal.azurewebsites.net",
                    "size": 5629,
                    "stargazers_count": 1278,
                    "watchers_count": 1278,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 441,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 85,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "angular2",
                        "angular4",
                        "angular5",
                        "angular6",
                        "aspnet",
                        "aspnetcore",
                        "dotnet-template",
                        "hmr",
                        "ngrx",
                        "ssr",
                        "universal"
                    ],
                    "forks": 441,
                    "open_issues": 85,
                    "watchers": 1278,
                    "default_branch": "master",
                    "score": 70.68134
                },
                {
                    "id": 13429048,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxMzQyOTA0OA==",
                    "name": "textAngular",
                    "full_name": "textAngular/textAngular",
                    "private": false,
                    "owner": {
                        "login": "textAngular",
                        "id": 26489107,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2NDg5MTA3",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/26489107?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/textAngular",
                        "html_url": "https://github.com/textAngular",
                        "followers_url": "https://api.github.com/users/textAngular/followers",
                        "following_url": "https://api.github.com/users/textAngular/following{/other_user}",
                        "gists_url": "https://api.github.com/users/textAngular/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/textAngular/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/textAngular/subscriptions",
                        "organizations_url": "https://api.github.com/users/textAngular/orgs",
                        "repos_url": "https://api.github.com/users/textAngular/repos",
                        "events_url": "https://api.github.com/users/textAngular/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/textAngular/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/textAngular/textAngular",
                    "description": "A radically powerful Text-Editor/Wysiwyg editor for Angular.js! Create multiple editor instances, two-way-bind HTML content, watch editors for changes and more!",
                    "fork": false,
                    "url": "https://api.github.com/repos/textAngular/textAngular",
                    "forks_url": "https://api.github.com/repos/textAngular/textAngular/forks",
                    "keys_url": "https://api.github.com/repos/textAngular/textAngular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/textAngular/textAngular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/textAngular/textAngular/teams",
                    "hooks_url": "https://api.github.com/repos/textAngular/textAngular/hooks",
                    "issue_events_url": "https://api.github.com/repos/textAngular/textAngular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/textAngular/textAngular/events",
                    "assignees_url": "https://api.github.com/repos/textAngular/textAngular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/textAngular/textAngular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/textAngular/textAngular/tags",
                    "blobs_url": "https://api.github.com/repos/textAngular/textAngular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/textAngular/textAngular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/textAngular/textAngular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/textAngular/textAngular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/textAngular/textAngular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/textAngular/textAngular/languages",
                    "stargazers_url": "https://api.github.com/repos/textAngular/textAngular/stargazers",
                    "contributors_url": "https://api.github.com/repos/textAngular/textAngular/contributors",
                    "subscribers_url": "https://api.github.com/repos/textAngular/textAngular/subscribers",
                    "subscription_url": "https://api.github.com/repos/textAngular/textAngular/subscription",
                    "commits_url": "https://api.github.com/repos/textAngular/textAngular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/textAngular/textAngular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/textAngular/textAngular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/textAngular/textAngular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/textAngular/textAngular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/textAngular/textAngular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/textAngular/textAngular/merges",
                    "archive_url": "https://api.github.com/repos/textAngular/textAngular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/textAngular/textAngular/downloads",
                    "issues_url": "https://api.github.com/repos/textAngular/textAngular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/textAngular/textAngular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/textAngular/textAngular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/textAngular/textAngular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/textAngular/textAngular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/textAngular/textAngular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/textAngular/textAngular/deployments",
                    "created_at": "2013-10-09T00:26:02Z",
                    "updated_at": "2018-10-30T20:01:41Z",
                    "pushed_at": "2018-08-21T18:05:50Z",
                    "git_url": "git://github.com/textAngular/textAngular.git",
                    "ssh_url": "git@github.com:textAngular/textAngular.git",
                    "clone_url": "https://github.com/textAngular/textAngular.git",
                    "svn_url": "https://github.com/textAngular/textAngular",
                    "homepage": null,
                    "size": 3987,
                    "stargazers_count": 3980,
                    "watchers_count": 3980,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1173,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 526,
                    "license": null,
                    "topics": [],
                    "forks": 1173,
                    "open_issues": 526,
                    "watchers": 3980,
                    "default_branch": "master",
                    "score": 70.37682
                },
                {
                    "id": 7889906,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3ODg5OTA2",
                    "name": "recipes-with-angular-js-examples",
                    "full_name": "fdietz/recipes-with-angular-js-examples",
                    "private": false,
                    "owner": {
                        "login": "fdietz",
                        "id": 20468,
                        "node_id": "MDQ6VXNlcjIwNDY4",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/20468?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/fdietz",
                        "html_url": "https://github.com/fdietz",
                        "followers_url": "https://api.github.com/users/fdietz/followers",
                        "following_url": "https://api.github.com/users/fdietz/following{/other_user}",
                        "gists_url": "https://api.github.com/users/fdietz/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/fdietz/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/fdietz/subscriptions",
                        "organizations_url": "https://api.github.com/users/fdietz/orgs",
                        "repos_url": "https://api.github.com/users/fdietz/repos",
                        "events_url": "https://api.github.com/users/fdietz/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/fdietz/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/fdietz/recipes-with-angular-js-examples",
                    "description": "Recipes with Angular.js",
                    "fork": false,
                    "url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples",
                    "forks_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/forks",
                    "keys_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/teams",
                    "hooks_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/hooks",
                    "issue_events_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/events",
                    "assignees_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/tags",
                    "blobs_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/languages",
                    "stargazers_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/stargazers",
                    "contributors_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/contributors",
                    "subscribers_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/subscribers",
                    "subscription_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/subscription",
                    "commits_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/merges",
                    "archive_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/downloads",
                    "issues_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/labels{/name}",
                    "releases_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/fdietz/recipes-with-angular-js-examples/deployments",
                    "created_at": "2013-01-29T10:23:30Z",
                    "updated_at": "2018-09-20T15:08:00Z",
                    "pushed_at": "2016-12-02T20:27:03Z",
                    "git_url": "git://github.com/fdietz/recipes-with-angular-js-examples.git",
                    "ssh_url": "git@github.com:fdietz/recipes-with-angular-js-examples.git",
                    "clone_url": "https://github.com/fdietz/recipes-with-angular-js-examples.git",
                    "svn_url": "https://github.com/fdietz/recipes-with-angular-js-examples",
                    "homepage": null,
                    "size": 1385,
                    "stargazers_count": 657,
                    "watchers_count": 657,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 927,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 16,
                    "license": null,
                    "topics": [],
                    "forks": 927,
                    "open_issues": 16,
                    "watchers": 657,
                    "default_branch": "master",
                    "score": 70.25316
                },
                {
                    "id": 41718185,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0MTcxODE4NQ==",
                    "name": "awesome-angular",
                    "full_name": "gdi2290/awesome-angular",
                    "private": false,
                    "owner": {
                        "login": "gdi2290",
                        "id": 1016365,
                        "node_id": "MDQ6VXNlcjEwMTYzNjU=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/1016365?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/gdi2290",
                        "html_url": "https://github.com/gdi2290",
                        "followers_url": "https://api.github.com/users/gdi2290/followers",
                        "following_url": "https://api.github.com/users/gdi2290/following{/other_user}",
                        "gists_url": "https://api.github.com/users/gdi2290/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/gdi2290/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/gdi2290/subscriptions",
                        "organizations_url": "https://api.github.com/users/gdi2290/orgs",
                        "repos_url": "https://api.github.com/users/gdi2290/repos",
                        "events_url": "https://api.github.com/users/gdi2290/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/gdi2290/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/gdi2290/awesome-angular",
                    "description": ":page_facing_up: A curated list of awesome Angular resources by @TipeIO",
                    "fork": false,
                    "url": "https://api.github.com/repos/gdi2290/awesome-angular",
                    "forks_url": "https://api.github.com/repos/gdi2290/awesome-angular/forks",
                    "keys_url": "https://api.github.com/repos/gdi2290/awesome-angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/gdi2290/awesome-angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/gdi2290/awesome-angular/teams",
                    "hooks_url": "https://api.github.com/repos/gdi2290/awesome-angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/gdi2290/awesome-angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/gdi2290/awesome-angular/events",
                    "assignees_url": "https://api.github.com/repos/gdi2290/awesome-angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/gdi2290/awesome-angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/gdi2290/awesome-angular/tags",
                    "blobs_url": "https://api.github.com/repos/gdi2290/awesome-angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/gdi2290/awesome-angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/gdi2290/awesome-angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/gdi2290/awesome-angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/gdi2290/awesome-angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/gdi2290/awesome-angular/languages",
                    "stargazers_url": "https://api.github.com/repos/gdi2290/awesome-angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/gdi2290/awesome-angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/gdi2290/awesome-angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/gdi2290/awesome-angular/subscription",
                    "commits_url": "https://api.github.com/repos/gdi2290/awesome-angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/gdi2290/awesome-angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/gdi2290/awesome-angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/gdi2290/awesome-angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/gdi2290/awesome-angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/gdi2290/awesome-angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/gdi2290/awesome-angular/merges",
                    "archive_url": "https://api.github.com/repos/gdi2290/awesome-angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/gdi2290/awesome-angular/downloads",
                    "issues_url": "https://api.github.com/repos/gdi2290/awesome-angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/gdi2290/awesome-angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/gdi2290/awesome-angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/gdi2290/awesome-angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/gdi2290/awesome-angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/gdi2290/awesome-angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/gdi2290/awesome-angular/deployments",
                    "created_at": "2015-09-01T05:12:10Z",
                    "updated_at": "2018-10-31T06:11:13Z",
                    "pushed_at": "2018-10-23T07:08:18Z",
                    "git_url": "git://github.com/gdi2290/awesome-angular.git",
                    "ssh_url": "git@github.com:gdi2290/awesome-angular.git",
                    "clone_url": "https://github.com/gdi2290/awesome-angular.git",
                    "svn_url": "https://github.com/gdi2290/awesome-angular",
                    "homepage": "https://tipe.io",
                    "size": 683,
                    "stargazers_count": 6064,
                    "watchers_count": 6064,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 915,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 2,
                    "license": {
                        "key": "cc0-1.0",
                        "name": "Creative Commons Zero v1.0 Universal",
                        "spdx_id": "CC0-1.0",
                        "url": "https://api.github.com/licenses/cc0-1.0",
                        "node_id": "MDc6TGljZW5zZTY="
                    },
                    "topics": [
                        "angular",
                        "angular2",
                        "angular4",
                        "awesome",
                        "awesome-list"
                    ],
                    "forks": 915,
                    "open_issues": 2,
                    "watchers": 6064,
                    "default_branch": "gh-pages",
                    "score": 70.24044
                },
                {
                    "id": 33820955,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzMzgyMDk1NQ==",
                    "name": "angular-education",
                    "full_name": "timjacobi/angular-education",
                    "private": false,
                    "owner": {
                        "login": "timjacobi",
                        "id": 2023165,
                        "node_id": "MDQ6VXNlcjIwMjMxNjU=",
                        "avatar_url": "https://avatars2.githubusercontent.com/u/2023165?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/timjacobi",
                        "html_url": "https://github.com/timjacobi",
                        "followers_url": "https://api.github.com/users/timjacobi/followers",
                        "following_url": "https://api.github.com/users/timjacobi/following{/other_user}",
                        "gists_url": "https://api.github.com/users/timjacobi/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/timjacobi/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/timjacobi/subscriptions",
                        "organizations_url": "https://api.github.com/users/timjacobi/orgs",
                        "repos_url": "https://api.github.com/users/timjacobi/repos",
                        "events_url": "https://api.github.com/users/timjacobi/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/timjacobi/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/timjacobi/angular-education",
                    "description": "A list of helpful material to develop using Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/timjacobi/angular-education",
                    "forks_url": "https://api.github.com/repos/timjacobi/angular-education/forks",
                    "keys_url": "https://api.github.com/repos/timjacobi/angular-education/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/timjacobi/angular-education/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/timjacobi/angular-education/teams",
                    "hooks_url": "https://api.github.com/repos/timjacobi/angular-education/hooks",
                    "issue_events_url": "https://api.github.com/repos/timjacobi/angular-education/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/timjacobi/angular-education/events",
                    "assignees_url": "https://api.github.com/repos/timjacobi/angular-education/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/timjacobi/angular-education/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/timjacobi/angular-education/tags",
                    "blobs_url": "https://api.github.com/repos/timjacobi/angular-education/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/timjacobi/angular-education/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/timjacobi/angular-education/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/timjacobi/angular-education/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/timjacobi/angular-education/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/timjacobi/angular-education/languages",
                    "stargazers_url": "https://api.github.com/repos/timjacobi/angular-education/stargazers",
                    "contributors_url": "https://api.github.com/repos/timjacobi/angular-education/contributors",
                    "subscribers_url": "https://api.github.com/repos/timjacobi/angular-education/subscribers",
                    "subscription_url": "https://api.github.com/repos/timjacobi/angular-education/subscription",
                    "commits_url": "https://api.github.com/repos/timjacobi/angular-education/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/timjacobi/angular-education/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/timjacobi/angular-education/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/timjacobi/angular-education/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/timjacobi/angular-education/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/timjacobi/angular-education/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/timjacobi/angular-education/merges",
                    "archive_url": "https://api.github.com/repos/timjacobi/angular-education/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/timjacobi/angular-education/downloads",
                    "issues_url": "https://api.github.com/repos/timjacobi/angular-education/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/timjacobi/angular-education/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/timjacobi/angular-education/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/timjacobi/angular-education/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/timjacobi/angular-education/labels{/name}",
                    "releases_url": "https://api.github.com/repos/timjacobi/angular-education/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/timjacobi/angular-education/deployments",
                    "created_at": "2015-04-12T14:54:19Z",
                    "updated_at": "2018-10-29T16:52:17Z",
                    "pushed_at": "2018-10-23T14:07:16Z",
                    "git_url": "git://github.com/timjacobi/angular-education.git",
                    "ssh_url": "git@github.com:timjacobi/angular-education.git",
                    "clone_url": "https://github.com/timjacobi/angular-education.git",
                    "svn_url": "https://github.com/timjacobi/angular-education",
                    "homepage": "",
                    "size": 214,
                    "stargazers_count": 5395,
                    "watchers_count": 5395,
                    "language": null,
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 983,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 4,
                    "license": null,
                    "topics": [
                        "angular",
                        "angular2-components",
                        "angular2-demo",
                        "angular2-typescript",
                        "ngrx"
                    ],
                    "forks": 983,
                    "open_issues": 4,
                    "watchers": 5395,
                    "default_branch": "master",
                    "score": 70.208405
                },
                {
                    "id": 22309429,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyMjMwOTQyOQ==",
                    "name": "angularjs-styleguide",
                    "full_name": "toddmotto/angularjs-styleguide",
                    "private": false,
                    "owner": {
                        "login": "toddmotto",
                        "id": 1655968,
                        "node_id": "MDQ6VXNlcjE2NTU5Njg=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/1655968?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/toddmotto",
                        "html_url": "https://github.com/toddmotto",
                        "followers_url": "https://api.github.com/users/toddmotto/followers",
                        "following_url": "https://api.github.com/users/toddmotto/following{/other_user}",
                        "gists_url": "https://api.github.com/users/toddmotto/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/toddmotto/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/toddmotto/subscriptions",
                        "organizations_url": "https://api.github.com/users/toddmotto/orgs",
                        "repos_url": "https://api.github.com/users/toddmotto/repos",
                        "events_url": "https://api.github.com/users/toddmotto/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/toddmotto/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/toddmotto/angularjs-styleguide",
                    "description": "AngularJS styleguide for teams",
                    "fork": false,
                    "url": "https://api.github.com/repos/toddmotto/angularjs-styleguide",
                    "forks_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/forks",
                    "keys_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/teams",
                    "hooks_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/hooks",
                    "issue_events_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/events",
                    "assignees_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/tags",
                    "blobs_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/languages",
                    "stargazers_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/stargazers",
                    "contributors_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/contributors",
                    "subscribers_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/subscribers",
                    "subscription_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/subscription",
                    "commits_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/merges",
                    "archive_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/downloads",
                    "issues_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/labels{/name}",
                    "releases_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/toddmotto/angularjs-styleguide/deployments",
                    "created_at": "2014-07-27T11:31:16Z",
                    "updated_at": "2018-10-30T14:34:54Z",
                    "pushed_at": "2018-06-26T19:10:55Z",
                    "git_url": "git://github.com/toddmotto/angularjs-styleguide.git",
                    "ssh_url": "git@github.com:toddmotto/angularjs-styleguide.git",
                    "clone_url": "https://github.com/toddmotto/angularjs-styleguide.git",
                    "svn_url": "https://github.com/toddmotto/angularjs-styleguide",
                    "homepage": "https://ultimateangular.com",
                    "size": 314,
                    "stargazers_count": 6126,
                    "watchers_count": 6126,
                    "language": null,
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 754,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 22,
                    "license": null,
                    "topics": [
                        "angular",
                        "angularjs",
                        "es2015",
                        "typescript"
                    ],
                    "forks": 754,
                    "open_issues": 22,
                    "watchers": 6126,
                    "default_branch": "master",
                    "score": 69.25432
                },
                {
                    "id": 21127643,
                    "node_id": "MDEwOlJlcG9zaXRvcnkyMTEyNzY0Mw==",
                    "name": "rdash-angular",
                    "full_name": "rdash/rdash-angular",
                    "private": false,
                    "owner": {
                        "login": "rdash",
                        "id": 8713663,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjg3MTM2NjM=",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/8713663?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/rdash",
                        "html_url": "https://github.com/rdash",
                        "followers_url": "https://api.github.com/users/rdash/followers",
                        "following_url": "https://api.github.com/users/rdash/following{/other_user}",
                        "gists_url": "https://api.github.com/users/rdash/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/rdash/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/rdash/subscriptions",
                        "organizations_url": "https://api.github.com/users/rdash/orgs",
                        "repos_url": "https://api.github.com/users/rdash/repos",
                        "events_url": "https://api.github.com/users/rdash/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/rdash/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/rdash/rdash-angular",
                    "description": "AngularJS implementation of the RDash admin dashboard theme",
                    "fork": false,
                    "url": "https://api.github.com/repos/rdash/rdash-angular",
                    "forks_url": "https://api.github.com/repos/rdash/rdash-angular/forks",
                    "keys_url": "https://api.github.com/repos/rdash/rdash-angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/rdash/rdash-angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/rdash/rdash-angular/teams",
                    "hooks_url": "https://api.github.com/repos/rdash/rdash-angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/rdash/rdash-angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/rdash/rdash-angular/events",
                    "assignees_url": "https://api.github.com/repos/rdash/rdash-angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/rdash/rdash-angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/rdash/rdash-angular/tags",
                    "blobs_url": "https://api.github.com/repos/rdash/rdash-angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/rdash/rdash-angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/rdash/rdash-angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/rdash/rdash-angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/rdash/rdash-angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/rdash/rdash-angular/languages",
                    "stargazers_url": "https://api.github.com/repos/rdash/rdash-angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/rdash/rdash-angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/rdash/rdash-angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/rdash/rdash-angular/subscription",
                    "commits_url": "https://api.github.com/repos/rdash/rdash-angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/rdash/rdash-angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/rdash/rdash-angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/rdash/rdash-angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/rdash/rdash-angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/rdash/rdash-angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/rdash/rdash-angular/merges",
                    "archive_url": "https://api.github.com/repos/rdash/rdash-angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/rdash/rdash-angular/downloads",
                    "issues_url": "https://api.github.com/repos/rdash/rdash-angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/rdash/rdash-angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/rdash/rdash-angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/rdash/rdash-angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/rdash/rdash-angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/rdash/rdash-angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/rdash/rdash-angular/deployments",
                    "created_at": "2014-06-23T13:42:14Z",
                    "updated_at": "2018-10-30T17:59:11Z",
                    "pushed_at": "2018-10-29T04:37:27Z",
                    "git_url": "git://github.com/rdash/rdash-angular.git",
                    "ssh_url": "git@github.com:rdash/rdash-angular.git",
                    "clone_url": "https://github.com/rdash/rdash-angular.git",
                    "svn_url": "https://github.com/rdash/rdash-angular",
                    "homepage": "http://rdash.github.io",
                    "size": 2021,
                    "stargazers_count": 4802,
                    "watchers_count": 4802,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 814,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 46,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 814,
                    "open_issues": 46,
                    "watchers": 4802,
                    "default_branch": "master",
                    "score": 68.849075
                },
                {
                    "id": 8108230,
                    "node_id": "MDEwOlJlcG9zaXRvcnk4MTA4MjMw",
                    "name": "angularjs-book",
                    "full_name": "shyamseshadri/angularjs-book",
                    "private": false,
                    "owner": {
                        "login": "shyamseshadri",
                        "id": 229613,
                        "node_id": "MDQ6VXNlcjIyOTYxMw==",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/229613?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/shyamseshadri",
                        "html_url": "https://github.com/shyamseshadri",
                        "followers_url": "https://api.github.com/users/shyamseshadri/followers",
                        "following_url": "https://api.github.com/users/shyamseshadri/following{/other_user}",
                        "gists_url": "https://api.github.com/users/shyamseshadri/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/shyamseshadri/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/shyamseshadri/subscriptions",
                        "organizations_url": "https://api.github.com/users/shyamseshadri/orgs",
                        "repos_url": "https://api.github.com/users/shyamseshadri/repos",
                        "events_url": "https://api.github.com/users/shyamseshadri/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/shyamseshadri/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/shyamseshadri/angularjs-book",
                    "description": "Examples and Code snippets from the first AngularJS O'Reilly book which is now heavily out of date!",
                    "fork": false,
                    "url": "https://api.github.com/repos/shyamseshadri/angularjs-book",
                    "forks_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/forks",
                    "keys_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/teams",
                    "hooks_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/hooks",
                    "issue_events_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/events",
                    "assignees_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/tags",
                    "blobs_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/languages",
                    "stargazers_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/stargazers",
                    "contributors_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/contributors",
                    "subscribers_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/subscribers",
                    "subscription_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/subscription",
                    "commits_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/merges",
                    "archive_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/downloads",
                    "issues_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/labels{/name}",
                    "releases_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/shyamseshadri/angularjs-book/deployments",
                    "created_at": "2013-02-09T09:45:28Z",
                    "updated_at": "2018-10-19T06:01:56Z",
                    "pushed_at": "2018-06-04T09:28:42Z",
                    "git_url": "git://github.com/shyamseshadri/angularjs-book.git",
                    "ssh_url": "git@github.com:shyamseshadri/angularjs-book.git",
                    "clone_url": "https://github.com/shyamseshadri/angularjs-book.git",
                    "svn_url": "https://github.com/shyamseshadri/angularjs-book",
                    "homepage": "",
                    "size": 1204,
                    "stargazers_count": 1692,
                    "watchers_count": 1692,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 1251,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 28,
                    "license": null,
                    "topics": [],
                    "forks": 1251,
                    "open_issues": 28,
                    "watchers": 1692,
                    "default_branch": "master",
                    "score": 68.782646
                },
                {
                    "id": 34740196,
                    "node_id": "MDEwOlJlcG9zaXRvcnkzNDc0MDE5Ng==",
                    "name": "angular2-authentication-sample",
                    "full_name": "auth0-blog/angular2-authentication-sample",
                    "private": false,
                    "owner": {
                        "login": "auth0-blog",
                        "id": 18200246,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE4MjAwMjQ2",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/18200246?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/auth0-blog",
                        "html_url": "https://github.com/auth0-blog",
                        "followers_url": "https://api.github.com/users/auth0-blog/followers",
                        "following_url": "https://api.github.com/users/auth0-blog/following{/other_user}",
                        "gists_url": "https://api.github.com/users/auth0-blog/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/auth0-blog/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/auth0-blog/subscriptions",
                        "organizations_url": "https://api.github.com/users/auth0-blog/orgs",
                        "repos_url": "https://api.github.com/users/auth0-blog/repos",
                        "events_url": "https://api.github.com/users/auth0-blog/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/auth0-blog/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/auth0-blog/angular2-authentication-sample",
                    "description": "This is a sample that shows how to add authentication to an Angular 2 (ng2) app",
                    "fork": false,
                    "url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample",
                    "forks_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/forks",
                    "keys_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/teams",
                    "hooks_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/hooks",
                    "issue_events_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/events",
                    "assignees_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/tags",
                    "blobs_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/languages",
                    "stargazers_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/stargazers",
                    "contributors_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/contributors",
                    "subscribers_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/subscribers",
                    "subscription_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/subscription",
                    "commits_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/merges",
                    "archive_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/downloads",
                    "issues_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/labels{/name}",
                    "releases_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/auth0-blog/angular2-authentication-sample/deployments",
                    "created_at": "2015-04-28T15:51:03Z",
                    "updated_at": "2018-10-25T00:32:32Z",
                    "pushed_at": "2017-10-16T19:06:39Z",
                    "git_url": "git://github.com/auth0-blog/angular2-authentication-sample.git",
                    "ssh_url": "git@github.com:auth0-blog/angular2-authentication-sample.git",
                    "clone_url": "https://github.com/auth0-blog/angular2-authentication-sample.git",
                    "svn_url": "https://github.com/auth0-blog/angular2-authentication-sample",
                    "homepage": null,
                    "size": 290,
                    "stargazers_count": 1012,
                    "watchers_count": 1012,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 378,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 29,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 378,
                    "open_issues": 29,
                    "watchers": 1012,
                    "default_branch": "master",
                    "score": 68.73245
                },
                {
                    "id": 73185970,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3MzE4NTk3MA==",
                    "name": "angular",
                    "full_name": "htmlk/angular",
                    "private": false,
                    "owner": {
                        "login": "htmlk",
                        "id": 21292186,
                        "node_id": "MDQ6VXNlcjIxMjkyMTg2",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/21292186?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/htmlk",
                        "html_url": "https://github.com/htmlk",
                        "followers_url": "https://api.github.com/users/htmlk/followers",
                        "following_url": "https://api.github.com/users/htmlk/following{/other_user}",
                        "gists_url": "https://api.github.com/users/htmlk/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/htmlk/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/htmlk/subscriptions",
                        "organizations_url": "https://api.github.com/users/htmlk/orgs",
                        "repos_url": "https://api.github.com/users/htmlk/repos",
                        "events_url": "https://api.github.com/users/htmlk/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/htmlk/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/htmlk/angular",
                    "description": "angular+bootstrap商城后台管理项目",
                    "fork": false,
                    "url": "https://api.github.com/repos/htmlk/angular",
                    "forks_url": "https://api.github.com/repos/htmlk/angular/forks",
                    "keys_url": "https://api.github.com/repos/htmlk/angular/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/htmlk/angular/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/htmlk/angular/teams",
                    "hooks_url": "https://api.github.com/repos/htmlk/angular/hooks",
                    "issue_events_url": "https://api.github.com/repos/htmlk/angular/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/htmlk/angular/events",
                    "assignees_url": "https://api.github.com/repos/htmlk/angular/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/htmlk/angular/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/htmlk/angular/tags",
                    "blobs_url": "https://api.github.com/repos/htmlk/angular/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/htmlk/angular/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/htmlk/angular/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/htmlk/angular/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/htmlk/angular/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/htmlk/angular/languages",
                    "stargazers_url": "https://api.github.com/repos/htmlk/angular/stargazers",
                    "contributors_url": "https://api.github.com/repos/htmlk/angular/contributors",
                    "subscribers_url": "https://api.github.com/repos/htmlk/angular/subscribers",
                    "subscription_url": "https://api.github.com/repos/htmlk/angular/subscription",
                    "commits_url": "https://api.github.com/repos/htmlk/angular/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/htmlk/angular/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/htmlk/angular/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/htmlk/angular/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/htmlk/angular/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/htmlk/angular/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/htmlk/angular/merges",
                    "archive_url": "https://api.github.com/repos/htmlk/angular/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/htmlk/angular/downloads",
                    "issues_url": "https://api.github.com/repos/htmlk/angular/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/htmlk/angular/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/htmlk/angular/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/htmlk/angular/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/htmlk/angular/labels{/name}",
                    "releases_url": "https://api.github.com/repos/htmlk/angular/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/htmlk/angular/deployments",
                    "created_at": "2016-11-08T12:56:53Z",
                    "updated_at": "2018-10-30T07:28:16Z",
                    "pushed_at": "2016-11-09T11:37:53Z",
                    "git_url": "git://github.com/htmlk/angular.git",
                    "ssh_url": "git@github.com:htmlk/angular.git",
                    "clone_url": "https://github.com/htmlk/angular.git",
                    "svn_url": "https://github.com/htmlk/angular",
                    "homepage": "",
                    "size": 1096,
                    "stargazers_count": 68,
                    "watchers_count": 68,
                    "language": "HTML",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 57,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 2,
                    "license": null,
                    "topics": [],
                    "forks": 57,
                    "open_issues": 2,
                    "watchers": 68,
                    "default_branch": "master",
                    "score": 68.68721
                },
                {
                    "id": 13911118,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxMzkxMTExOA==",
                    "name": "generator-angular-fullstack",
                    "full_name": "angular-fullstack/generator-angular-fullstack",
                    "private": false,
                    "owner": {
                        "login": "angular-fullstack",
                        "id": 12663106,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjYzMTA2",
                        "avatar_url": "https://avatars0.githubusercontent.com/u/12663106?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular-fullstack",
                        "html_url": "https://github.com/angular-fullstack",
                        "followers_url": "https://api.github.com/users/angular-fullstack/followers",
                        "following_url": "https://api.github.com/users/angular-fullstack/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular-fullstack/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular-fullstack/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular-fullstack/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular-fullstack/orgs",
                        "repos_url": "https://api.github.com/users/angular-fullstack/repos",
                        "events_url": "https://api.github.com/users/angular-fullstack/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular-fullstack/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular-fullstack/generator-angular-fullstack",
                    "description": "Yeoman generator for AngularJS with an Express server",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack",
                    "forks_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/forks",
                    "keys_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/teams",
                    "hooks_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/events",
                    "assignees_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/tags",
                    "blobs_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/languages",
                    "stargazers_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/subscription",
                    "commits_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/merges",
                    "archive_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/downloads",
                    "issues_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular-fullstack/generator-angular-fullstack/deployments",
                    "created_at": "2013-10-27T21:56:18Z",
                    "updated_at": "2018-10-30T17:29:30Z",
                    "pushed_at": "2018-10-25T22:40:44Z",
                    "git_url": "git://github.com/angular-fullstack/generator-angular-fullstack.git",
                    "ssh_url": "git@github.com:angular-fullstack/generator-angular-fullstack.git",
                    "clone_url": "https://github.com/angular-fullstack/generator-angular-fullstack.git",
                    "svn_url": "https://github.com/angular-fullstack/generator-angular-fullstack",
                    "homepage": "https://angular-fullstack.github.io/",
                    "size": 9588,
                    "stargazers_count": 6058,
                    "watchers_count": 6058,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1303,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 244,
                    "license": null,
                    "topics": [
                        "angular",
                        "babel",
                        "full-stack",
                        "javascript",
                        "mongodb",
                        "pug",
                        "sass",
                        "sequelize",
                        "typescript",
                        "yeoman",
                        "yeoman-generator"
                    ],
                    "forks": 1303,
                    "open_issues": 244,
                    "watchers": 6058,
                    "default_branch": "master",
                    "score": 68.4741
                },
                {
                    "id": 9076111,
                    "node_id": "MDEwOlJlcG9zaXRvcnk5MDc2MTEx",
                    "name": "angular-translate",
                    "full_name": "angular-translate/angular-translate",
                    "private": false,
                    "owner": {
                        "login": "angular-translate",
                        "id": 6117835,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjYxMTc4MzU=",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/6117835?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/angular-translate",
                        "html_url": "https://github.com/angular-translate",
                        "followers_url": "https://api.github.com/users/angular-translate/followers",
                        "following_url": "https://api.github.com/users/angular-translate/following{/other_user}",
                        "gists_url": "https://api.github.com/users/angular-translate/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/angular-translate/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/angular-translate/subscriptions",
                        "organizations_url": "https://api.github.com/users/angular-translate/orgs",
                        "repos_url": "https://api.github.com/users/angular-translate/repos",
                        "events_url": "https://api.github.com/users/angular-translate/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/angular-translate/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/angular-translate/angular-translate",
                    "description": "Translating your AngularJS 1.x apps",
                    "fork": false,
                    "url": "https://api.github.com/repos/angular-translate/angular-translate",
                    "forks_url": "https://api.github.com/repos/angular-translate/angular-translate/forks",
                    "keys_url": "https://api.github.com/repos/angular-translate/angular-translate/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/angular-translate/angular-translate/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/angular-translate/angular-translate/teams",
                    "hooks_url": "https://api.github.com/repos/angular-translate/angular-translate/hooks",
                    "issue_events_url": "https://api.github.com/repos/angular-translate/angular-translate/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/angular-translate/angular-translate/events",
                    "assignees_url": "https://api.github.com/repos/angular-translate/angular-translate/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/angular-translate/angular-translate/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/angular-translate/angular-translate/tags",
                    "blobs_url": "https://api.github.com/repos/angular-translate/angular-translate/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/angular-translate/angular-translate/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/angular-translate/angular-translate/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/angular-translate/angular-translate/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/angular-translate/angular-translate/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/angular-translate/angular-translate/languages",
                    "stargazers_url": "https://api.github.com/repos/angular-translate/angular-translate/stargazers",
                    "contributors_url": "https://api.github.com/repos/angular-translate/angular-translate/contributors",
                    "subscribers_url": "https://api.github.com/repos/angular-translate/angular-translate/subscribers",
                    "subscription_url": "https://api.github.com/repos/angular-translate/angular-translate/subscription",
                    "commits_url": "https://api.github.com/repos/angular-translate/angular-translate/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/angular-translate/angular-translate/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/angular-translate/angular-translate/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/angular-translate/angular-translate/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/angular-translate/angular-translate/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/angular-translate/angular-translate/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/angular-translate/angular-translate/merges",
                    "archive_url": "https://api.github.com/repos/angular-translate/angular-translate/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/angular-translate/angular-translate/downloads",
                    "issues_url": "https://api.github.com/repos/angular-translate/angular-translate/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/angular-translate/angular-translate/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/angular-translate/angular-translate/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/angular-translate/angular-translate/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/angular-translate/angular-translate/labels{/name}",
                    "releases_url": "https://api.github.com/repos/angular-translate/angular-translate/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/angular-translate/angular-translate/deployments",
                    "created_at": "2013-03-28T11:56:30Z",
                    "updated_at": "2018-10-29T13:29:36Z",
                    "pushed_at": "2018-10-10T15:04:53Z",
                    "git_url": "git://github.com/angular-translate/angular-translate.git",
                    "ssh_url": "git@github.com:angular-translate/angular-translate.git",
                    "clone_url": "https://github.com/angular-translate/angular-translate.git",
                    "svn_url": "https://github.com/angular-translate/angular-translate",
                    "homepage": "https://angular-translate.github.io",
                    "size": 3780,
                    "stargazers_count": 4414,
                    "watchers_count": 4414,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 795,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 42,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angularjs",
                        "bower",
                        "i18n",
                        "javascript",
                        "npm-package",
                        "translation"
                    ],
                    "forks": 795,
                    "open_issues": 42,
                    "watchers": 4414,
                    "default_branch": "master",
                    "score": 68.46319
                },
                {
                    "id": 70654484,
                    "node_id": "MDEwOlJlcG9zaXRvcnk3MDY1NDQ4NA==",
                    "name": "angular2-essential-training",
                    "full_name": "coursefiles/angular2-essential-training",
                    "private": false,
                    "owner": {
                        "login": "coursefiles",
                        "id": 22717033,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzE3MDMz",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/22717033?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/coursefiles",
                        "html_url": "https://github.com/coursefiles",
                        "followers_url": "https://api.github.com/users/coursefiles/followers",
                        "following_url": "https://api.github.com/users/coursefiles/following{/other_user}",
                        "gists_url": "https://api.github.com/users/coursefiles/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/coursefiles/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/coursefiles/subscriptions",
                        "organizations_url": "https://api.github.com/users/coursefiles/orgs",
                        "repos_url": "https://api.github.com/users/coursefiles/repos",
                        "events_url": "https://api.github.com/users/coursefiles/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/coursefiles/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/coursefiles/angular2-essential-training",
                    "description": "The repository for the project code for my course Angular Essential Training",
                    "fork": false,
                    "url": "https://api.github.com/repos/coursefiles/angular2-essential-training",
                    "forks_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/forks",
                    "keys_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/teams",
                    "hooks_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/hooks",
                    "issue_events_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/events",
                    "assignees_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/tags",
                    "blobs_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/languages",
                    "stargazers_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/stargazers",
                    "contributors_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/contributors",
                    "subscribers_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/subscribers",
                    "subscription_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/subscription",
                    "commits_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/merges",
                    "archive_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/downloads",
                    "issues_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/labels{/name}",
                    "releases_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/coursefiles/angular2-essential-training/deployments",
                    "created_at": "2016-10-12T02:26:00Z",
                    "updated_at": "2018-10-31T03:47:22Z",
                    "pushed_at": "2018-09-11T15:08:54Z",
                    "git_url": "git://github.com/coursefiles/angular2-essential-training.git",
                    "ssh_url": "git@github.com:coursefiles/angular2-essential-training.git",
                    "clone_url": "https://github.com/coursefiles/angular2-essential-training.git",
                    "svn_url": "https://github.com/coursefiles/angular2-essential-training",
                    "homepage": "https://www.linkedin.com/learning/angular-2-essential-training-2",
                    "size": 310,
                    "stargazers_count": 140,
                    "watchers_count": 140,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 840,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 5,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 840,
                    "open_issues": 5,
                    "watchers": 140,
                    "default_branch": "master",
                    "score": 68.30711
                },
                {
                    "id": 12219348,
                    "node_id": "MDEwOlJlcG9zaXRvcnkxMjIxOTM0OA==",
                    "name": "AngularJS-Toaster",
                    "full_name": "jirikavi/AngularJS-Toaster",
                    "private": false,
                    "owner": {
                        "login": "jirikavi",
                        "id": 5136908,
                        "node_id": "MDQ6VXNlcjUxMzY5MDg=",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/5136908?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/jirikavi",
                        "html_url": "https://github.com/jirikavi",
                        "followers_url": "https://api.github.com/users/jirikavi/followers",
                        "following_url": "https://api.github.com/users/jirikavi/following{/other_user}",
                        "gists_url": "https://api.github.com/users/jirikavi/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/jirikavi/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/jirikavi/subscriptions",
                        "organizations_url": "https://api.github.com/users/jirikavi/orgs",
                        "repos_url": "https://api.github.com/users/jirikavi/repos",
                        "events_url": "https://api.github.com/users/jirikavi/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/jirikavi/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/jirikavi/AngularJS-Toaster",
                    "description": "AngularJS Toaster is a customized version of \"toastr\" non-blocking notification javascript library.",
                    "fork": false,
                    "url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster",
                    "forks_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/forks",
                    "keys_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/teams",
                    "hooks_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/hooks",
                    "issue_events_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/events",
                    "assignees_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/tags",
                    "blobs_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/languages",
                    "stargazers_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/stargazers",
                    "contributors_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/contributors",
                    "subscribers_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/subscribers",
                    "subscription_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/subscription",
                    "commits_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/merges",
                    "archive_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/downloads",
                    "issues_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/labels{/name}",
                    "releases_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/jirikavi/AngularJS-Toaster/deployments",
                    "created_at": "2013-08-19T14:52:47Z",
                    "updated_at": "2018-10-30T06:19:09Z",
                    "pushed_at": "2017-12-12T20:28:33Z",
                    "git_url": "git://github.com/jirikavi/AngularJS-Toaster.git",
                    "ssh_url": "git@github.com:jirikavi/AngularJS-Toaster.git",
                    "clone_url": "https://github.com/jirikavi/AngularJS-Toaster.git",
                    "svn_url": "https://github.com/jirikavi/AngularJS-Toaster",
                    "homepage": null,
                    "size": 257,
                    "stargazers_count": 1249,
                    "watchers_count": 1249,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 287,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 11,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [],
                    "forks": 287,
                    "open_issues": 11,
                    "watchers": 1249,
                    "default_branch": "master",
                    "score": 67.3652
                },
                {
                    "id": 40403310,
                    "node_id": "MDEwOlJlcG9zaXRvcnk0MDQwMzMxMA==",
                    "name": "ngx-bootstrap",
                    "full_name": "valor-software/ngx-bootstrap",
                    "private": false,
                    "owner": {
                        "login": "valor-software",
                        "id": 6849042,
                        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY4NDkwNDI=",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/6849042?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/valor-software",
                        "html_url": "https://github.com/valor-software",
                        "followers_url": "https://api.github.com/users/valor-software/followers",
                        "following_url": "https://api.github.com/users/valor-software/following{/other_user}",
                        "gists_url": "https://api.github.com/users/valor-software/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/valor-software/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/valor-software/subscriptions",
                        "organizations_url": "https://api.github.com/users/valor-software/orgs",
                        "repos_url": "https://api.github.com/users/valor-software/repos",
                        "events_url": "https://api.github.com/users/valor-software/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/valor-software/received_events",
                        "type": "Organization",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/valor-software/ngx-bootstrap",
                    "description": "Fast and reliable Bootstrap widgets in Angular",
                    "fork": false,
                    "url": "https://api.github.com/repos/valor-software/ngx-bootstrap",
                    "forks_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/forks",
                    "keys_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/teams",
                    "hooks_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/hooks",
                    "issue_events_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/events",
                    "assignees_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/tags",
                    "blobs_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/languages",
                    "stargazers_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/stargazers",
                    "contributors_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/contributors",
                    "subscribers_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/subscribers",
                    "subscription_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/subscription",
                    "commits_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/merges",
                    "archive_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/downloads",
                    "issues_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/labels{/name}",
                    "releases_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/valor-software/ngx-bootstrap/deployments",
                    "created_at": "2015-08-08T13:13:57Z",
                    "updated_at": "2018-10-31T05:24:37Z",
                    "pushed_at": "2018-10-30T23:53:58Z",
                    "git_url": "git://github.com/valor-software/ngx-bootstrap.git",
                    "ssh_url": "git@github.com:valor-software/ngx-bootstrap.git",
                    "clone_url": "https://github.com/valor-software/ngx-bootstrap.git",
                    "svn_url": "https://github.com/valor-software/ngx-bootstrap",
                    "homepage": "https://valor-software.com/ngx-bootstrap",
                    "size": 10699,
                    "stargazers_count": 4381,
                    "watchers_count": 4381,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "forks_count": 1332,
                    "mirror_url": null,
                    "archived": false,
                    "open_issues_count": 396,
                    "license": {
                        "key": "mit",
                        "name": "MIT License",
                        "spdx_id": "MIT",
                        "url": "https://api.github.com/licenses/mit",
                        "node_id": "MDc6TGljZW5zZTEz"
                    },
                    "topics": [
                        "angular",
                        "bootstrap",
                        "carousel",
                        "components",
                        "datepicker",
                        "daterangepicker",
                        "modals",
                        "popover",
                        "select",
                        "sortable",
                        "typeahead",
                        "widgets"
                    ],
                    "forks": 1332,
                    "open_issues": 396,
                    "watchers": 4381,
                    "default_branch": "development",
                    "score": 67.25571
                }
            ]
        };
        this.repoInfo = a.items;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(a);
        /*return this.http.get(url, options)
          .pipe(map(response => {
            this.repoInfo = this.repoInfo.concat(response && response['items'] || []);
            return response;
          }),
            catchError(this.handleError('getAllUsers', []))
          ); */
    };
    RepoService.prototype.getRepoDetail = function (id) {
        return this.repoInfo.filter(function (item) { return item.id === Number(id); });
    };
    RepoService.prototype.clearRepoDetail = function () {
        return this.repoInfo = [];
    };
    RepoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _helpers_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], RepoService);
    return RepoService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/app.config */ "./src/app/_helpers/app.config.ts");
/* harmony import */ var _helpers_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/http-error-handler.service */ "./src/app/_helpers/http-error-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, httpErrorHandler) {
        this.http = http;
        this.userInfo = [];
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }
    UserService.prototype.getAllUsers = function (query, page) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].SERVICE.USER_SEARCH;
        var pageSize = _helpers_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].DATAPERPAGE;
        var obj = {
            'per_page': pageSize,
            'page': page,
            'q': query
        };
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: obj });
        var options = query ? { params: httpParams } : {};
        console.log(url);
        var a = {
            "total_count": 9,
            "incomplete_results": false,
            "items": [
                {
                    "login": "rahmanfadhil",
                    "id": 28192207,
                    "node_id": "MDQ6VXNlcjI4MTkyMjA3",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/28192207?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfadhil",
                    "html_url": "https://github.com/rahmanfadhil",
                    "followers_url": "https://api.github.com/users/rahmanfadhil/followers",
                    "following_url": "https://api.github.com/users/rahmanfadhil/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfadhil/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfadhil/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfadhil/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfadhil/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfadhil/repos",
                    "events_url": "https://api.github.com/users/rahmanfadhil/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfadhil/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 97.67221
                },
                {
                    "login": "rahmanfaaz",
                    "id": 22659209,
                    "node_id": "MDQ6VXNlcjIyNjU5MjA5",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/22659209?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfaaz",
                    "html_url": "https://github.com/rahmanfaaz",
                    "followers_url": "https://api.github.com/users/rahmanfaaz/followers",
                    "following_url": "https://api.github.com/users/rahmanfaaz/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfaaz/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfaaz/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfaaz/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfaaz/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfaaz/repos",
                    "events_url": "https://api.github.com/users/rahmanfaaz/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfaaz/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 36.557453
                },
                {
                    "login": "rahmanfasi",
                    "id": 25979200,
                    "node_id": "MDQ6VXNlcjI1OTc5MjAw",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/25979200?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfasi",
                    "html_url": "https://github.com/rahmanfasi",
                    "followers_url": "https://api.github.com/users/rahmanfasi/followers",
                    "following_url": "https://api.github.com/users/rahmanfasi/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfasi/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfasi/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfasi/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfasi/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfasi/repos",
                    "events_url": "https://api.github.com/users/rahmanfasi/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfasi/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 18.243162
                },
                {
                    "login": "rahmanfauzan",
                    "id": 29215502,
                    "node_id": "MDQ6VXNlcjI5MjE1NTAy",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/29215502?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfauzan",
                    "html_url": "https://github.com/rahmanfauzan",
                    "followers_url": "https://api.github.com/users/rahmanfauzan/followers",
                    "following_url": "https://api.github.com/users/rahmanfauzan/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfauzan/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfauzan/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfauzan/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfauzan/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfauzan/repos",
                    "events_url": "https://api.github.com/users/rahmanfauzan/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfauzan/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 18.22653
                },
                {
                    "login": "rahmanfadhli",
                    "id": 38275115,
                    "node_id": "MDQ6VXNlcjM4Mjc1MTE1",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/38275115?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfadhli",
                    "html_url": "https://github.com/rahmanfadhli",
                    "followers_url": "https://api.github.com/users/rahmanfadhli/followers",
                    "following_url": "https://api.github.com/users/rahmanfadhli/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfadhli/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfadhli/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfadhli/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfadhli/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfadhli/repos",
                    "events_url": "https://api.github.com/users/rahmanfadhli/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfadhli/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 18.180092
                },
                {
                    "login": "rahmanfarid",
                    "id": 40599386,
                    "node_id": "MDQ6VXNlcjQwNTk5Mzg2",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/40599386?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfarid",
                    "html_url": "https://github.com/rahmanfarid",
                    "followers_url": "https://api.github.com/users/rahmanfarid/followers",
                    "following_url": "https://api.github.com/users/rahmanfarid/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfarid/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfarid/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfarid/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfarid/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfarid/repos",
                    "events_url": "https://api.github.com/users/rahmanfarid/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfarid/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 18.150532
                },
                {
                    "login": "RahmanFard",
                    "id": 15854082,
                    "node_id": "MDQ6VXNlcjE1ODU0MDgy",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/15854082?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/RahmanFard",
                    "html_url": "https://github.com/RahmanFard",
                    "followers_url": "https://api.github.com/users/RahmanFard/followers",
                    "following_url": "https://api.github.com/users/RahmanFard/following{/other_user}",
                    "gists_url": "https://api.github.com/users/RahmanFard/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/RahmanFard/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/RahmanFard/subscriptions",
                    "organizations_url": "https://api.github.com/users/RahmanFard/orgs",
                    "repos_url": "https://api.github.com/users/RahmanFard/repos",
                    "events_url": "https://api.github.com/users/RahmanFard/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/RahmanFard/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 18.082104
                },
                {
                    "login": "Rahmanfatur",
                    "id": 20009945,
                    "node_id": "MDQ6VXNlcjIwMDA5OTQ1",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/20009945?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Rahmanfatur",
                    "html_url": "https://github.com/Rahmanfatur",
                    "followers_url": "https://api.github.com/users/Rahmanfatur/followers",
                    "following_url": "https://api.github.com/users/Rahmanfatur/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Rahmanfatur/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Rahmanfatur/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Rahmanfatur/subscriptions",
                    "organizations_url": "https://api.github.com/users/Rahmanfatur/orgs",
                    "repos_url": "https://api.github.com/users/Rahmanfatur/repos",
                    "events_url": "https://api.github.com/users/Rahmanfatur/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Rahmanfatur/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 16.605282
                },
                {
                    "login": "rahmanfasalu",
                    "id": 3534052,
                    "node_id": "MDQ6VXNlcjM1MzQwNTI=",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/3534052?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rahmanfasalu",
                    "html_url": "https://github.com/rahmanfasalu",
                    "followers_url": "https://api.github.com/users/rahmanfasalu/followers",
                    "following_url": "https://api.github.com/users/rahmanfasalu/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rahmanfasalu/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rahmanfasalu/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rahmanfasalu/subscriptions",
                    "organizations_url": "https://api.github.com/users/rahmanfasalu/orgs",
                    "repos_url": "https://api.github.com/users/rahmanfasalu/repos",
                    "events_url": "https://api.github.com/users/rahmanfasalu/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rahmanfasalu/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 16.605282
                }
            ]
        };
        this.userInfo = a.items;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(a);
        /*return this.http.get(url, options)
          .pipe(map(response => {
            this.userInfo = this.userInfo.concat(response && response['items'] || []);
            return response;
          }),
            catchError(this.handleError('getAllUsers', []))
          );*/
    };
    UserService.prototype.getUserDetail = function (id) {
        return this.userInfo.filter(function (item) { return item.id === Number(id); });
    };
    UserService.prototype.clearUserDetail = function () {
        return this.userInfo = [];
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _helpers_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div>   \n    <router-outlet></router-outlet>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _repo_repo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./repo/repo.component */ "./src/app/repo/repo.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _repo_repo_component__WEBPACK_IMPORTED_MODULE_14__["RepoComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services__WEBPACK_IMPORTED_MODULE_9__["RepoService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                _helpers__WEBPACK_IMPORTED_MODULE_8__["HttpErrorHandler"],
                _helpers__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _repo_repo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repo/repo.component */ "./src/app/repo/repo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");






var appRoutes = [
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'user/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'repo/:id', component: _repo_repo_component__WEBPACK_IMPORTED_MODULE_0__["RepoComponent"] },
    { path: '**', redirectTo: 'login' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-header-wrapper\">\n  <div class=\"header-left\">\n    <div class=\"header-title\">\n      <img src=\"../../assets/GitHub-Mark-Light-64px.png\" class=\"logo-mark\" />\n      <img src=\"../../assets/GitHub_Logo_White.png\" class=\"logo-light\" />\n      <span>Search</span>\n    </div>\n  </div>\n  <div class=\"header-right\">\n    <div class=\"header-search\">\n      <input type=\"text\" id=\"searchInput\" [(ngModel)]=\"searchparam\" name=\"searchparam\" placeholder=\"Type a name then enter, eg: fasalu\"\n        (keydown)=\"onKeyDownEvt($event)\">\n      <span class=\"user\">user: {{currentUser}} | <a [routerLink]=\"['/login']\">Logout</a></span>\n\n      <label>\n        <input type=\"radio\" name=\"search\" value=\"repo\" [(ngModel)]=\"searchType\"> Search Repo\n      </label>\n\n      <label>\n        <input type=\"radio\" name=\"search\" value=\"user\" [(ngModel)]=\"searchType\"> Search User\n      </label>\n\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n</div>\n<section class=\"item-list-wrapper\">\n  <h3 class=\"totalCount\" *ngIf=\"totalCount > 0 || totalRepoCount > 0\">{{totalCount || totalRepoCount}} results found\n    for {{searchparam}}</h3>\n  <p class=\"totalCount\" *ngIf=\"users.length <  totalCount\">( {{users.length }} profile loaded, scroll down for more\n    user profile.. )</p>\n  <p class=\"totalCount\" *ngIf=\"repos.length <  totalRepoCount\">( {{repos.length }} repo loaded, scroll down for more. )</p>\n\n  <div class=\"itemlist\" infinite-scroll [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollThrottle]=\"throttle\"\n    (scrolled)=\"onScrollDown()\">\n\n    <div *ngIf=\"totalCount > 0\" class=\"userList\">\n      <div *ngFor=\"let user of users\" class=\"user-tile\" [routerLink]=\"['/user',user.id]\">\n        <div class=\"thumbnail\">\n          <img [src]=\"user.avatar_url\">\n          <div class=\"caption\">\n            {{user.login}}\n          </div>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n\n\n    <div *ngIf=\"totalRepoCount > 0\" class=\"repoList\">\n      <div *ngFor=\"let repo of repos\" class=\"repo-tile\" [routerLink]=\"['/repo',repo.id]\">\n        <h3 class=\"title\" title=\"{{repo.name}}\"><span class=\"title-name\">{{repo.name | slice:0:23}}\n            {{ repo.name && repo.name.length > 23 ? '..' : ''}} </span>\n          <span class=\"owner\" *ngIf=\"repo.owner && repo.owner.login\" [routerLink]=\"['/user', repo.owner.id]\">\n            Owner : {{repo.owner.login}}</span></h3>\n        <div class=\"clear\"></div>\n        <div class=\"repo-language\" *ngIf=\"repo.language\"><span class=\"repo-language-color\"></span><span class=\"repo-language-txt\">{{repo.language}}</span></div>\n        <div class=\"clear\"></div>\n        <div class=\"additional-info\">\n          <span>watch:{{repo.watchers_count}}</span>\n          <span>star:{{repo.stargazers_count}}</span>\n          <span>fork:{{repo.fork}}</span>\n        </div>\n        <div class=\"clear\"></div>\n        <p>{{repo.description | slice:0:85 }} {{ repo.description && repo.description.length > 85 ? '...' : ''}}</p>\n        <div class=\"clear\"></div>\n\n        <div class=\"additional-info\">\n          <span>Licence:{{repo.license && repo.license.name || ''}}</span>\n          <span>Updated:{{repo.updated_at | date:fullDate}}</span>\n        </div>\n\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n\n  </div>\n</section>\n"

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
/* harmony import */ var _helpers_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_helpers/app.config */ "./src/app/_helpers/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
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
    function HomeComponent(userService, repoService) {
        this.userService = userService;
        this.repoService = repoService;
        this.throttle = 300;
        this.scrollDistance = 1;
        this.searchType = 'repo';
        /* search specefic variables */
        this.users = [];
        this.totalCount = 0;
        this.repos = [];
        this.totalRepoCount = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onScrollDown = function (ev) {
        var pageSize = Number(_helpers_app_config__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].DATAPERPAGE);
        if (this.users && this.users.length && this.users.length < this.totalCount) {
            var page = (this.users.length / pageSize) + 1;
            this.fetchGitUsers(page);
        }
        else if (this.repos && this.repos.length && this.repos.length < this.totalRepoCount) {
            var page = (this.repos.length / pageSize) + 1;
            this.fechGitRepos(page);
        }
    };
    HomeComponent.prototype.onKeyDownEvt = function (event) {
        if (event.keyCode == 13) {
            var page = 1;
            this.repos = [];
            this.users = [];
            this.totalCount = 0;
            this.totalRepoCount = 0;
            /* clear application cache */
            this.userService.clearUserDetail();
            /* clear application cache */
            this.repoService.clearRepoDetail();
            if (this.searchType === 'repo' && this.searchparam) {
                this.fechGitRepos(page);
            }
            else if (this.searchType === 'user' && this.searchparam) {
                this.fetchGitUsers(page);
            }
        }
    };
    HomeComponent.prototype.fetchGitUsers = function (page) {
        var _this = this;
        this.userService.getAllUsers(this.searchparam, page).subscribe(function (response) {
            if (response && response.items) {
                _this.users = _this.users.concat(response.items);
            }
            console.log(_this.users);
            _this.totalCount = response && response.total_count ? response.total_count : 0;
        }, function (error) {
            console.log(" Retrieve error ");
        });
    };
    HomeComponent.prototype.fechGitRepos = function (page) {
        var _this = this;
        this.repoService.getAllRepos(this.searchparam, page).subscribe(function (response) {
            if (response && response.items) {
                _this.repos = _this.repos.concat(response.items);
            }
            console.log(_this.repos);
            _this.totalRepoCount = response && response.total_count ? response.total_count : 0;
        }, function (error) {
            console.log(" Retrieve error ");
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.scss */ "./src/app/home/home.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_2__["RepoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.scss":
/*!********************************!*\
  !*** ./src/app/home/home.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-header-wrapper {\n  width: 96%;\n  padding: 10px 2%;\n  background: #4CAF50;\n  color: #FFF;\n  height: 35px; }\n  .home-header-wrapper .header-left {\n    width: 49%;\n    float: left; }\n  .home-header-wrapper .header-left img.logo-mark {\n      width: 35px;\n      float: left; }\n  .home-header-wrapper .header-left img.logo-light {\n      width: 100px;\n      float: left;\n      margin-top: -4px; }\n  .home-header-wrapper .header-left span {\n      line-height: 36px;\n      font-size: 25px;\n      display: block;\n      float: left; }\n  .home-header-wrapper .header-right {\n    width: 49%;\n    float: right; }\n  .home-header-wrapper .header-right input[type=\"text\"] {\n      width: 98%;\n      background: #FFF;\n      height: 25px;\n      outline: none;\n      padding-left: 10px;\n      border: none; }\n  .home-header-wrapper .header-right span {\n      float: right;\n      font-size: 12px;\n      margin-right: 4px; }\n  .home-header-wrapper .header-right a {\n      color: #FFF; }\n  .home-header-wrapper .header-right label {\n      font-size: 12px;\n      float: left; }\n  .home-header-wrapper .header-right label input[type=\"radio\"] {\n        float: left; }\n  @media screen and (max-width: 840px) {\n    .home-header-wrapper {\n      height: 51px; } }\n  @media screen and (max-width: 700px) {\n    .home-header-wrapper {\n      height: 106px; }\n      .home-header-wrapper .header-left,\n      .home-header-wrapper .header-right {\n        width: 98%;\n        margin-top: 5px; }\n      .home-header-wrapper .header-right label {\n        width: 48%;\n        float: left; }\n      .home-header-wrapper .header-right .user {\n        width: 100%;\n        text-align: center;\n        border-bottom: 1px solid #FFF;\n        padding-bottom: 3px;\n        margin-bottom: 3px; } }\n  .item-list-wrapper h3.totalCount {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  border: 1px solid #cacaca;\n  margin: 0 auto;\n  width: 217px;\n  margin-top: 5px;\n  color: #4CAF50; }\n  .item-list-wrapper p.totalCount {\n  text-align: center;\n  font-size: 12px;\n  line-height: 6px;\n  color: #4CAF50; }\n  .item-list-wrapper .itemlist {\n  width: 96%;\n  padding: 0 2%;\n  margin-top: 10px;\n  height: auto;\n  text-align: center; }\n  .item-list-wrapper .itemlist .userList .user-tile {\n    width: 19%;\n    float: left;\n    border: 1px solid #cacaca;\n    margin: 3px;\n    padding: 1px;\n    cursor: pointer;\n    min-width: 250px; }\n  .item-list-wrapper .itemlist .userList .user-tile img {\n      min-width: 70px;\n      height: 70px;\n      float: left; }\n  .item-list-wrapper .itemlist .userList .user-tile .caption {\n      font-size: 14px;\n      color: #4CAF50;\n      float: left;\n      padding-left: 1%;\n      width: 59%;\n      text-align: left;\n      word-break: break-all; }\n  @media screen and (max-width: 350px) {\n      .item-list-wrapper .itemlist .userList .user-tile {\n        width: 100%;\n        min-width: 100%; } }\n  .item-list-wrapper .itemlist .userList .user-tile:hover {\n      background-color: #F0f0f0;\n      transition: 0.3s; }\n  .item-list-wrapper .itemlist .repoList {\n    outline: none; }\n  .item-list-wrapper .itemlist .repoList .repo-tile {\n      width: 30%;\n      margin: 3px;\n      padding: 10px;\n      float: left;\n      border: 1px solid #cacaca;\n      text-align: left;\n      cursor: pointer;\n      height: 160px;\n      overflow: hidden; }\n  .item-list-wrapper .itemlist .repoList .repo-tile:hover {\n        background-color: #F0f0f0;\n        transition: 0.3s; }\n  .item-list-wrapper .itemlist .repoList .repo-tile:hover .owner {\n          border: 1px solid #4CAF50 !important; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .title {\n        font-weight: normal; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .title .title-name {\n          color: #4CAF50; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .title .owner {\n          float: right;\n          font-size: 14px;\n          border: 1px solid #F0f0F0;\n          background: #F0F0F0;\n          padding: 2px;\n          outline: none; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .repo-language .repo-language-color {\n        position: relative;\n        top: 1px;\n        display: inline-block;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background-color: #4CAF50; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .repo-language .repo-language-txt {\n        padding-left: 5px;\n        font-size: 12px; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .additional-info {\n        font-size: 12px; }\n  .item-list-wrapper .itemlist .repoList .repo-tile .additional-info span {\n          border: 1px solid #F0F0f0;\n          margin-left: 5px;\n          margin-top: 10px;\n          padding: 5px;\n          display: block;\n          float: left; }\n  .item-list-wrapper .itemlist .repoList .repo-tile p {\n        margin: 0;\n        font-size: 12px;\n        margin-top: 10px; }\n  @media screen and (max-width: 1060px) {\n        .item-list-wrapper .itemlist .repoList .repo-tile {\n          height: 250px; } }\n  @media screen and (max-width: 900px) {\n        .item-list-wrapper .itemlist .repoList .repo-tile {\n          width: 45%;\n          height: 200px; } }\n  @media screen and (max-width: 640px) {\n        .item-list-wrapper .itemlist .repoList .repo-tile {\n          width: 43%;\n          height: 260px; } }\n  @media screen and (max-width: 500px) {\n        .item-list-wrapper .itemlist .repoList .repo-tile {\n          width: 92%;\n          height: auto; } }\n"

/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-title\">\n  <img src=\"../../assets/GitHub-Mark-Light-64px.png\" class=\"logo-mark\" />\n  <img src=\"../../assets/GitHub_Logo_White.png\" class=\"logo-light\" />\n  <span>Search</span>\n</div>\n<div class=\"login\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"login-form\">\n      <div class=\"fu-form-field\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" [ngClass]=\"{ 'field-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-formfield\">\n          <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"fu-form-field\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'field-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-formfield\">\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <div class=\"clear\"></div>\n      <button [disabled]=\"loading\" class=\"custButton\">Login</button>\n      <img *ngIf=\"loading\" class=\"login-loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n  </form>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
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
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.authenticationService.logout();
        this.returnUrl = '/home';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/login/login.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.scss":
/*!**********************************!*\
  !*** ./src/app/login/login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-title {\n  padding: 10px;\n  color: #FFF;\n  font-weight: normal;\n  background: #4CAF50;\n  height: 32px; }\n  .login-title img.logo-mark {\n    width: 35px;\n    float: left; }\n  .login-title img.logo-light {\n    width: 100px;\n    float: left;\n    margin-top: -4px; }\n  .login-title span {\n    line-height: 36px;\n    font-size: 25px;\n    display: block;\n    float: left; }\n  .login {\n  margin: 0px auto 5px auto;\n  max-width: 500px; }\n  .login h2\nform {\n    position: relative; }\n  .login .clear {\n    clear: both; }\n  .login .login-form {\n    box-sizing: border-box;\n    margin: 5% auto;\n    padding: 25px;\n    border: 1px solid #4CAF50; }\n  .login .login-form .fu-form-field {\n      position: relative; }\n  .login .login-form .fu-form-field label {\n        text-align: left;\n        color: #000;\n        float: left;\n        width: 100%; }\n  .login .login-form .fu-form-field input[type=\"text\"], .login .login-form .fu-form-field input[type=\"password\"] {\n        width: 100%;\n        line-height: 3em;\n        margin: 0 0 1em 0em;\n        border: 1px solid #cacaca;\n        outline: none;\n        padding-left: 10px;\n        float: left; }\n  .login .login-form .fu-form-field input[type=\"text\"]:focus, .login .login-form .fu-form-field input[type=\"password\"]:focus {\n          outline: none; }\n  .login .login-form .fu-form-field .invalid-formfield {\n        position: absolute;\n        right: 0;\n        font-size: 12px;\n        top: 4 px;\n        color: red; }\n  .login .login-form .custButton {\n      height: 40px;\n      width: 100px;\n      background: #4CAF50;\n      color: #FFF;\n      text-transform: uppercase;\n      cursor: pointer;\n      border: none; }\n  .login .login-form .login-loading {\n      position: absolute;\n      right: 25px; }\n  @media screen and (max-width: 520px) {\n    .login {\n      margin: 10px; } }\n"

/***/ }),

/***/ "./src/app/repo/repo.component.html":
/*!******************************************!*\
  !*** ./src/app/repo/repo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  repo works!\n</p>\n"

/***/ }),

/***/ "./src/app/repo/repo.component.scss":
/*!******************************************!*\
  !*** ./src/app/repo/repo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/repo/repo.component.ts":
/*!****************************************!*\
  !*** ./src/app/repo/repo.component.ts ***!
  \****************************************/
/*! exports provided: RepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoComponent", function() { return RepoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoComponent = /** @class */ (function () {
    function RepoComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    RepoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.repoId = param.id;
            console.log(param);
            console.log(_this.userService.getRepoDetail(_this.repoId));
        });
    };
    RepoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./repo.component.html */ "./src/app/repo/repo.component.html"),
            styles: [__webpack_require__(/*! ./repo.component.scss */ "./src/app/repo/repo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["RepoService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], RepoComponent);
    return RepoComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.userId = param.id;
            console.log(param);
            console.log(_this.userService.getUserDetail(_this.userId));
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
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
    production: false,
    apiUrl: 'https://api.github.com/'
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

module.exports = __webpack_require__(/*! C:\Users\labi\Desktop\Fasalu\gitsearchapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map