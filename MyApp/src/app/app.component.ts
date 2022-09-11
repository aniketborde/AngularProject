import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Angular"
  courseName = 'Angulardemo';
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];
  onSubmit(name: string, password: string) {
    
    this.submitted = true;
    this.userName = name;
    if (name === "admin" && password === "admin") {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}

