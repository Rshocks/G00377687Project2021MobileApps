import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'; //import ionic storage

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
myFeedback:string;
  constructor(private storage:Storage) {}

    ngOnInit(){
      this.storage.get('feedback')
      .then((data)=>{
        this.myFeedback = data; // getting data from feedback to display on home
      })
      .catch()
    }
}
