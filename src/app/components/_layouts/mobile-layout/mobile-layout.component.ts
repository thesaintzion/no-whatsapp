import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators,  FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Messase } from '../../../models/message.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SharedService } from 'src/app/services/shared.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss']
})
export class MobileLayoutComponent implements OnInit {
users = [];
userForm;
  fancyBg = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    socket;
readonly socketUrl: string = 'http://localhost:3500/';



  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService, private router: Router,
    private formBuilder: FormBuilder, private sharedService: SharedService) {
    this.userForm =  this.formBuilder.group({
      userName: ['', [Validators.required]],
      userId: ['', [Validators.required]]
    });

    this.socket = io(this.socketUrl);


    let data = [
      {
        name: 'Saint Zion',
        id: '2948456505'
      },
      {
        name: 'Rufus Graphics',
        id: '49567539439'
      },
      {
        name: 'Zino Aggital',
        id: '2948455456505'
      },
      {
        name: 'Victor Army',
        id: '954583230223'
      }
    ]

    this.users = data;

  }



  onSubmit(){
    if(this.userForm.invalid){
      this.sharedService.openSnackBar('Please fill in name and is', '', 2000, 'bg-danger')
    }else{
      let user = {
        name: this.userForm.value.userName,
        id: this.userForm.value.userId
      }

      this.socket.emit('user_loggedin',  user);
    }
  }

  ngOnInit() {
    this.socket.on('connection', (res)  =>{
     this.sharedService.openSnackBar('Welcome', '', 3000, 'bg-success');
  })



    this.socket.on('user_loggedin', (res) =>{
      console.log('new user', res);
      this.users.push(res);
      this.sharedService.openSnackBar('Someone Came online', '', 3000, '');
  })

  }

 

}
