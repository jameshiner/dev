import { type SkillType, skillType } from '@/data/skills';
import styles from './Tag.module.css';

export type TagTone = 'sky' | 'green' | 'amber' | 'neutral';

const TONE_BY_SKILL_TYPE: Record<SkillType, TagTone> = {
  language: 'sky',
  framework: 'green',
  technology: 'amber',
  OS: 'neutral',
};

export function Tag({ tone = 'neutral', children }: { tone?: TagTone; children: string }) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}

/** A row of skill tags, colored by skill type; unknown skills are neutral. */
export function SkillTags({ names }: { names: string[] }) {
  return (
    <ul className={styles.list}>
      {names.map((name) => {
        const type = skillType(name);
        return (
          <li key={name}>
            <Tag tone={type ? TONE_BY_SKILL_TYPE[type] : 'neutral'}>{name}</Tag>
          </li>
        );
      })}
    </ul>
  );
}
