import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/Services/PersonService/person.service';
import { IPerson } from 'src/app/ViewModel/iperson';
import { IResponse } from 'src/app/ViewModel/iresponse';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.sass']
})
export class AddPersonComponent implements OnInit {
 Iperson:IPerson ={}as IPerson;
  constructor(private PersonService:PersonService,private Router:Router) { }
 
  AddPerson()
  {
     this.PersonService.AddPerson(this.Iperson).subscribe({
       next:(Response:IResponse)=>{
          alert(Response.message);
          this.Router.navigate(['/person']);
         
       }
     });
    
  }
  ngOnInit(): void {
  }

}
