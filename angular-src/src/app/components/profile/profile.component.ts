import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('isLoggedIn ', this.authService.isLoggedIn());
    this.authService.getProfile().subscribe(
      (profile: any) => {
        this.user = profile.user;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

}
