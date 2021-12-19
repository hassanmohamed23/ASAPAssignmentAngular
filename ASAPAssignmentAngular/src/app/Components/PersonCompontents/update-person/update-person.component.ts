import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/Services/PersonService/person.service';
import { IPerson } from 'src/app/ViewModel/iperson';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.sass']
})
export class UpdatePersonComponent implements OnInit {
  PersonID:number =0;
  Person:any;
  constructor(private PersonService:PersonService,private Router:Router, private activatedRouter:ActivatedRoute) { }

  UpdatePerson()
  {
    this.PersonService.EditPerson(this.Person).subscribe({
      next:(IResponse:IResponse)=>{
          alert(IResponse.message);
          this.Router.navigate(['/person']);      
        }
    })
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.PersonID=Number(params.get("pID"));
     console.log( this.PersonID);
    });
    this.PersonService.getPerson( this.PersonID).subscribe({
      next:(IResponse:IResponse)=>{
       this.Person=IResponse.data;
      }
    });
  }

}
