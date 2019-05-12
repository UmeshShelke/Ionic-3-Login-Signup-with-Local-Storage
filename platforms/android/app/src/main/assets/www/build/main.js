webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (localStorage.getItem('userData')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\welcome\welcome.html"*/`\n\n\n\n\n\n<ion-content padding id="welcome">\n\n\n\n<img src="assets/imgs/property-broker.jpg" class="logo"/>\n\n<div class="wel">\n\n<h1> Welcome </h1>\n\n</div>\n\n\n\n<div class="typ">\n\nPlease login and Add Buyer\'s Details</div>\n\n\n\n<button ion-button block class="marginTop" (click)="signup()">Signup</button>\n\n<button ion-button block color="lightprimary" (click)="login()">Login</button>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		424,
		1
	],
	"../pages/welcome/welcome.module": [
		425,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\about\about.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\contact\contact.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(48);
// import { Component } from '@angular/core';
// import { NavController,App } from 'ionic-angular';
// import { AuthService } from '../../providers/auth-service/auth-service';
// @Component({
//   selector: 'page-home',
//template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\home\home.html"*/`<!-- <ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to {{userDetails.name}}</h2>\n\n  <h3>Email: {{userDetails.email}}</h3>\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n\n</ion-content> -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/broker.jpg" class="navbarLogo" />\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- to {{userDetails.name}} -->\n\n<ion-content padding>\n\n  <h2>Add New Buyer\'s Data </h2>\n\n\n\n  <!-- <h3>{{userDetails.email}}</h3> -->\n\n  <ion-item id="updateBox">\n\n    <textarea [(ngModel)]="userPostData.feed"></textarea>\n\n    <ion-row>\n\n    <button ion-button color="energy" (click)="feedUpdate()">Add Now</button>\n\n  </ion-row>\n\n  </ion-item>\n\n\n\n  \n\n  <ion-card *ngFor="let item of dataSet; let msgIndex=index">\n\n  <ion-item>\n\n  <ion-icon name="trash" (click)="feedDelete(item.feed_id,msgIndex)"></ion-icon> \n\n  <ion-card-content>\n\n  <p [innerHTML]="item.feed | linky"></p>\n\n  <span>{{ this.converTime(item.created) | amTimeAgo}}</span>\n\n  </ion-card-content>\n\n  </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="noRecords">\n\n    <ion-item>\n\n      No Records\n\n     </ion-item>\n\n   </ion-card>\n\n   \n\n   <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" *ngIf="!noRecords">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n   </ion-infinite-scroll>\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\home\home.html"*/
// })
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// export class HomePage {
//   userDetails : any;
//   responseData: any;
//   userPostData = {"user_id":"","token":""};
//   constructor(public navCtrl: NavController, public authService:AuthService, public app:App) {
//   const data =JSON.parse(localStorage.getItem('userData'));
//   this.userDetails = data.userData;
//   this.userPostData.user_id = this.userDetails.user_id;
//   this.userPostData.token = this.userDetails.token;
// }
// backToWelcome(){
//    const root = this.app.getRootNav();
//    root.popToRoot();
// }
// logout(){
//      localStorage.clear();
//      setTimeout(() => this.backToWelcome(), 1000);
// }
// }



//import {Common} from "../../providers/common/common";
//import {AuthService} from '../../providers/auth-service';
var HomePage = (function () {
    function HomePage(
        //public common: Common,
        alertCtrl, navCtrl, app, authService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: ""
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.lastCreated = "";
        this.noRecords = false;
        this.getFeed();
    }
    // getFeed() {
    //   this.authService.postData(this.userPostData, 'feed')
    //     .then((result) => {
    //       this.resposeData = result;
    //       if (this.resposeData.feedData) {
    //         this.dataSet = this.resposeData.feedData;
    //       } else {}
    //     }, (err) => {
    //     });
    // }
    HomePage.prototype.getFeed = function () {
        var _this = this;
        // this.common.presentLoading();
        this.authService.postData(this.userPostData, "feed").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                // this.common.closeLoading();
                _this.dataSet = _this.resposeData.feedData;
                // Data set length
                var dataLength = _this.resposeData.feedData.length;
                _this.userPostData.lastCreated = _this.resposeData.feedData[dataLength - 1].created;
            }
            else {
                console.log("No data");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    HomePage.prototype.feedUpdate = function () {
        var _this = this;
        if (this.userPostData.feed) {
            // this.common.presentLoading();
            this.authService.postData(this.userPostData, "feedUpdate")
                .then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.feedData) {
                    //this.common.closeLoading();
                    _this.dataSet.unshift(_this.resposeData.feedData);
                    _this.userPostData.feed = "";
                }
                else {
                    console.log("No access");
                }
            }, function (err) {
                //Connection failed message
            });
        }
    };
    HomePage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Feed',
                message: 'Do you want to buy this feed?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }, {
                        text: 'Delete',
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this.authService.postData(_this.userPostData, "feedDelete")
                                .then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    // doInfinite(e): Promise<any> {
    //   console.log("Begin async operation");
    //      return new Promise(resolve => {
    //         setTimeout(() => {
    //            // API Connection for more updates
    //            resolve();
    //          }, 500);
    //         });
    // }
    HomePage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    HomePage.prototype.converTime = function (created) {
        var date = new Date(created * 1000);
        return date;
    };
    // .........
    // // Other Functions
    // .........
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-home',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\home\home.html"*/`<!-- <ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to {{userDetails.name}}</h2>\n\n  <h3>Email: {{userDetails.email}}</h3>\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n\n</ion-content> -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/broker.jpg" class="navbarLogo" />\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- to {{userDetails.name}} -->\n\n<ion-content padding>\n\n  <h2>Add New Buyer\'s Data </h2>\n\n\n\n  <!-- <h3>{{userDetails.email}}</h3> -->\n\n  <ion-item id="updateBox">\n\n    <textarea [(ngModel)]="userPostData.feed"></textarea>\n\n    <ion-row>\n\n    <button ion-button color="energy" (click)="feedUpdate()">Add Now</button>\n\n  </ion-row>\n\n  </ion-item>\n\n\n\n  \n\n  <ion-card *ngFor="let item of dataSet; let msgIndex=index">\n\n  <ion-item>\n\n  <ion-icon name="trash" (click)="feedDelete(item.feed_id,msgIndex)"></ion-icon> \n\n  <ion-card-content>\n\n  <p [innerHTML]="item.feed | linky"></p>\n\n  <span>{{ this.converTime(item.created) | amTimeAgo}}</span>\n\n  </ion-card-content>\n\n  </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="noRecords">\n\n    <ion-item>\n\n      No Records\n\n     </ion-item>\n\n   </ion-card>\n\n   \n\n   <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" *ngIf="!noRecords">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n   </ion-infinite-scroll>\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\home\home.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Signup } from '../signup/signup';
var Signup = (function () {
    function Signup(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
    }
    Signup.prototype.signup = function () {
        var _this = this;
        if (this.userData.username && this.userData.password && this.userData.email && this.userData.name) {
            this.authService.postData(this.userData, 'signup').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.userData) {
                    console.log(_this.responseData);
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    console.log("User already exists");
                }
            }, function (err) {
                // Error log
            });
        }
        else {
            console.log("Give valid information..");
        }
    };
    Signup.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\signup\signup.html"*/`<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label stacked>Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n        <!-- <this.navCtrl.push(TabsPage); -->\n\n        <a href="#" (click)="login()">Login Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_linky__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { Common } from '../providers/common/common';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_15_angular_linky__["LinkyModule"], __WEBPACK_IMPORTED_MODULE_16_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__["a" /* AuthService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\ion\ionic-welcome\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 207,
	"./af.js": 207,
	"./ar": 208,
	"./ar-dz": 209,
	"./ar-dz.js": 209,
	"./ar-kw": 210,
	"./ar-kw.js": 210,
	"./ar-ly": 211,
	"./ar-ly.js": 211,
	"./ar-ma": 212,
	"./ar-ma.js": 212,
	"./ar-sa": 213,
	"./ar-sa.js": 213,
	"./ar-tn": 214,
	"./ar-tn.js": 214,
	"./ar.js": 208,
	"./az": 215,
	"./az.js": 215,
	"./be": 216,
	"./be.js": 216,
	"./bg": 217,
	"./bg.js": 217,
	"./bm": 218,
	"./bm.js": 218,
	"./bn": 219,
	"./bn.js": 219,
	"./bo": 220,
	"./bo.js": 220,
	"./br": 221,
	"./br.js": 221,
	"./bs": 222,
	"./bs.js": 222,
	"./ca": 223,
	"./ca.js": 223,
	"./cs": 224,
	"./cs.js": 224,
	"./cv": 225,
	"./cv.js": 225,
	"./cy": 226,
	"./cy.js": 226,
	"./da": 227,
	"./da.js": 227,
	"./de": 228,
	"./de-at": 229,
	"./de-at.js": 229,
	"./de-ch": 230,
	"./de-ch.js": 230,
	"./de.js": 228,
	"./dv": 231,
	"./dv.js": 231,
	"./el": 232,
	"./el.js": 232,
	"./en-au": 233,
	"./en-au.js": 233,
	"./en-ca": 234,
	"./en-ca.js": 234,
	"./en-gb": 235,
	"./en-gb.js": 235,
	"./en-ie": 236,
	"./en-ie.js": 236,
	"./en-il": 237,
	"./en-il.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es-us": 242,
	"./es-us.js": 242,
	"./es.js": 240,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mn": 280,
	"./mn.js": 280,
	"./mr": 281,
	"./mr.js": 281,
	"./ms": 282,
	"./ms-my": 283,
	"./ms-my.js": 283,
	"./ms.js": 282,
	"./mt": 284,
	"./mt.js": 284,
	"./my": 285,
	"./my.js": 285,
	"./nb": 286,
	"./nb.js": 286,
	"./ne": 287,
	"./ne.js": 287,
	"./nl": 288,
	"./nl-be": 289,
	"./nl-be.js": 289,
	"./nl.js": 288,
	"./nn": 290,
	"./nn.js": 290,
	"./pa-in": 291,
	"./pa-in.js": 291,
	"./pl": 292,
	"./pl.js": 292,
	"./pt": 293,
	"./pt-br": 294,
	"./pt-br.js": 294,
	"./pt.js": 293,
	"./ro": 295,
	"./ro.js": 295,
	"./ru": 296,
	"./ru.js": 296,
	"./sd": 297,
	"./sd.js": 297,
	"./se": 298,
	"./se.js": 298,
	"./si": 299,
	"./si.js": 299,
	"./sk": 300,
	"./sk.js": 300,
	"./sl": 301,
	"./sl.js": 301,
	"./sq": 302,
	"./sq.js": 302,
	"./sr": 303,
	"./sr-cyrl": 304,
	"./sr-cyrl.js": 304,
	"./sr.js": 303,
	"./ss": 305,
	"./ss.js": 305,
	"./sv": 306,
	"./sv.js": 306,
	"./sw": 307,
	"./sw.js": 307,
	"./ta": 308,
	"./ta.js": 308,
	"./te": 309,
	"./te.js": 309,
	"./tet": 310,
	"./tet.js": 310,
	"./tg": 311,
	"./tg.js": 311,
	"./th": 312,
	"./th.js": 312,
	"./tl-ph": 313,
	"./tl-ph.js": 313,
	"./tlh": 314,
	"./tlh.js": 314,
	"./tr": 315,
	"./tr.js": 315,
	"./tzl": 316,
	"./tzl.js": 316,
	"./tzm": 317,
	"./tzm-latn": 318,
	"./tzm-latn.js": 318,
	"./tzm.js": 317,
	"./ug-cn": 319,
	"./ug-cn.js": 319,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 422;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://192.168.1.100/PHP-Slim-Restful/api/';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "password": "" };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        //Api connections
        // this.navCtrl.push(TabsPage);
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, 'login').then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.userData) {
                    // console.log(this.responseData);
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.presentToast("please give a valid username and password");
                }
            }, function (err) {
                // Error log
            });
        }
        else {
            //  console.log("Give Username and Password");
            this.presentToast("Give Username and password");
        }
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"G:\ion\ionic-welcome\src\pages\login\login.html"*/`<ion-content padding>\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Username</ion-label>\n\n    <ion-input type="text" value="" [(ngModel)]="userData.username"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block color="primary" (click)="login()">Login</button>\n\n\n\n</ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"G:\ion\ionic-welcome\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map