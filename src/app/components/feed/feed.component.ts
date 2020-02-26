import { Component, OnInit,  Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  windowScrolled: boolean; 
  headerFullWidth: boolean;
  loading = true;
  constructor(   @Inject(DOCUMENT) private document: Document, private router: Router, public sharedServivce: SharedService) {
    this.sharedServivce.showArrow = false; 
   }

  // scroll efect
@HostListener("window:scroll", [])
onWindowScroll() {
  if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 2200) {
    this.headerFullWidth = true;
  } 
 else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 1) {
  this.headerFullWidth = false;
  }
}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => 
        window.scrollTo(0, 0)
        ); 

        setTimeout( () =>{
this.loading = false;
        }, 3000)
  }

}
