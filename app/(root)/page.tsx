'use client';
import { useEffect } from 'react';

// "/" sends each visitor to /fr/ or /en/ based on their browser language.
export default function Home() {
  useEffect(() => {
    const l = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    location.replace(l.startsWith('fr') ? '/fr/' : '/en/');
  }, []);
  return (
    <p>
      <a href="/en/">English</a> | <a href="/fr/">Français</a>
    </p>
  );
}
