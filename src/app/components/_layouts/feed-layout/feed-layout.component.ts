import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feed-layout',
  templateUrl: './feed-layout.component.html',
  styleUrls: ['./feed-layout.component.scss']
})
export class FeedLayoutComponent implements OnInit {

  constructor(public sharedServivce: SharedService, public router: Router, private location: Location, private apiServices: ApiService) {
    this.sharedServivce.activityTitle = 'WhatsApp';
    this.sharedServivce.showArrow = false;
    this.sharedServivce.hasLogo = true;
    this.sharedServivce.hasSearch = true ;
    this.sharedServivce.hasIconNavs = true;
    this.sharedServivce.isProfile = false;
    this.sharedServivce.footer = true;
   }

  goBack(){
    this.location.back();
    this.sharedServivce.activityTitle = 'WhatsApp';
    this.sharedServivce.showArrow = false;
    this.sharedServivce.hasLogo = true;
    this.sharedServivce.hasSearch = true;
    this.sharedServivce.hasIconNavs = true;
    this.sharedServivce.isProfile = false;
    this.sharedServivce.footer = true;
  }
  ngOnInit() {
    this.apiServices.textApi().subscribe(
      res => {
        console.log('Res From Api', res)
      },
      err => {
        console.log('Error From Api', err)
      }
    )
    // this.sharedServivce.activityTitle = 'WhatsApp';
    // this.sharedServivce.showArrow = false;
    // this.sharedServivce.hasLogo = true;
    // this.sharedServivce.hasSearch = true ;
    // this.sharedServivce.hasIconNavs = true;
    // this.sharedServivce.showArrow
  }

}
