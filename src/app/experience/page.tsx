import type { Metadata } from 'next';
import { Row } from '@/components/ui/Row';
import { Section } from '@/components/ui/Section';
import { SkillTags } from '@/components/ui/Tag';
import { education } from '@/data/education';
import { jobs } from '@/data/jobs';
import { type SkillType, skills } from '@/data/skills';
import { stackedRange } from '@/lib/dates';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Experience',
  description:
    'Work history, skills and education: frontend engineering at Metron, Square and Wellsky.',
  path: '/experience',
});

// A Record, so adding a SkillType without a label fails the typecheck.
const SKILL_LABELS: Record<SkillType, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  technology: 'Tools',
  OS: 'Operating systems',
};
const SKILL_GROUPS = Object.entries(SKILL_LABELS) as [SkillType, string][];

export default function Experience() {
  return (
    <>
      <Section title="Experience" as="h1">
        {jobs.map((job) => (
          <Row
            key={`${job.company}-${job.date}`}
            date={stackedRange(job.date)}
            title={job.role}
            meta={job.company}
            description={job.location}
            tags={job.tags}
            headingLevel="h2"
          >
            {job.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </Row>
        ))}
      </Section>

      <Section title="Skills">
        <dl className={styles.skills}>
          {SKILL_GROUPS.map(([type, label]) => (
            <div key={type} className={styles.skillGroup}>
              <dt className={styles.skillLabel}>{label}</dt>
              <dd>
                <SkillTags names={skills.filter((s) => s.type === type).map((s) => s.name)} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        {education.map((item) => (
          <Row
            key={item.school}
            date={item.date}
            title={item.degree}
            meta={item.school}
            description={item.location}
          />
        ))}
      </Section>
    </>
  );
}
