import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

const routes:Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true}),
    PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
