import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  from!: FormGroup
  constructor(fb:FormBuilder) {
    this.from = fb.group({
      oldPassword:['',Validators.required],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]

    });

   }

  ngOnInit(): void {
  }

}
