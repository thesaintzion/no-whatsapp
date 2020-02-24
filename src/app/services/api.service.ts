import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



// Get requests //
// getMessagesUrl = 'http://localhost:3500/api/chat/get-messages';
getMessagesUrl = 'api/chat/get-messages';


// Post requests //
// sendMessageUrl = 'http://localhost:3500/api/chat/message';
sendMessageUrl = 'api/chat/message';


// userUrl = 'http://localhost:3500/api/user';
userUrl = 'api/user';

socket;
readonly socketUrl: string = 'http://localhost:3500/';
  constructor(private http: HttpClient, private router: Router) { 
    this.socket = io();
  }
  
  //SOCKET//
  socketListen(event: string){
    return new Observable((subscriber) =>{
      this.socket.on(event, (data) => {
      subscriber.next(data);
    });
    });
  }
  
  
  sockEmit(event: string, data: any){
    this.socket.emit(event, data);
  }


///////// Authentication ///////
  registerUser(user: any){
    return this.http.post<any>(`${this.userUrl}/register`, user);
  }
  loginUser(user: any){
    return this.http.post<any>(`${this.userUrl}/login`, user);
  }

  getProfile(){
    return this.http.get<any>(`${this.userUrl}/profile`);
  }

  getAllUsers(){
    return this.http.get<any>(`${this.userUrl}/all-users`);
  }

  getSingleUsers(userEmail: any){
    return this.http.get<any>(`${this.userUrl}/sinlge-user/${userEmail}`);
  }

  


  


  /////// Messages //////
  sendMessage(message: any) {
    return this.http.post<any>(this.sendMessageUrl , message);
  }
  getMessages() {
    return this.http.get<any>(this.getMessagesUrl);
  }
  

  postMessage(){
     
  }
}
