import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import * as io from  'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas: any;
  noMessage = true;
  socket;
  readonly url = 'http://localhost:3500/';


  
  user: any  = localStorage.getItem('user');
  userID: any;
  userName: any;
  userEmail: any;


  constructor(private apiService: ApiService) { 
    // this.socket = io(this.url);
  }

  

  // getMessages() { 
  //   this.apiService.getMessages().subscribe(
  //     res => {
  //       console.log(res);
  //       this.datas = res.data;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }


   //get profile

//    getProfile(){
//     this.apiService.getProfile().subscribe(
//       res => {
// this.userID = res.user._id;
// this.userName = res.user.userName;
// this.userEmail = res.user.userEmail;
// this.getId(res.user._id);

// console.log(res);
//       },
//       err => {
// console.log(err);
//       }
//     )
//   }

  // 
  getId(userId: any){
    // this.userID = userId;
  }


  ngOnInit() {

    // this.apiService.socketListen('update').subscribe(
    //   res =>{
    //     // this.getMessages();
    //     window.scrollTo(0,document.body.scrollHeight);
    //   })
  
    // this.getMessages();

  //
// this.getProfile();
window.scrollTo(0, document.body.scrollHeight);
  }

  

}
