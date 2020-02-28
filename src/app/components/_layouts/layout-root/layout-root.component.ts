import { Component, OnInit } from '@angular/core';
// import { WebLayoutComponent } from '../web-layout/web-layout.component';
// import { MobileLayoutComponent } from '../mobile-layout/mobile-layout.component';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-layout-root',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.scss']
})
export class LayoutRootComponent implements OnInit {
  layout: any;
  // func(){
  //   setTimeout( ()=>{
  //     this.layout = MobileLayoutComponent;
  //   }, 2000);
  //   setTimeout( ()=>{
  //     this.layout = WebLayoutComponent; 
  //   }, 4000);
  // }
 
  constructor() {
    // this.layout = MobileLayoutComponent;
// setInterval( () => {
//   // this.func();
// }, 5000 );
   }
  ngOnInit() {
  }

}
