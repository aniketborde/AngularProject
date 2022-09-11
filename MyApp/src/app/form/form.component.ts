import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControlName,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  userForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      txtName: ['', Validators.required],
      txtEmail: ['', [Validators.required, Validators.email]],
      txtMobile: ['', [Validators.required, Validators.minLength(10)]],
      txtPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get getform() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    alert('SUCCESS' + JSON.stringify(this.userForm.value));
  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}