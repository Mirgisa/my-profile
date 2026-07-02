import { Component, signal } from '@angular/core';
import { PORTFOLIO } from '../portfolio.data';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="container nav">
        <a href="#home" class="logo">{{ data.name.split(' ')[0] }}<span>.</span></a>

        <button
          class="menu-btn"
          (click)="menuOpen.set(!menuOpen())"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul class="links" [class.open]="menuOpen()">
          @for (link of links; track link.href) {
            <li>
              <a [href]="link.href" (click)="menuOpen.set(false)">{{ link.label }}</a>
            </li>
          }
        </ul>
      </nav>
    </header>
  `,
  styles: `
    .header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(11, 17, 32, 0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text);

      span {
        color: var(--accent);
      }
    }

    .links {
      display: flex;
      gap: 1.75rem;
      list-style: none;

      a {
        color: var(--text-muted);
        font-size: 0.95rem;
        font-weight: 500;
        transition: color 0.15s ease;

        &:hover {
          color: var(--accent);
        }
      }
    }

    .menu-btn {
      display: none;
      background: none;
      border: none;
      color: var(--text);
      font-size: 1.4rem;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      .menu-btn {
        display: block;
      }

      .links {
        display: none;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 0;
        background: var(--bg-soft);
        border-bottom: 1px solid var(--border);

        &.open {
          display: flex;
        }

        a {
          display: block;
          padding: 0.9rem 1.5rem;
        }
      }
    }
  `,
})
export class HeaderComponent {
  readonly data = PORTFOLIO;
  readonly menuOpen = signal(false);

  readonly links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
  ];
}
