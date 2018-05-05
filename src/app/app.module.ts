import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';

import {
  CoursesService
} from './services';

import {
  CoursesComponent,
  CoursesListComponent,
  CoursesGridComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
