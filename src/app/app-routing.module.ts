import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutRootComponent } from './components/_layouts/layout-root/layout-root.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard.service';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '', component: LayoutRootComponent, children:[
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent }
  ], canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
