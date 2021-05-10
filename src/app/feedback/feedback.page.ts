import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'// using injector
import {NavController} from '@ionic/angular' // to nav to and from different pages of app

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
myFeedback:string = "Undefined"; // original statement until changed

  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("feedback")
    .then((data)=>{
      this.myFeedback=data; // saves feedback data on feedback page
    })
    .catch()
  }

  //Saves the feedback on app
  updateFeedback(){
    this.storage.set('feedback', this.myFeedback)
    .then(()=>{
      this.navCtrl.navigateBack('/home'); // bringing us back to app home page
    })
    .catch()
  }
}
