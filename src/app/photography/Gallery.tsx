'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import type { Photo } from '@/data/photos';
import styles from './page.module.css';

// Column widths: see .gallery in page.module.css.
const THUMB_SIZES =
  '(min-width: 1014px) 290px, (min-width: 860px) 500px, (min-width: 560px) 50vw, 100vw';

// Masonry grid; clicking a photo opens it full screen in a native <dialog>.
// Esc or a click on the photo closes it; arrow keys or the side buttons step through.
export function Gallery({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : photos[index];

  function open(i: number) {
    setIndex(i);
    dialogRef.current?.showModal();
  }

  // Move by one photo, wrapping at either end.
  function step(by: 1 | -1) {
    setIndex((i) => (i === null ? i : (i + by + photos.length) % photos.length));
  }

  // The open modal keeps focus inside the dialog, so its key events bubble up to it.
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  }

  return (
    <>
      <div className={styles.gallery}>
        {photos.map((photo, i) => (
          <button key={photo.src.src} type="button" className={styles.item} onClick={() => open(i)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              className={styles.photo}
              placeholder="blur"
              sizes={THUMB_SIZES}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
      >
        {/* Live region stays mounted so screen readers announce each new species. */}
        <p className={styles.caption} aria-live="polite">
          {current?.alt}
        </p>
        {current && (
          <>
            <button
              type="button"
              className={styles.close}
              aria-label="Close photo"
              onClick={() => dialogRef.current?.close()}
            >
              <Image
                key={current.src.src}
                src={current.src}
                alt={current.alt}
                className={styles.full}
                placeholder="blur"
                sizes="100vw"
              />
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              <ChevronLeftIcon width={24} height={24} />
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              <ChevronRightIcon width={24} height={24} />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
