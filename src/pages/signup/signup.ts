import { Component } from '@angular/core';
import {  NavController,ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';
//import { Signup } from '../signup/signup';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public authService:AuthService,public toastCtrl:ToastController ) {
  }

  signup(){
    if(this.userData.username && this.userData.password && this.userData.email && this.userData.name)
    {this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      //console.log(this.responseData);
      this.navCtrl.push(Login);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(Login);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });
  }
  else{
    console.log("Give valid information..");
  } 

    

  }

  login(){
    //Login page link
    this.navCtrl.push(Login);
  }
}
