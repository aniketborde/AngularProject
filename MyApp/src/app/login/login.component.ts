import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataReadService } from './login/data-read.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataReadService]
})
export class LoginComponent {
  traniees = [
    {
      empid: 712930, name: "nidhi", marks: 95
    },
    {
      empid: 712931, name: "alex", marks: 966
    }
  ]

}
