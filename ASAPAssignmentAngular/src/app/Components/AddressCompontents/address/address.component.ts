import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { PersonService } from 'src/app/Services/PersonService/person.service';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {
 ListOfAddress:any;
  constructor(private AddressService:AddressService,private Router:Router) { }

  Add(PersonID:number){
    this.Router.navigate(['address/add/',PersonID]);
  }
  Update(AddressID:number)
  {
    this.Router.navigate(['address/update/',AddressID]);
  }
  Delete(AddressID:number)
  {
    this.AddressService.DeleteAddress(AddressID).subscribe({
      next:(Response:IResponse)=>{
        alert(Response.message);
        this.GetAddress();
      }
    });
  }
  GetAddress()
  {
    this.AddressService.getAllAddress().subscribe({
      next:(Response:IResponse)=>{
        this.ListOfAddress=Response.data;
   
      }
    });
  }
  ngOnInit(): void {
    this.GetAddress();
  }

}
