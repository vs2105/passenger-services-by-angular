import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  
  @Input() passobj!: Ipassenger
  @Output() emitpass:EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  iseditable :boolean=false
  constructor(private _passengerservice : PassengerService) { }

  ngOnInit(): void {
    
  }
  onDone(pname:string){
    console.log(pname)
  this.iseditable=!this.iseditable
  this._passengerservice.updatepassengerfullname(this.passobj.id, pname)
  }

  onremove(){
    this._passengerservice.removepassenger(this.passobj.id, this.passobj.fullname)
    this.emitpass.emit(this.passobj)
  }

}
