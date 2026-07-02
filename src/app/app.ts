import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { HobbiesComponent } from './components/hobbies.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    HobbiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
