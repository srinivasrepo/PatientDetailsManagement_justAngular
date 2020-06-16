import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AngularMaterialModule } from './angularMaterial.module';
import { HelpersModule } from './helpers/helpers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ConformationComponent } from './helpers/conformation/conformation.component';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    ConformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelpersModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NotifierModule,
  ],
  providers: [],
  entryComponents: [ConformationComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
