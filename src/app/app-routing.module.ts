import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutRootComponent } from './components/_layouts/layout-root/layout-root.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard.service';
import { LoginComponent } from './components/login/login.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedLayoutComponent } from './components/_layouts/feed-layout/feed-layout.component';
import {  MobileLayoutComponent } from './components/_layouts/mobile-layout/mobile-layout.component';
import { ListVeiwComponent } from './components/list-veiw/list-veiw.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatusListComponent } from './components/status-list/status-list.component';
import { StatusComponent } from './components/status/status.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

      {path: '', component: MobileLayoutComponent, children:[
      {path: '', component: FeedLayoutComponent, children: [
      {path: '', component: FeedComponent },
      {path: 'feed', component: FeedComponent },
      {path: 'chat', component:ListVeiwComponent },
      {path: 'chat/:reciever', component: PrivateChatComponent },
      {path: 'friends', component: FriendsComponent },
      {path: 'friends/:userId', component: ProfileComponent },
      {path: 'profile/:userId', component: ProfileComponent },
      {path: 'status', component: StatusListComponent },
      {path: 'status/:userId', component: StatusComponent },
    ] },
   
    {path: 'home', component: HomeComponent }
  ], }
  // canActivate: [AuthGuard] 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
