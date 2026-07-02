import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills">
      <div class="container">
        <h2 class="section-title">My <span>skills</span></h2>
        <p class="section-lead">Technologies and tools I work with.</p>

        <div class="grid">
          @for (group of data.skillGroups; track group.title) {
            <div class="card">
              <h3>{{ group.title }}</h3>
              <div class="chips">
                @for (skill of group.skills; track skill) {
                  <span class="chip">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.75rem;

      h3 {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `,
})
export class SkillsComponent {
  readonly data = PORTFOLIO;
}
