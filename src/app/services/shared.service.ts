import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AboutDialogComponent } from '../components/_dialogs/about-dialog/about-dialog.component';
import { UserProfileDialogComponent } from '../components/_dialogs/user-profile-dialog/user-profile-dialog.component';






@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }
showArrow: boolean;
activityTitle = '';
hasLogo:  boolean;
hasSearch:  boolean;
hasIconNavs:  boolean;
isProfile:  boolean;
footer: boolean;

user = {
  id: '',
  fullName: '',
  status: '',
  img: ''
}

  openSnackBar(message: string, action: string, duration: number, panelClass: string,) {
    this.snackBar.open(message, action, {
      duration,
      panelClass,
    });
  }

    ///////  DIALOAGS ///////
//user dash logout 
openAboutDialog(): void {
  this.dialog.open(AboutDialogComponent, {  
    width: '300px',
 });
}

//user dash logout 
openUserProfileDialog(userEmail: any): void {
  this.dialog.open(UserProfileDialogComponent, {  
    width: '500px',
    data:userEmail
 });
}


}
