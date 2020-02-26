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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AboutDialogComponent } from './components/_dialogs/about-dialog/about-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { UserProfileDialogComponent } from './components/_dialogs/user-profile-dialog/user-profile-dialog.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedLayoutComponent } from './components/_layouts/feed-layout/feed-layout.component';
import { ListVeiwComponent } from './components/list-veiw/list-veiw.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebLayoutComponent,
    MobileLayoutComponent,
    LayoutRootComponent,
    RegisterComponent,
    AboutDialogComponent,
    LoginComponent,
    UserProfileDialogComponent,
    FeedComponent,
    FeedLayoutComponent,
    ListVeiwComponent,
    PrivateChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents:[
    WebLayoutComponent,
    MobileLayoutComponent,
    AboutDialogComponent,
    UserProfileDialogComponent
  ]
})
export class AppModule { }
