import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/PageLayout/header/header.component';
import { FooterComponent } from './Components/PageLayout/footer/footer.component';
import { AddPersonComponent } from './Components/PersonCompontents/add-person/add-person.component';
import { PersondetialsComponent } from './Components/PersonCompontents/persondetials/persondetials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdatePersonComponent } from './Components/PersonCompontents/update-person/update-person.component';
import { PersonComponent } from './Components/PersonCompontents/person/person.component';
import { AddressComponent } from './Components/AddressCompontents/address/address.component';
import { AddAddressComponent } from './Components/AddressCompontents/add-address/add-address.component';
import { UpdateAddressComponent } from './Components/AddressCompontents/update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HeaderComponent,
    FooterComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    PersondetialsComponent,
    AddressComponent,
    AddAddressComponent,
    UpdateAddressComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
