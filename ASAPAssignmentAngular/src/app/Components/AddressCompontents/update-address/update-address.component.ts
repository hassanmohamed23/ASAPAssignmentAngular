import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { IAddress } from 'src/app/ViewModel/iaddress';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.sass']
})
export class UpdateAddressComponent implements OnInit {
  Iaddress:IAddress={}as IAddress;
  AddressID:number=0;
  address:any;
  constructor(private AddressService:AddressService ,private activatedRouter:ActivatedRoute
    ,private Router:Router) { }

  UpdateAddress()
  {
    this.AddressService.EditAddress(this.address).subscribe({
      next:(IResponse:IResponse)=>{
         alert(IResponse.message);
         this.Router.navigate(['address']);
       
      }
    });
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.AddressID=Number(params.get("pID"));
  
    });
   this.AddressService.getAddressByID(this.AddressID).subscribe({
     next:(IResponse:IResponse)=>{
        this.address=IResponse.data;
      
     }
   });
  }

}
