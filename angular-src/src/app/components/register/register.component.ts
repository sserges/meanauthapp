import { Component, OnInit } from '@angular/core';

import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private validateService: ValidateService
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      alert('Please fill in all fields');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      alert('Please use a valid email');
      return false;
    }
  }

}
