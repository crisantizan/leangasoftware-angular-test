import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // add svg icon of GitHub
    this.matIconRegistry.addSvgIcon(
      '404',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/404.svg'),
    );
  }

  /** go to home and reload for better experience: show loader */
  backToHome() {
    window.location.href = '/posts';
  }
}
