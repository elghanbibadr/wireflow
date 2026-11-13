import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { content, LANGS, type Lang } from '@/lib/content';
import { SITE } from '@/lib/site';
import Windows from '@/components/Windows';
import ChatDemo from '@/components/ChatDemo';
import RevealInit from '@/components/RevealInit';

type P = { params: Promise<{ lang: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return LANGS.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang as Lang];
  if (!c) return {};
  const title = `${SITE.name}${lang === 'fr' ? ' : ' : ': '}${c.meta.title}`;
  return {
    title,
    description: c.meta.desc,
    alternates: { canonical: `/${lang}/`, languages: { en: '/en/', fr: '/fr/', 'x-default': '/en/' } },
    openGraph: { title, description: c.meta.desc, url: `/${lang}/`, siteName: SITE.name, locale: lang === 'fr' ? 'fr_FR' : 'en_US', type: 'website' },
  };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const L = lang as Lang;
  const c = content[L];
  const other = L === 'fr' ? 'en' : 'fr';
  const t = (s: string) => s.replace('{name}', SITE.name);
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(t(c.mail.subject))}&body=${encodeURIComponent(c.mail.body)}`;
  const ld = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: SITE.name, url: `${SITE.url}/${L}/`, description: c.meta.desc, email: SITE.email, inLanguage: L };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <RevealInit />
      <header>
        <div className="wrap nav">
          <a className="logo" href="#top"><i></i>{SITE.name}</a>
          <nav>
            <a href="#services">{c.nav.services}</a>
            <a href="#pricing">{c.nav.pricing}</a>
            <a href="#faq">{c.nav.faq}</a>
            <a className="btn ghost sm" href={`/${other}/`} hrefLang={other} lang={other}>{other.toUpperCase()}</a>
            <a className="btn sm" href="#contact">{c.nav.cta}</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero">
          <Windows />
          <div className="wrap hgrid">
            <div>
              <span className="pill"><s>{c.hero.pill}</s>{c.hero.pill2}</span>
              <h1>{c.hero.h1a}<span>{c.hero.h1b}</span></h1>
              <p className="lead">{t(c.hero.lead)}</p>
              <div className="cta">
                <a className="btn" href="#contact">{c.nav.cta}</a>
                <a className="btn ghost" href="#pricing">{c.hero.see}</a>
              </div>
            </div>
            <ChatDemo label={c.chat.label} inbox={c.chat.inbox} live={c.chat.live} replyLabel={c.chat.reply} brand={SITE.name} convos={c.chat.convos} />
          </div>
        </div>

        <div className="mq" aria-hidden="true"><div>{[...c.channels, ...c.channels].map((x, i) => <span key={i}>{x}</span>)}</div></div>

        <section><div className="wrap">
          <h2 className="rv">{c.problem.h2}</h2>
          <div className="cols">{c.problem.items.map(([h, p]) => (<div className="pain rv" key={h}><h3>{h}</h3><p>{p}</p></div>))}</div>
        </div></section>

        <section style={{ paddingTop: 0 }}><div className="wrap">
          <h2 className="rv">{c.how.h2}</h2>
          <div className="cols">{c.how.steps.map(([h, p], i) => (<div className="step rv" key={h}><em>{i + 1}</em><h3>{h}</h3><p>{p}</p></div>))}</div>
        </div></section>

        <section id="services" style={{ paddingTop: 0 }}><div className="wrap">
          <h2 className="rv">{c.services.h2}</h2>
          <p className="sub rv">{c.services.sub}</p>
          <div className="grid">{c.services.items.map(([e, h, p]) => (<div className="svc rv" key={h}><span>{e}</span><h3>{h}</h3><p>{p}</p></div>))}</div>
        </div></section>

        <section id="pricing" style={{ paddingTop: 0 }}><div className="wrap">
          <h2 className="rv">{c.pricing.h2}</h2>
          <p className="sub rv">{c.pricing.sub}</p>
          <div className="plans">
            {c.pricing.plans.map((p) => (
              <div key={p.name} className={`plan rv${p.hot ? ' hot' : ''}`}>
                {p.hot && <span className="badge">{c.pricing.hot}</span>}
                <h3>{p.name}</h3>
                <div className="price">${p.price}<small> {c.pricing.month}</small></div>
                <p className="setup">{c.pricing.setup.replace('{n}', String(p.setup))}</p>
                <ul>{p.feat.map((f) => <li key={f}>{f}</li>)}</ul>
                <a className={`btn${p.hot ? '' : ' ghost'}`} href="#contact">{c.nav.cta}</a>
              </div>
            ))}
          </div>
        </div></section>

        <section id="faq" style={{ paddingTop: 0 }}><div className="wrap mx-auto">
          {/* <h2 className="rv">{c.faq.h2}</h2> */}
          <h2 className="rv" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", maxWidth: "none" }}>{c.faq.h2}</h2>
          
          <div className="faq rv">{c.faq.items.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}</div>
        </div></section>

        <section id="contact" style={{ paddingTop: 0 }}><div className="wrap"><div className="final rv">
          <h2>{c.final.h2}</h2>
          <p className="sub">{c.final.sub}</p>
          <a className="btn" href={mail}>{c.nav.cta}</a>
        </div></div></section>
      </main>

      <footer><div className="wrap"><span>© 2026 {SITE.name}</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></footer>
    </>
  );
}
