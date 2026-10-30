export type Job = {
  company: string;
  role: string;
  date: string;
  location: string;
  /** One line for compact rows (home page). */
  summary: string;
  /** Skill names; colors come from skills.ts. */
  tags: string[];
  bullets: string[];
};

// Newest first.
export const jobs: Job[] = [
  {
    company: 'Square',
    role: 'Senior Software Engineer',
    date: 'Mar 2022 – Dec 2023',
    location: 'Remote',
    summary: 'Free-trial launch, AI-generated sample menus and linear onboarding for new sellers.',
    tags: ['React', 'TypeScript'],
    bullets: [
      'Implemented a first month free trial for new sellers leading to a 3.5x increase in SaaS conversions - a statistically significant increase that was projected to boost SaaS revenue by up to $3M annually',
      'Leveraged ChatGPT to power sample menu creation, tailoring menus to specific user inputs, simplifying the process and reducing intimidation for new sellers - this now accounts for the majority of menu creations across Square for Restaurants',
      'Aided in building a seamless linear onboarding experience for new sellers to onboard quickly and easily',
      'Performed technical screening interviews for potential candidates, assessing their qualifications and skills in order to deliver feedback on their suitability for roles within the organization',
      'Formulated comprehensive engineering designs to strategically plan and guide software projects, ensuring a structured and efficient development process from conception to implementation',
      'Collaborated with designers to implement user interface improvements, translating design concepts into functional software features',
    ],
  },
  {
    company: 'Wellsky',
    role: 'Software Engineer III',
    date: 'Mar 2019 – Feb 2022',
    location: 'Remote',
    summary: 'Frontend features for the financial module of the Specialty Care application.',
    tags: ['ExtJS', 'JavaScript'],
    bullets: [
      'Designed layouts and built frontend logic to implement new features and bug fixes for the financial module of Wellsky’s Specialty Care Application',
      'Collaborated with backend developers and product managers to strategize and implement solutions, enhancing overall client experience',
      'Pioneered the creation of a self-guided onboarding curriculum for new hires, covering crucial aspects such as setting up local development environments, mastering ExtJS, and leveraging GitHub for effective codebase contributions',
    ],
  },
  {
    company: 'HCS (acquired by Wellsky)',
    role: 'Frontend Web Developer',
    date: 'Oct 2017 – Mar 2019',
    location: 'Wall, NJ',
    summary: 'Web app options in ExtJS and a Patient Portal proof of concept on the MERN stack.',
    tags: ['ExtJS', 'React', 'JavaScript'],
    bullets: [
      'Created/maintained options for HCS’s modern web application using ExtJS',
      'Designed and coded an online Patient Portal proof of concept deployed on a MERN stack',
      'Leveraged the JIRA and Tempo APIs to create scripts that updated data to new standards',
    ],
  },
  {
    company: 'CSols Inc.',
    role: 'Junior LIMS Consultant',
    date: 'Sept 2015 – Sept 2017',
    location: 'Newark, DE',
    summary: 'Master data loading and SampleManager LIMS training material.',
    tags: ['SQL'],
    bullets: [
      'Master data loading using database staging tables and SQL Transformations.',
      'Created end-user development presentation to train new employees on SampleManager LIMS',
    ],
  },
];
