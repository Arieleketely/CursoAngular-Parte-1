import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from '../Rotas/home/home.component';

import { ProductCrudComponent } from '../Rotas/product-crud/product-crud.component';

const routes:Routes=[
  {

  path:"",
  component:HomeComponent
},

{
  path:"product",
  component:ProductCrudComponent
},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
