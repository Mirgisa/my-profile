/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit everything about yourself here.
 *  No other file needs to change to update text, links, skills,
 *  projects or hobbies.
 * ─────────────────────────────────────────────────────────────
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Hobby {
  emoji: string;
  title: string;
  description: string;
}

export const PORTFOLIO = {
  name: 'Mirgisa Ketata',
  role: 'Full-Stack Developer',
  tagline:
    'I build reliable backend systems with Java and Spring Boot, and clean, modern frontends with Angular. Always learning and contributing to open source.',
  location: 'Addis Ababa, Ethiopia',
  email: 'mirgisakitata@gmail.com',
  /** Put your photo in the /public folder and update this path. */
  photo: 'profile.svg',
  cvUrl: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/Mirgisa', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:mirgisakitata@gmail.com', icon: 'mail' },
  ] as SocialLink[],

  about: [
    `I'm a full-stack developer at Accenture working with Java, Spring Boot, SQL and
     microservices on the backend and Angular on the frontend. I enjoy the whole journey
     of a product — from designing a clean architecture to shipping something polished
     that solves a real problem.`,
    `When I'm not coding, I'm usually learning a new technology, contributing to
     open-source projects, or sharing what I know with others.`,
  ],

  skillGroups: [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'RxJS'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'SQL'],
    },
    {
      title: 'Tools & Practices',
      skills: ['Git & GitHub', 'CI/CD', 'Testing', 'Agile', 'Figma'],
    },
  ] as SkillGroup[],

  projects: [
    {
      title: 'Project One',
      description:
        'A short description of what this project does, the problem it solves and what makes it interesting.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      liveUrl: '',
      repoUrl: 'https://github.com/Mirgisa',
    },
    {
      title: 'Project Two',
      description:
        'A short description of what this project does, the problem it solves and what makes it interesting.',
      tags: ['Java', 'Spring Boot', 'SQL'],
      liveUrl: '',
      repoUrl: 'https://github.com/Mirgisa',
    },
    {
      title: 'Project Three',
      description:
        'A short description of what this project does, the problem it solves and what makes it interesting.',
      tags: ['Java', 'Microservices', 'REST API'],
      liveUrl: '',
      repoUrl: 'https://github.com/Mirgisa',
    },
  ] as Project[],

  hobbies: [
    {
      emoji: '💻',
      title: 'Open Source',
      description: 'Exploring and contributing to open-source projects.',
    },
    {
      emoji: '📚',
      title: 'Learning',
      description: 'Reading about new technologies and software design.',
    },
    {
      emoji: '⚽',
      title: 'Football',
      description: 'Playing and watching football with friends.',
    },
    {
      emoji: '🎧',
      title: 'Music',
      description: 'Listening to music while coding and beyond.',
    },
  ] as Hobby[],
};
