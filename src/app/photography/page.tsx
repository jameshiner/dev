import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { photos } from '@/data/photos';
import { Gallery } from './Gallery';

export const metadata: Metadata = { title: 'Photography' };

export default function Photography() {
  return (
    <Section title="Photography" as="h1">
      <Gallery photos={photos} />
    </Section>
  );
}
