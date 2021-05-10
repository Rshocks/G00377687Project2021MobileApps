import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../Services/app-service.service'; // taking from service class made

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage implements OnInit {
Mydata:any=[]; 
  constructor(private Service:AppServiceService) { }

  //using the data in the api to pull onto the app
  ngOnInit(){
    this.Service.GetData().subscribe(
      (data)=>{
        this.Mydata = data.Search;
        console.log(this.Mydata);
      }
    );
  }
}
