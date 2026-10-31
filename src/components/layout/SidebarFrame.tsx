'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

// The sidebar's <aside>, marked compact on every page but Home. On phones, compact slides the
// banner and bio away so page content starts near the top (see Sidebar.module.css).
export function SidebarFrame({ className, children }: { className: string; children: ReactNode }) {
  const compact = usePathname() !== '/';
  return (
    <aside className={className} data-compact={compact || undefined}>
      {children}
    </aside>
  );
}
