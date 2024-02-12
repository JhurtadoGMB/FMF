import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PagesComponent } from './pages.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    FormStepperComponent,
    PagesComponent
  ],
  exports:[
    FormStepperComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule
  ], 
})
export class PagesModule { }
