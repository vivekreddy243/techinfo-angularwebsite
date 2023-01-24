import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ABOUTComponent } from './about/about.component';
//import { CONTACTComponent } from './contact/contact.component';
//import { HomeComponent } from './home/home.component';
const routes: Routes = [
 
  //{path:'home',component :HomeComponent},
  //{path:'about',component :ABOUTComponent},
  //{path:'contact',component:CONTACTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
