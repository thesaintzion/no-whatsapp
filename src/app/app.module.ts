import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { WebLayoutComponent } from './components/_layouts/web-layout/web-layout.component';
import { MaterialModule } from './shared/materials/material';
import { MobileLayoutComponent } from './components/_layouts/mobile-layout/mobile-layout.component';
import { LayoutRootComponent } from './components/_layouts/layout-root/layout-root.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebLayoutComponent,
    MobileLayoutComponent,
    LayoutRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents:[
    WebLayoutComponent,
    MobileLayoutComponent
  ]
})
export class AppModule { }
