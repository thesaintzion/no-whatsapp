import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators,  FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Messase } from '../../../models/message.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss']
})
export class WebLayoutComponent implements OnInit {
  
  formChat;
  messages: Messase[];
  socket;

 userID: any;
 userName: any;
 userEmail: any;
 userNameFirstLater = '';
 users: [];

//selected use
selectedUser;
startChat = true;
 
 
  



  constructor(public sharedService: SharedService, private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    
    ) { 
   
    this.formChat =  this.formBuilder.group({
      message: ['', [Validators.required]]
    });

  }


//   sendMessage(){
// let message  = {
// message: this.formChat.value.message,
// }

// this.apiService.sendMessage(message).subscribe(
// res => {
// console.log(res);
// this.formChat.setValue({
//   message: ""
// }) 
// },
// err => {
//   this.openSnackBar(err.error.message, 'Ok', 2000, 'bg-danger');
// console.log(err);

// });
// window.scrollTo(0,document.body.scrollHeight);
//   }

  // 
  openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration,
      panelClass,
    });
  }

  //get profile 
//   getProfile(){
//     this.apiService.getProfile().subscribe(
//       res => {
// this.userID = res.user._id;
// this.userName = res.user.userName;
// this.userEmail = res.user.userEmail;

// this.getFirstLater(this.userName);

// console.log(res);
//       },
//       err => {
// console.log(err);
// // this.router.navigate(['/login']);
//       }
//     )
//   }


  // getFirstLater(userName: any){
  //   this.userNameFirstLater = userName.charAt(0);
  // }

//   getAllUsers(){
//     this.apiService.getAllUsers().subscribe(
//       res => {

// this.users = res.users;
// console.log('all users', this.users);
//       },
//       err => {
//         console.log(err);
//       }
//     )
//   }

// handle selected ueer
// selectUser(id, email, userName){
// this.userName = userName;
// this.getFirstLater(userName);
// this.startChat = true;
// window.scrollTo(0, document.body.scrollHeight);
// }

  ngOnInit() {


    this.apiService.socketListen('connection').subscribe(
      res =>{
  
        window.scrollTo(0,document.body.scrollHeight);
      })

    // Socket listens
    // this.apiService.socketListen('update').subscribe(
    //   res =>{
    //     window.scrollTo(0,document.body.scrollHeight);
    //   });

    //   this.apiService.socketListen('online').subscribe(
    //     res =>{
    //       console.log( res);
    //   this.getAllUsers();
    //     });
  
    //     this.apiService.socketListen('chat').subscribe(
    //       res =>{
    //         console.log('hello form here', res);
    //       });
    

    // 
    // this.getProfile();
    // this.getAllUsers(); 
    // window.scrollTo(0,document.body.scrollHeight);
    
  }

 

}
