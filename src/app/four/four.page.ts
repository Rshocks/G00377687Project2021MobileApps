import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'; // plugn for location
import {Storage} from '@ionic/storage'; //import ionic storage
import {NavController} from '@ionic/angular' // to nav to and from different pages of app

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit{

  myInterest:string = "Undefined"; // original statement until changed
  lat:any;
  long:any;

  constructor(private geolocation: Geolocation, private storage:Storage, private navCtrl:NavController) { }

  GPS() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude //getting the data for latitude
      this.long = resp.coords.longitude // getting data for longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     })
    }
    
  ngOnInit() {
    this.storage.get("interest")
    .then((data)=>{
      this.myInterest=data; // saves feedback data on feedback page
    })
    .catch()
  }

  //Saves the feedback on app
  updateInterest(){
    this.storage.set('interest', this.myInterest)
    .then(()=>{
      this.navCtrl.navigateBack('/home'); // bringing us back to app home page
    })
    .catch()
  }
}
