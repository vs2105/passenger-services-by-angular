import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private _snackBarservice : SnackbarService) { }

   passengerArray:Array<Ipassenger>=[{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
}, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
}, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
}, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
}, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
}];

getallpasenger(){
   return this.passengerArray
}

updatepassengerfullname(id:number, updatedname:string){
   this.passengerArray.forEach(pass=>{
    if(pass.id === id){
        pass.fullname=updatedname
        this._snackBarservice.onopensnackbar(`the Passenger Name is updated to ${updatedname}` )
    }
   })
}


removepassenger(id:number, name:string){
 let passindex= this.passengerArray.findIndex(pass=>pass.id === id)
 this.passengerArray.splice(passindex,1)
 this._snackBarservice.onopensnackbar(`${name} is removed from passenger data`)
}

}
