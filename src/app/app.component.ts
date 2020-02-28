import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public firstRender: boolean = true;

  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // add svg icon of 404 page
    this.matIconRegistry.addSvgIcon(
      '404',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/404.svg'),
    );

    // add svg icon of GitHub
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/github-brands.svg',
      ),
    );

    // show only one time, the first render
    const routerEvents$ = this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.firstRender = false;
          routerEvents$.unsubscribe();
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
