import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import { SkillTags } from './Tag';
import styles from './Row.module.css';

type RowProps = {
  title: string;
  /** Shown after the title in the accent color, e.g. the company. */
  meta?: string;
  description?: string;
  tags?: string[];
  /** Left column: a date, or a thumbnail. */
  date?: string;
  image?: { src: StaticImageData; alt: string };
  /** External link for the whole row; only linked rows get the hover highlight. */
  href?: string;
  /** Extra content between the description and the tags, e.g. bullet points. */
  children?: ReactNode;
};

// Compact list row from the Granite mock: date or thumbnail on the left, details on the right.
export function Row({ title, meta, description, tags, date, image, href, children }: RowProps) {
  const content = (
    <>
      {image ? (
        <Image src={image.src} alt={image.alt} className={styles.thumb} sizes="96px" />
      ) : (
        date && <p className={styles.date}>{date}</p>
      )}
      <div>
        <h3 className={styles.title}>
          {title}
          {meta && (
            <>
              {' · '}
              <span className={styles.meta}>{meta}</span>
            </>
          )}
        </h3>
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {tags && tags.length > 0 && <SkillTags names={tags} />}
      </div>
    </>
  );

  const className = `${styles.row} ${image ? styles.withImage : ''}`;

  return href ? (
    <a href={href} className={`${className} ${styles.link}`} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
