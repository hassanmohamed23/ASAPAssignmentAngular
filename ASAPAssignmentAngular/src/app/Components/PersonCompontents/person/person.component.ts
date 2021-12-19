import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { PersonService } from 'src/app/Services/PersonService/person.service';
import { IPerson } from 'src/app/ViewModel/iperson';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  ListOfPerson:any;
  Message:string="";
 
  
  constructor(private PersonService:PersonService ,private route:Router ) { }

  AddAddress(PersonID:number)
  {
    this.route.navigate(['address/add',PersonID]);
  }
  Details(PersonID:number)
  {
    this.route.navigate(['person/detials',PersonID]);
  }
  Add(PersonID:number)
  {
    this.route.navigate(['person/add']);
  }
  Update(PersonID:number)
  {
    this.route.navigate(['person/update',PersonID]);
  }
  Delete(PersonID:number)
  {
    console.log(PersonID);
    this.PersonService.DeletePerson(PersonID).subscribe();
    alert ("Deleted SuccessFully");
   this.GetProduct();
  }
  GetProduct()
  {
    this.PersonService.getAllPerson().subscribe({
      next:(IResponse :IResponse)=>{
         this.ListOfPerson=IResponse.data;
      }
    });
  }
  ngOnInit(): void {

    this.GetProduct();
  }

}
