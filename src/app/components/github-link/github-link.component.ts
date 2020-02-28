import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-github-link',
  templateUrl: './github-link.component.html',
  styleUrls: ['./github-link.component.scss'],
})
export class GithubLinkComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // add svg icon of GitHub
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/github-brands.svg',
      ),
    );
  }
}
