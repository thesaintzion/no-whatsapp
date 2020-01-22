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
  mainUser =   this.user;


  constructor(private apiService: ApiService) { 
    this.socket = io(this.url);
  }

  

  getMessages() { 
    this.apiService.getMessages().subscribe(
      res => {
        console.log(res);
        this.datas = res.data;
      },
      err => {
        console.log(err);
      }
    )
  }


  ngOnInit() {

    this.socket.on('update', () => {
      this.getMessages();
      window.scrollTo(0,document.body.scrollHeight);
    });

    this.getMessages();


    this.socket.on('chat', function(data) {
      console.log('we sent it back', data);
  });

 
  }

  

}
