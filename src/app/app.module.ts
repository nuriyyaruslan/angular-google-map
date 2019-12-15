import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule }    from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCOAZ3sQ2kjkL8f7Uoil6B3R4fT562HsXM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
