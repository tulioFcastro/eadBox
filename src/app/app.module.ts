import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';

import {
  CoursesService
} from './services';
import { CoursesListComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: [
    MatListModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
