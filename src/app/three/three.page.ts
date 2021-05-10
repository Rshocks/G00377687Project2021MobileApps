import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
})
export class ThreePage{
today;


  constructor() { 
    this.today = new Date().toISOString(); // made using ionic docs help to display dat time
  }
}
