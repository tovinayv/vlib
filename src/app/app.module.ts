import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ClarityModule,
      BrowserAnimationsModule,
      LayoutModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
   constructor() {
      console.log('Loading AppModule');
   }
}
