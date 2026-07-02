import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <p>© {{ year }} {{ data.name }}. Built with Angular.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      padding: 1.5rem 0;
      text-align: center;

      p {
        color: var(--text-muted);
        font-size: 0.85rem;
      }
    }
  `,
})
export class FooterComponent {
  readonly data = PORTFOLIO;
  readonly year = new Date().getFullYear();
}
