import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

    {
        path: 'home', 
        component: PagesComponent,
        children:[
            {path: '',component:FormStepperComponent}
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
