import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-hobbies',
  template: `
    <section id="hobbies">
      <div class="container">
        <h2 class="section-title">Beyond <span>the code</span></h2>
        <p class="section-lead">A few things I enjoy outside of work.</p>

        <div class="grid">
          @for (hobby of data.hobbies; track hobby.title) {
            <div class="card">
              <div class="emoji">{{ hobby.emoji }}</div>
              <h3>{{ hobby.title }}</h3>
              <p>{{ hobby.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.75rem;
      text-align: center;

      .emoji {
        font-size: 2rem;
        margin-bottom: 0.75rem;
      }

      h3 {
        font-size: 1.05rem;
        margin-bottom: 0.4rem;
      }

      p {
        color: var(--text-muted);
        font-size: 0.9rem;
      }
    }
  `,
})
export class HobbiesComponent {
  readonly data = PORTFOLIO;
}
