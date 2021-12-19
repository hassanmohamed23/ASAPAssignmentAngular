import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { IAddress } from 'src/app/ViewModel/iaddress';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.sass']
})
export class AddAddressComponent implements OnInit {

  PersonID:number=0;
  address:IAddress={}as IAddress ;

  constructor(private AddressService:AddressService ,private activatedRouter:ActivatedRoute,private Router:Router) { }

  AddAddress()
  {
    this.address.personID=this.PersonID;
    this.AddressService.AddAddress(this.address).subscribe({
      next:(IResponse:IResponse)=>{
         alert(IResponse.message);
         this.Router.navigate(['address']);
      }
    });
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.PersonID=Number(params.get("pID"));
      console.log(this.PersonID);
  
    });

  }

}
