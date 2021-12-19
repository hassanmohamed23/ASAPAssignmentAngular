import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { PersonService } from 'src/app/Services/PersonService/person.service';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-persondetials',
  templateUrl: './persondetials.component.html',
  styleUrls: ['./persondetials.component.sass']
})
export class PersondetialsComponent implements OnInit {
  person:any;
  Address:any;
  PersonID:number=0;
  constructor(private PersonService:PersonService,private AddressService:AddressService
    ,private Router:Router,private activatedRouter:ActivatedRoute ) { }
  Update()
  {
    this.Router.navigate(['person/update', this.PersonID])
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.PersonID=Number(params.get("pID"));
    });
    this.PersonService.getPerson(this.PersonID).subscribe({
      next:(IResponse:IResponse)=>{
            this.person=IResponse.data;
      }
    });
    this.AddressService.getAddressByPersonID(this.PersonID).subscribe({
      next:(IResponse:IResponse)=>{
            this.Address=IResponse.data[0];
            //console.log( this.Address);
      }
    });
  }

}
