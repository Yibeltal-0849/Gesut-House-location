import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="app-header">
        <div class="header-container">
          <a [routerLink]="['/']" class="brand-link">
            <div class="brand-name">
              <img
                class="brand-logo"
                src="assets/images/log3.png"
                alt="Guest House Locations"
                aria-hidden="true"
              />
              <span class="brand-text">Home</span>
            </div>
          </a>

          <nav class="main-nav">
            <ul>
              <li>
                <a [routerLink]="['/about']" routerLinkActive="active"
                  >About Us</a
                >
              </li>
              <li>
                <a [routerLink]="['/contact']" routerLinkActive="active"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>

      <footer class="app-footer">
        <div class="footer-links">
          <ul>
            <li><a [routerLink]="['/']">All Locations</a></li>
            <li><a [routerLink]="['/help']">Help Center</a></li>
            <li><a [routerLink]="['/contact']">Contact Us</a></li>
            <li><a [routerLink]="['/privacy']">Privacy Policy</a></li>
            <li><a [routerLink]="['/terms']">Terms of Service</a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p class="copyright">&copy; 2025 GuestHaven. All rights reserved.</p>
        </div>
      </footer>
    </main>
  `,
  imports: [HomeComponent, RouterModule],
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  title = 'practice';
}
