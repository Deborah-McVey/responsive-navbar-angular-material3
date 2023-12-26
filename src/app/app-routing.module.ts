import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Feature module components
import { HomeComponent } from './feature/home/home.component';
import { DentalComponent } from './feature/dental/dental.component';
import { StaffComponent } from './feature/staff/staff.component';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dental', component:DentalComponent},
  {path:'staff', component:StaffComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
