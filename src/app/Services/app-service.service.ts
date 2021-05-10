import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  //getting the api data online
  GetData():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=3c82e3a8&s=remember%20the%20titans%E2%80%99');
  }
}
