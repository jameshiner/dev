export type SkillType = 'language' | 'framework' | 'technology' | 'OS';

export type Skill = { type: SkillType; name: string };

export const skills: Skill[] = [
  { type: 'language', name: 'JavaScript' },
  { type: 'language', name: 'TypeScript' },
  { type: 'language', name: 'Java' },
  { type: 'language', name: 'SQL' },
  { type: 'language', name: 'Python' },
  { type: 'language', name: 'Go' },
  { type: 'framework', name: 'React' },
  { type: 'framework', name: 'Ember.js' },
  { type: 'framework', name: 'ExtJS' },
  { type: 'framework', name: 'Node' },
  { type: 'framework', name: 'Express' },
  { type: 'framework', name: 'MongoDB' },
  { type: 'technology', name: 'PostgreSQL' },
  { type: 'technology', name: 'IntelliJ' },
  { type: 'technology', name: 'Eclipse' },
  { type: 'technology', name: 'VSCode' },
  { type: 'technology', name: 'Bash' },
  { type: 'technology', name: 'Git/GitHub' },
  { type: 'technology', name: 'Jira' },
  { type: 'OS', name: 'Windows' },
  { type: 'OS', name: 'MacOS' },
  { type: 'OS', name: 'Linux' },
  { type: 'OS', name: 'Unix' },
];

export function skillType(name: string): SkillType | undefined {
  return skills.find((s) => s.name === name)?.type;
}
