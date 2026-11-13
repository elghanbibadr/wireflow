'use client';
import { useEffect, useRef } from 'react';

export default function Windows() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const w = Array.from(el.children);
    const iv = setInterval(() => w[Math.floor(Math.random() * w.length)].classList.toggle('on'), 420);
    return () => clearInterval(iv);
  }, []);
  return <div className="windows" ref={ref} aria-hidden="true">{Array.from({ length: 112 }, (_, i) => <b key={i} className={i % 7 === 3 ? 'on' : ''} />)}</div>;
}
