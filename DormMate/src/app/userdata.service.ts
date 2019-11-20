import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const localUrl = "https://localhost:8080/v0/newAccount";
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get(localUrl);
  }

  newUser(obj){
    return this.http.post(localUrl,obj, {
      headers : new HttpHeaders({
        'Content-Type': 'appliation/json',
      })
    }).map(data=> data);
  }
}
