import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLayoutComponent } from './components/_layouts/web-layout/web-layout.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutRootComponent } from './components/_layouts/layout-root/layout-root.component';


const routes: Routes = [
  {path: '', component: LayoutRootComponent, children:[
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
