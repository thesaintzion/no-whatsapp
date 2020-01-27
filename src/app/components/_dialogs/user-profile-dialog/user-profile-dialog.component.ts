import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';



export interface DialogData {
  userName: string;
}



@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss']
})
export class UserProfileDialogComponent implements OnInit {


  user;

  userName;
  mainUserEmail;
  createdAt;
  userSlug = '';


  constructor(public dialogRef: MatDialogRef<UserProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userEmail, private apiService: ApiService   ) { }



    getUserSlug(username){
     

    }



    // make call and get single user via email
    getSingleUser(){
      // let userEmail = {
      //   userEmail: this.userEmail
      // }
      console.log(this.userEmail);
    this.apiService.getSingleUsers(this.userEmail).subscribe(
      res => {
        this.mainUserEmail = res.user.userEmail;
        this.userName = res.user.userName;
        this.createdAt = res.user.createdAt;
        this.userSlug =  res.user.userName.replace(/ /g, '').toLowerCase();
        console.log(res,  this.user);
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit() {
    this.getSingleUser();
    
  }



}
