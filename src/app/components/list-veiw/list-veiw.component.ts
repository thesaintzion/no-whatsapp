import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-veiw',
  templateUrl: './list-veiw.component.html',
  styleUrls: ['./list-veiw.component.scss']
})
export class ListVeiwComponent implements OnInit {

  constructor(public sharedServivce: SharedService) { 
    this.sharedServivce.activityTitle = 'Friends';
    this.sharedServivce.showArrow = true; 
    this.sharedServivce.hasLogo = false;
    this.sharedServivce.hasSearch = false ;
    this.sharedServivce.hasIconNavs = false;
  }

  setUserInfo(id, fullName, status, img){
    this.sharedServivce.user = {
      id,
      fullName,
      status,
      img
    }
  }

  ngOnInit() {
    
  }

}
