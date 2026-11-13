'use client';
import { useEffect, useState } from 'react';

type C = { m: string; g: string; r: string; tag: string; t: number };
type Props = { label: string; inbox: string; live: string; replyLabel: string; brand: string; convos: C[] };

export default function ChatDemo({ label, inbox, live, replyLabel, brand, convos }: Props) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'guest' | 'typing' | 'reply'>('reply');
  const [time, setTime] = useState(convos[0].t.toFixed(1) + 's');

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    let dead = false;
    let iv: ReturnType<typeof setInterval> | undefined;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      let k = 0;
      while (!dead) {
        const n = k % convos.length;
        const c = convos[n];
        setI(n); setPhase('guest'); setTime('0.0s');
        await sleep(900); if (dead) return;
        setPhase('typing');
        const t0 = performance.now();
        iv = setInterval(() => setTime((((performance.now() - t0) / 1000) * (c.t / 1.6)).toFixed(1) + 's'), 80);
        await sleep(1600); clearInterval(iv); if (dead) return;
        setTime(c.t.toFixed(1) + 's'); setPhase('reply');
        await sleep(4900); k++;
      }
    })();
    return () => { dead = true; if (iv) clearInterval(iv); };
  }, [convos]);

  const c = convos[i];
  return (
    <div className="chat" aria-label={label}>
      <div className="ch"><strong>{inbox}</strong><span className="live">{live}</span></div>
      <div className="msgs" aria-live="polite" key={i}>
        <div className="m g"><small>{c.m}</small>{c.g}</div>
        {phase === 'typing' && <div className="m a dots"><i /><i /><i /></div>}
        {phase === 'reply' && <div className="m a"><small>{brand}</small>{c.r}</div>}
      </div>
      <div className="cf"><span>{replyLabel} <b>{time}</b></span><span className="tag">{phase === 'reply' ? c.tag : ''}</span></div>
    </div>
  );
}
