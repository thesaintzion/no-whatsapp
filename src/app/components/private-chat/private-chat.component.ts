import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent implements OnInit {
    id;
    fullName;
    status;
    img;
    loading = true;

  constructor(public sharedServivce: SharedService, private apiService: ApiService) {
    this.sharedServivce.activityTitle =  'Saint Zion';
    this.sharedServivce.showArrow = true; 
    this.sharedServivce.hasLogo = false;
    this.sharedServivce.hasSearch = false ;
    this.sharedServivce.hasIconNavs = false;
    this.sharedServivce.isProfile =  true;
    window.scrollTo(0,document.body.scrollHeight);
    this.getMessages();
   }

   datas = [];
   noMessage = true;
   socket;
     
   user: any  = localStorage.getItem('user');
   userID: any;
   userName: any;
   userEmail: any;
 
 

 
   
 
   getMessages() { 
     this.apiService.getMessages().subscribe(
       res => {
         console.log('the res', res);
         this.datas = res.data;
       },
       err => {
         console.log('the err', err);
       }
     )
   }
 
 
    //get profile
 
    getProfile(){
     this.apiService.getProfile().subscribe(
       res => {
 this.userID = res.user._id;
 this.userName = res.user.userName;
 this.userEmail = res.user.userEmail;
 this.getId(res.user._id);
 
 console.log(res);
       },
       err => {
 console.log(err);
       }
     )
   }
 
   // 
   getId(userId: any){
     this.userID = userId;
   }
 
 
   ngOnInit() {
    setTimeout( () =>{
      this.loading = false;
              }, 3000)
     this.apiService.socketListen('update').subscribe(
       res =>{
         this.getMessages();
         window.scrollTo(0,document.body.scrollHeight);
       })
   
   
   //
 this.getProfile();
 window.scrollTo(0, document.body.scrollHeight);


 console.log('res', this.datas)
   }

}
