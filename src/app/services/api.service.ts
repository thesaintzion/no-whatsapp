import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

sendMessageUrl = 'http://localhost:3500/api/chat/message';
getMessagesUrl = 'http://localhost:3500/api/chat/get-messages';


  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    return this.http.post<any>(this.sendMessageUrl , message);
  }


  getMessages() {
    return this.http.get<any>(this.getMessagesUrl);
  }
  

  postMessage(){
     
  }
}
