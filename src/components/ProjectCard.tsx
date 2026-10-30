import Image from 'next/image';
import type { Project } from '@/data/projects';
import { CodeIcon, ExternalLinkIcon } from './icons';
import { PillLink } from './PillLink';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, url, sourceUrl } = project;

  return (
    <article className={styles.card}>
      <Image
        src={image}
        alt=""
        className={styles.thumb}
        // Approximate: ~290px cards at full width; low-res thumbnails, so close is fine.
        sizes="(min-width: 860px) 290px, (min-width: 560px) 50vw, 100vw"
      />
      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          <PillLink href={url} aria-label={`Demo of ${title}`}>
            <ExternalLinkIcon width={16} height={16} />
            Demo
          </PillLink>
          <PillLink href={sourceUrl} aria-label={`Source for ${title}`}>
            <CodeIcon width={16} height={16} />
            Source
          </PillLink>
        </div>
      </div>
    </article>
  );
}
