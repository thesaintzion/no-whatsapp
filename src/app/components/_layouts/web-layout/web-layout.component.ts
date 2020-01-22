import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators,  FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Messase } from '../../../models/message.model';
import {MatSnackBar} from '@angular/material/snack-bar';

import * as io from  'socket.io-client';



@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss']
})
export class WebLayoutComponent implements OnInit {
  
  formChat;

  messages: Messase[];
  user: any  = localStorage.getItem('user');
 mainUser =   this.user;
 socket;
  readonly url = 'http://localhost:3500/';
 

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private snackBar: MatSnackBar,) { 
    this.socket = io(this.url);
    this.formChat =  this.formBuilder.group({
      message: ['', [Validators.required]],
      
    });

   


  }



  sendMessage(){
    this.formChat.value.message = '';
if(this.user === 'null' || this.user === null || this.user === ''){
  this.openSnackBar(`Please add user`, 'Ok', 2000, 'bg-danger');
}else{
let message  = {
message: this.formChat.value.message,
user: this.user, 
}
console.log('the message', message);

this.apiService.sendMessage(message).subscribe(
res => {
console.log(res);
},
err => {
console.log(err);
});
}

window.scrollTo(0,document.body.scrollHeight);
   
  }

  addUser(){
    this.user = prompt('whats you name');
     localStorage.setItem('user', this.user);
      if(this.user === 'null' || this.user === null){
        this.openSnackBar(`Please add user`, 'Ok', 2000, 'bg-danger');
      }else{
        this.openSnackBar(`${this.user} added`, 'Ok', 2000, 'bg-success');
        this.mainUser = this.user;
      }
  }

  openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration,
      panelClass,
    });
  }


  ngOnInit() {
    if(this.user === 'null' || this.user === null){
     
      this.addUser();
    }

  
// socket update
    this.socket.on('update', () => {
      window.scrollTo(0,document.body.scrollHeight);
    });


 
   
  }

}
