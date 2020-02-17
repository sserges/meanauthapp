import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(
      (data: any) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['dashboard']);
          alert('Now you are logged in');
        } else {
          alert(data.msg);
          this.router.navigate(['login']);
        }
      }
    );
  }

}
