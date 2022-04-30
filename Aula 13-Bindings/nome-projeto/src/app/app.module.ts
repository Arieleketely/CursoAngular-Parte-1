import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';

import { HomeComponent } from './Views/home/home.component';

import { ProductCrudComponent } from './Views/product-crud/product-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { LetraDirective } from './Diretivas/letra.directive';
import { ProductCreateComponent } from './componets/template/product/product-create/product-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    LetraDirective,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



