import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { photos } from '@/data/photos';
import { pageMetadata } from '@/lib/metadata';
import { Gallery } from './Gallery';

export const metadata: Metadata = pageMetadata({
  title: 'Photography',
  description: 'Wildlife photography from around Denver, Colorado.',
  path: '/photography',
});

export default function Photography() {
  return (
    <Section title="Photography" as="h1">
      <Gallery photos={photos} />
    </Section>
  );
}
