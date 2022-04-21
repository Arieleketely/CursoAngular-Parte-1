import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
