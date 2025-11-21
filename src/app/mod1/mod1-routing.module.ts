import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prac1Component } from './prac1/prac1.component';
import { Prac2Component } from './prac2/prac2.component';

const routes: Routes = [
  {path:'',component:Prac1Component},
  {path:'prac2',component:Prac2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1RoutingModule { }
