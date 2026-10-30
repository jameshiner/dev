// Site-wide facts, used by the layout metadata, sidebar, nav and footer.
export const site = {
  name: 'James Hiner',
  role: 'Frontend Software Engineer',
  location: 'Denver, CO',
  bio: 'Currently building interfaces that turn water data into tools people can act on.',
  description: 'James Hiner, frontend software engineer in Denver, CO.',
  links: {
    github: 'https://github.com/jameshiner',
    linkedin: 'https://www.linkedin.com/in/jameshiner/',
    source: 'https://github.com/jameshiner/dev',
  },
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/photography', label: 'Photography' },
] as const;
