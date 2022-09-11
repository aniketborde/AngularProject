import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {
    component: RegistrationFormComponent,
    path: 'register',
  },
  {
    component: ChangePasswordComponent,
    path: 'changePassword',
  },
  {
    component: HelloComponent,
    path: 'hello',
  },
  {
    component: FormComponent,
    path: 'form',
  },
  {
    component: BookComponent,
    path: 'book',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
