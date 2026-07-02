import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About <span>me</span></h2>

        <div class="body">
          @for (paragraph of data.about; track $index) {
            <p>{{ paragraph }}</p>
          }
          <p class="location">📍 Based in {{ data.location }}</p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about {
      background: var(--bg-soft);
    }

    .body {
      max-width: 720px;

      p {
        color: var(--text-muted);
        margin-bottom: 1rem;
      }
    }

    .location {
      color: var(--text);
      font-weight: 500;
    }
  `,
})
export class AboutComponent {
  readonly data = PORTFOLIO;
}
