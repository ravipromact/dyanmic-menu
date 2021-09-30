import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { DynammicComponent } from './dynammic/dynammic.component';
// import { DynammicItemComponent } from './dynammic-item/dynammic-item.component';
// import { DynammicItemLastComponent } from './dynammic-item-last/dynammic-item-last.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
