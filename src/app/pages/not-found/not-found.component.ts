import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  /** go to home and reload for better experience: show loader */
  backToHome() {
    window.location.href = '/posts';
  }
}
