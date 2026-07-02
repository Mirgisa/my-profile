import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="hero">
      <div class="container inner">
        <div class="text">
          <p class="greeting">Hi, my name is</p>
          <h1>{{ data.name }}</h1>
          <h2>{{ data.role }}</h2>
          <p class="tagline">{{ data.tagline }}</p>

          <div class="actions">
            <a href="#projects" class="btn btn-primary">View my work</a>
            <a href="#contact" class="btn btn-ghost">Get in touch</a>
          </div>

          <div class="socials">
            @for (social of data.socials; track social.url) {
              <a [href]="social.url" target="_blank" rel="noopener">{{ social.label }}</a>
            }
          </div>
        </div>

        <div class="photo-wrap">
          <img [src]="data.photo" [alt]="'Photo of ' + data.name" class="photo" />
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      padding: 6rem 0;
    }

    .inner {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      align-items: center;
      gap: 3rem;
    }

    .greeting {
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 800;
      line-height: 1.15;
    }

    h2 {
      font-size: clamp(1.3rem, 3vw, 1.9rem);
      font-weight: 700;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }

    .tagline {
      color: var(--text-muted);
      max-width: 480px;
      margin: 1.25rem 0 2rem;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .socials {
      display: flex;
      gap: 1.25rem;
      margin-top: 2rem;

      a {
        color: var(--text-muted);
        font-size: 0.9rem;
        font-weight: 500;

        &:hover {
          color: var(--accent);
        }
      }
    }

    .photo-wrap {
      display: flex;
      justify-content: center;
    }

    .photo {
      width: min(300px, 70vw);
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid var(--accent);
      box-shadow: 0 0 60px rgba(79, 156, 255, 0.25);
    }

    @media (max-width: 800px) {
      .hero {
        padding: 3.5rem 0;
      }

      .inner {
        grid-template-columns: 1fr;
      }

      .photo-wrap {
        order: -1;
      }
    }
  `,
})
export class HeroComponent {
  readonly data = PORTFOLIO;
}
