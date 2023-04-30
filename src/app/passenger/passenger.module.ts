import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassCountComponent } from './passenger-dashboard/pass-count/pass-count.component';
import { PassengerDetailsComponent } from './passenger-dashboard/passenger-details/passenger-details.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassCountComponent,
    PassengerDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule 
  ],
  exports:[PassengerDashboardComponent]
})
export class PassengerModule { }
