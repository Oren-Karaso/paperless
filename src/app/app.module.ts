
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
// import { ToastService } from 'ng-uikit-pro-standard';      // Broke the app

import { AppComponent } from './app.component';

import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ReversePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    // ToastService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
