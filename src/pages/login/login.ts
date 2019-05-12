import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Signup } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  responseData : any;
  userData = {"username": "","password": ""};
  constructor(public navCtrl: NavController, public authService:AuthService,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
  
   if(this.userData.username && this.userData.password)
   {
    this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData.userData){
      // console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
      }
      else{ 
        this.presentToast("please give a valid username and password"); 
      }


    }, (err) => {
      // Error log
    });
   }
   else{
    //  console.log("Give Username and Password");
    this.presentToast("Give Username and password"); 
   }
  

}
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        //position: 'top'
      });
      toast.present();
}
signup(){
  //Login page link
  this.navCtrl.push(Signup);
}
}