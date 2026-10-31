import type { Metadata } from 'next';
import { MoreLink } from '@/components/MoreLink';
import { Row } from '@/components/Row';
import { Section } from '@/components/Section';
import { education } from '@/data/education';
import { jobs } from '@/data/jobs';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { yearsOnly } from '@/lib/dates';
import { baseOpenGraph } from '@/lib/metadata';
import styles from './page.module.css';

// Title and description come from the layout's defaults; home only adds its URL.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { ...baseOpenGraph, title: site.name, description: site.description, url: '/' },
};

const RECENT_JOBS = 3;

export default function Home() {
  return (
    <>
      {/* The sidebar shows the name visually; this gives the page its one h1. */}
      <h1 className={styles.visuallyHidden}>{site.name}</h1>

      <Section title="Experience" className={styles.firstSection}>
        {jobs.slice(0, RECENT_JOBS).map((job) => (
          <Row
            key={`${job.company}-${job.date}`}
            date={yearsOnly(job.date)}
            title={job.role}
            meta={job.company}
            description={job.summary}
            tags={job.tags}
          />
        ))}
        <MoreLink href="/experience">Full experience</MoreLink>
      </Section>

      <Section title="Education">
        {education.map((item) => (
          <Row
            key={item.school}
            date={yearsOnly(item.date)}
            title={item.degree}
            meta={item.school}
          />
        ))}
      </Section>

      <Section title="Projects">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <Row
              key={project.title}
              image={{ src: project.image, alt: '' }}
              title={project.title}
              description={project.description}
              href={project.url}
            />
          ))}
        <MoreLink href="/projects">All projects</MoreLink>
      </Section>
    </>
  );
}
