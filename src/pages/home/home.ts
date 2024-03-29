import {Component} from '@angular/core';
import {NavController,App,AlertController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  userPostData = {
     user_id: "",
     token: "",
     feed: "",
     feed_id: "",
     lastCreated: ""
  };

constructor(
//public common: Common,
private alertCtrl: AlertController,
public navCtrl: NavController,
public app: App,
public authService: AuthService) {
  const data = JSON.parse(localStorage.getItem("userData"));
  this.userDetails = data.userData;
  this.userPostData.user_id = this.userDetails.user_id;
  this.userPostData.token = this.userDetails.token;
  this.userPostData.lastCreated = "";
  this.noRecords = false
  this.getFeed();
}
   
getFeed() {
   
    this.authService.postData(this.userPostData, "feed").then(
    result => {
       this.resposeData = result;
       if (this.resposeData.feedData) {
         
         
          this.dataSet = this.resposeData.feedData;
          // Data set length
          const dataLength = this.resposeData.feedData.length;
          this.userPostData.lastCreated = this.resposeData.feedData[dataLength - 1].created;
        } else {
         console.log("No data");
       }
  },
  err => {
     //Connection failed message
  }
  );
  }
  
  

  
  feedUpdate() {
    if (this.userPostData.feed) {
     // this.common.presentLoading();
      this.authService.postData(this.userPostData, "feedUpdate")
        .then((result) => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            //this.common.closeLoading();
            this.dataSet.unshift(this.resposeData.feedData);
            this.userPostData.feed = "";
          } else {
            console.log("No access");
          }

        }, (err) => {
          //Connection failed message
        });
    }

  }

  feedDelete(feed_id, msgIndex) {
    if (feed_id > 0) {
      let alert = this.alertCtrl.create({
          title: 'Delete Feed',
          message: 'Do you want to delete this data ?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }, {
              text: 'Delete',
              handler: () => {
                this.userPostData.feed_id = feed_id;
                this.authService.postData(this.userPostData, "feedDelete")
                  .then((result) => {
                    this.resposeData = result;
                    if (this.resposeData.success) {
                      this.dataSet.splice(msgIndex, 1);
                    } else {
                      console.log("No access");
                    }
                  }, (err) => {
                    //Connection failed message
                  });
              }
            }
          ]
        });
      alert.present();
    }
  }

  

  doInfinite(e): Promise<any> {
    console.log("Begin async operation");
       return new Promise(resolve => {
       setTimeout(() => {
          this.authService.postData(this.userPostData, "feed").then(
          result => {
             this.resposeData = result;
             if (this.resposeData.feedData.length) {
                const newData = this.resposeData.feedData;
                this.userPostData.lastCreated = this.resposeData.feedData[newData.length - 1].created;
    
         for (let i = 0; i < newData.length; i++) {
            this.dataSet.push(newData[i]);
         }
    } else {
        this.noRecords = true;
         console.log("No user updates");
    }
    },
    err => {
    //Connection failed message
    }
    );
    resolve();
    }, 500);
    });
    }


  converTime(created) {
    let date = new Date(created * 1000);
    return date;
  }

backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
}

logout(){
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 1000);

}

}