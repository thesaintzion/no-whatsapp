import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

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
    loading: boolean;
   datas = [];
   noMessage = true;
   socket;
     
   user: any  = localStorage.getItem('user');
   userID: any;
   userName: any;
   userEmail: any;

   //
   typing = false;

   noMessagesMsg = 'No messages found';

  constructor(public sharedServivce: SharedService, private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    this.sharedServivce.activityTitle =  'Saint Zion';
    this.sharedServivce.showArrow = true; 
    this.sharedServivce.hasLogo = false;
    this.sharedServivce.hasSearch = false ;
    this.sharedServivce.hasIconNavs = false;
    this.sharedServivce.isProfile =  true;
    this.sharedServivce.footer = false;
    window.scrollTo(0,document.body.scrollHeight);
    // this.getMessages();
   }

   
 
 
//get messages from db
   getMessages() { 
    this.loading = true;
     this.apiService.getMessages().subscribe(
       res => {
         console.log('the res', res);
         this.datas = res.data;
         setTimeout( () =>{
          this.loading = false;
        }, 3000)
       },
       err => {
        setTimeout( () =>{
          this.loading = false;
        }, 3000)
         console.log('the err', err);
       }
     )
   }

   //change vioce chat button to 'send button' on focus
   switchBtn(e){
     console.log(e);
     if(e !== ''){
      this.typing = true;
     }else{
      this.typing = false;
     }

   }
 
 
    //get profile
 
//     getProfile(){
//      this.apiService.getProfile().subscribe(
//        res => {
//  this.userID = res.user._id;
//  this.userName = res.user.userName;
//  this.userEmail = res.user.userEmail;
//  this.getId(res.user._id);
 
//  console.log(res);
//        },
//        err => {
//  console.log(err);
//        }
//      )
//    }
 
   // 
   getId(userId: any){
     this.userID = userId;
   }
 
 
   ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('reciever'));
      if(params.get('reciever')){
       this.getMessages();
      }
    });


     this.apiService.socketListen('update').subscribe(
       res =>{
         this.getMessages();
         window.scrollTo(0,document.body.scrollHeight);
       })

       this.apiService.socketListen('connection').subscribe(
        res =>{
          this.getMessages();
          window.scrollTo(0,document.body.scrollHeight);
        })

       this.getMessages();
   
   
   //
//  this.getProfile();
 window.scrollTo(0, document.body.scrollHeight);


 console.log('res', this.datas)
   }

}
