import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  alternates: { languages: { en: '/en/', fr: '/fr/', 'x-default': '/en/' } },
};

export default function Root({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>{children}</body>
    </html>
  );
}
