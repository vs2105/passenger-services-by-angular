import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengerArray:Array<Ipassenger>=[]
  checkedincount!: number
  constructor(private _passengerservice:PassengerService) { }

  ngOnInit(): void {
    this.passengerArray=this._passengerservice.getallpasenger()
    this.checkedincount=this.passengerArray.filter(pass=>pass.checkedIn === true).length
  }

  onRemoveUpdate(eve:any){
    this.checkedincount=this.passengerArray.filter(pass=>pass.checkedIn === true).length
  }

}
