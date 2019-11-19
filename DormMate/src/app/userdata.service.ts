import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';

const localUrl = "https://localhost:8080/v0";
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get(localUrl);
  }

/*public newUser(obj){
  return this.httpClient.post(this.baseUrl,obj, {
    headers : new HttpHeaders({
      'Content-Type': 'appliation/json',
    })
  }).map(data=> data);*/
}
