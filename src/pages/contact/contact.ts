import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { NavController, ToastController, AlertController } from 'ionic-angular';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public item : Array<any> = [];
  private url = "http://localhost/PHP-Slim-Restful/api/"
  constructor(public navCtrl: NavController,private http  : Http,) {

  }

  ionViewWillEnter(){
    this.load();
  }
  
  load() : void{
    this.http
    .get(this.url+'biodata-retrieve.php')
    .subscribe((data : any) => {
      console.dir(data);
      this.item = data;
    },(error : any) => {
      console.dir(error);
    });
  }
}
