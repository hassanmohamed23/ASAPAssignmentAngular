import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './Components/AddressCompontents/add-address/add-address.component';
import { AddressComponent } from './Components/AddressCompontents/address/address.component';
import { UpdateAddressComponent } from './Components/AddressCompontents/update-address/update-address.component';
import { AddPersonComponent } from './Components/PersonCompontents/add-person/add-person.component';
import { PersonComponent } from './Components/PersonCompontents/person/person.component';
import { PersondetialsComponent } from './Components/PersonCompontents/persondetials/persondetials.component';
import { UpdatePersonComponent } from './Components/PersonCompontents/update-person/update-person.component';


const routes: Routes = [
  {path:'', redirectTo:'/person', pathMatch:'full'}, //Default path
  {path:'person', component: PersonComponent },
  {path:'person/add', component:AddPersonComponent  },
  {path:'person/update/:pID', component: UpdatePersonComponent },
  {path:'person/detials/:pID', component: PersondetialsComponent },
  {path:'address', component:AddressComponent  },
  {path:'address/add/:pID', component: AddAddressComponent },
  {path:'address/update/:pID', component: UpdateAddressComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


