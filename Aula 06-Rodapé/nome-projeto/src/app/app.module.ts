import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componets/template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
