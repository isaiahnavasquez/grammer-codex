<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router'
>>>>>>> f96c0430a0d70442f2a3069dd59bced23b3716b5

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'app';
=======

export class AppComponent implements OnInit {
  
  title = 'app';
  loggedIn: boolean = false;
  activeRoute: string = '';
  
  constructor (
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.isLoggedIn();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
        console.log(this.activeRoute)
      }
    });
  }
  
  isLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn();
  }
  
>>>>>>> f96c0430a0d70442f2a3069dd59bced23b3716b5
}
