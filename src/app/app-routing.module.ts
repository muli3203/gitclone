import { LandingComponent } from './landing/landing.component';
// import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "", component:LandingComponent},
  {path: "profile", component: ProfileComponent},
  {path: "search", component: SearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
