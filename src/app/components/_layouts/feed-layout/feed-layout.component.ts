import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-feed-layout',
  templateUrl: './feed-layout.component.html',
  styleUrls: ['./feed-layout.component.scss']
})
export class FeedLayoutComponent implements OnInit {

  constructor(public sharedServivce: SharedService, public router: Router, private location: Location) {
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
    // this.sharedServivce.activityTitle = 'WhatsApp';
    // this.sharedServivce.showArrow = false;
    // this.sharedServivce.hasLogo = true;
    // this.sharedServivce.hasSearch = true ;
    // this.sharedServivce.hasIconNavs = true;
    // this.sharedServivce.showArrow
  }

}
