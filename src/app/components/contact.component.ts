import { Component } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="contact">
      <div class="container inner">
        <h2 class="section-title">Get in <span>touch</span></h2>
        <p class="section-lead centered">
          Whether you have a project in mind, a question, or just want to say hi —
          my inbox is always open.
        </p>

        <a [href]="'mailto:' + data.email" class="btn btn-primary">
          ✉️ {{ data.email }}
        </a>

        <div class="socials">
          @for (social of data.socials; track social.url) {
            <a [href]="social.url" target="_blank" rel="noopener">{{ social.label }}</a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      background: var(--bg-soft);
    }

    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .socials {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;

      a {
        color: var(--text-muted);
        font-weight: 500;

        &:hover {
          color: var(--accent);
        }
      }
    }
  `,
})
export class ContactComponent {
  readonly data = PORTFOLIO;
}
