import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormComponent } from './form/form.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { DataReadService } from './login/login/data-read.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RegistrationFormComponent,
    ChangePasswordComponent,
    FormComponent,
    BookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService, DataReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
