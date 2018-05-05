import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatTableModule,
  MatPaginatorModule
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
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
