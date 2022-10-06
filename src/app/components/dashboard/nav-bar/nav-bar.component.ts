import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usermail:any | "";

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.usermail = user.email;
      }
    });
  }

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
