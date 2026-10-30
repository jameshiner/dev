import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Projects' };

export default function Projects() {
  return (
    <Section title="Projects" as="h1">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
