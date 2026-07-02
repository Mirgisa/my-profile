
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
  location: 'Europe, Italy',
  email: 'mirgisakitata@gmail.com',
  photo: 'me.JPG',
  cvUrl: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/Mirgisa', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mirgisa-ketata-00b4b7308?', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:mirgisakitata@gmail.com', icon: 'mail' },
    { label: 'Twitter', url: 'https://x.com/mirgisa430?s=11', icon: 'twitter' },
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
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'SQL','PostgreSQL', 'NoSQL', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Tools & Practices',
      skills: ['Git & GitHub', 'CI/CD', 'Jenkins', 'Testing', 'Agile'],
    },
    {
      title: 'AI tools',
      skills: ['ChatGPT', 'GitHub Copilot','Claude'],
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
