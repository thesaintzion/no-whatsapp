import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

// Get requests //
// getMessagesUrl = 'http://localhost:3500/api/chat/get-messages';
getMessagesUrl = 'api/chat/get-messages';

// getUsersUrl = 'http://localhost:3500/api/user/all-users';
getUsersUrl = 'api/user/all-users';

// getSingleUserUrl = 'http://localhost:3500/api/user/sinlge-user';
getSingleUserUrl = 'api/user/sinlge-user';



// Post requests //
// sendMessageUrl = 'http://localhost:3500/api/chat/message';
sendMessageUrl = 'api/chat/message';

// Authentication //
// registerUserUrl = 'http://localhost:3500/api/user/register';
registerUserUrl = 'api/user/register';

// loginUserUrl = 'http://localhost:3500/api/user/login';
loginUserUrl = 'api/user/login';

// profileUrl = 'http://localhost:3500/api/user/profile';
profileUrl = 'api/user/profile';

  constructor(private http: HttpClient) { }

///////// Authentication ///////
  registerUser(user: any){
    return this.http.post<any>(this.registerUserUrl, user);
  }
  loginUser(user: any){
    return this.http.post<any>(this.loginUserUrl, user);
  }

// 
  getProfile(){
    return this.http.get<any>(this.profileUrl);
  }

  // 
  getAllUsers(){
    return this.http.get<any>(this.getUsersUrl);
  }

  getSingleUsers(userEmail: any){
    return this.http.get<any>(`${this.getSingleUserUrl}/${userEmail}`);
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
