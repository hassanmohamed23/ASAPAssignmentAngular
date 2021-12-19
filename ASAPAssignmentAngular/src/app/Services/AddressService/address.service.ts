import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../../ViewModel/iresponse';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IAddress } from '../../ViewModel/iaddress';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpservice:HttpClient) { }
   //Get All Address  
   getAllAddress():Observable<IResponse>
   {
     return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Address`);
   }
  //Get List of Address By Person ID 
  getAddressByPersonID(PersonID:number):Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Address/GetAddressByPersonID/${PersonID}`);
  }
   //Get  Address By Address ID 
   getAddressByID(AddressID:number):Observable<IResponse>
   {
     return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Address/GetAddressById/${AddressID}`);
   }
  //Add Address
  AddAddress(Iaddress:IAddress):Observable<IResponse>
  {
    
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Address/Add`,Iaddress);
  }
   //Edit Address
  EditAddress(Iaddress:IAddress):Observable<IResponse>
  {
   
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Address/Edit`,Iaddress);
  }
  //Delete Address
  DeleteAddress(AddressID:number):Observable<IResponse>
  {
    return this.httpservice.delete<IResponse>(`${environment.URLAPI}/api/Address/Delete/${AddressID}`);
  }
}
