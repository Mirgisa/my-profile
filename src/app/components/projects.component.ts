import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured <span>projects</span></h2>
        <p class="section-lead">A selection of things I've built.</p>

        <div class="grid">
          @for (project of data.projects; track project.title) {
            <article class="card">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>

              <div class="chips">
                @for (tag of project.tags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>

              <div class="links">
                @if (project.liveUrl) {
                  <a [href]="project.liveUrl" target="_blank" rel="noopener">Live demo ↗</a>
                }
                @if (project.repoUrl) {
                  <a [href]="project.repoUrl" target="_blank" rel="noopener">Source ↗</a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .projects {
      background: var(--bg-soft);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      display: flex;
      flex-direction: column;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.75rem;
      transition: transform 0.15s ease, border-color 0.15s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: var(--accent);
      }

      h3 {
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-muted);
        font-size: 0.95rem;
        flex: 1;
      }
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .links {
      display: flex;
      gap: 1.25rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  `,
})
export class ProjectsComponent {
  readonly data = PORTFOLIO;
}
