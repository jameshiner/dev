import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description:
    'Small browser projects: pathfinding, genetic algorithms, a maze generator and an Enigma emulator.',
  path: '/projects',
});

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
