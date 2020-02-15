import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
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

    // Register User
    this.authService.registerUser(user).subscribe(
      (data: any) => {
        if (data.success) {
          alert('You are now registered and can log in');
          this.router.navigate(['/login']);
        } else {
          alert('Something went wrong');
          this.router.navigate(['/register']);
        }
      }
    );
  }

}
