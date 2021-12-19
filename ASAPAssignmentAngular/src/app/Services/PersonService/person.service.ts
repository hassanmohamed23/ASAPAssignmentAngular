import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from 'src/app/ViewModel/iperson';
import { IResponse } from 'src/app/ViewModel/iresponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpservice:HttpClient) { }
   
  //Get All Person
  getAllPerson():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Person`);
  }
   //Get Person By ID
   getPerson(PersonID:number):Observable<IResponse>
   {
     return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Person/${PersonID}`);
   }
    //Add Person
  AddPerson(Iperson:IPerson):Observable<IResponse>
  {
    
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Person/Add`,Iperson);
  }
    //Edit Person
  EditPerson(Iperson:IPerson):Observable<IResponse>
  {
    
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Person/Edit`,Iperson);
  }
  //Delete Person
  DeletePerson(PersonID:number):Observable<IResponse>
  {
    return this.httpservice.delete<IResponse>(`${environment.URLAPI}/api/Person/Delete/${PersonID}`);
  }

}
