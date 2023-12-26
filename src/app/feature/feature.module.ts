import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DentalComponent } from './dental/dental.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    DentalComponent,
    StaffComponent,
    AboutComponent,
    ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    DentalComponent,
    StaffComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class FeatureModule { }
