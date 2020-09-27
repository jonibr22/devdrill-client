import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Devdrill';
  user: User;

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }
  login(){
    this.router.navigate(['auth/login']);
  }
  logout() {
    this.authenticationService.logout();
  }
}
