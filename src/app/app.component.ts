import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'no-whasapp';

  constructor(private router: Router){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0)); 
  }
  ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }
}
