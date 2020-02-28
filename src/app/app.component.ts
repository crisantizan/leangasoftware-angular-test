import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public firstRender: boolean = true;

  constructor(private router: Router) {
    // show only one time, the first render
    const ob$ = this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.firstRender = false;
          ob$.unsubscribe();
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
