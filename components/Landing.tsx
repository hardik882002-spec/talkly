'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { io, Socket } from 'socket.io-client';

let socket: Socket | undefined;

const flirts = [
  'Your next “hey” could become a very good story.',
  'Somewhere out there, someone is hoping you say hi.',
  'No profile. No pressure. Just a little chemistry.',
  'Go on. Make a stranger smile.',
];

export default function Landing() {
  const [mode, setMode] = useState<'text' | 'voice' | 'video'>('text');
  const [online, setOnline] = useState(0);
  const [flirt, setFlirt] = useState(0);
  const router = useRouter();

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || window.location.origin, { transports: ['websocket'] });
    socket.on('presence', setOnline);
    const timer = window.setInterval(() => setFlirt((v) => (v + 1) % flirts.length), 4200);
    return () => { socket?.disconnect(); socket = undefined; window.clearInterval(timer); };
  }, []);

  const start = () => router.push('/' + mode);

  return (
    <main className="landing-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="landing-container">
        <nav className="nav">
          <Link href="/" className="brand"><span className="brand-mark">t</span><span>talkly</span></Link>
          <div className="navlinks">
            <button onClick={() => setMode('text')}>Text</button>
            <button onClick={() => setMode('voice')}>Voice</button>
            <button onClick={() => setMode('video')}>Video</button>
          </div>
          <div className="online-pill"><span className="pulse-dot" /> {online || 0} online</div>
        </nav>

        <section className="hero">
          <div className="hero-badge"><span>♥</span> No profiles. No pressure. Just chemistry.</div>
          <h1>Meet a stranger.<br /><em>Maybe spark something.</em></h1>
          <p className="hero-copy">A playful place to meet someone completely random. Come for a hello, stay for the butterflies. No signup. No profile. Just talk.</p>
          <div className="flirty-line">“{flirts[flirt]}”</div>

          <div className="chat-card">
            <div className="card-topline"><span className="live-dot" /> LIVE <span className="topline-sep">•</span> {online || 0} people are looking for someone interesting</div>
            <div className="mode-tabs">
              {(['text', 'voice', 'video'] as const).map((x) => (
                <button key={x} className={mode === x ? 'mode-tab active' : 'mode-tab'} onClick={() => setMode(x)}>
                  <span className="mode-icon">{x === 'text' ? 'Aa' : x === 'voice' ? '◖)' : '◉'}</span>
                  <span>{x === 'text' ? 'Flirty text' : x === 'voice' ? 'Voice' : 'Video'}</span>
                </button>
              ))}
            </div>
            <button className="primary-cta" onClick={start}>Find someone for me <span>♥</span></button>
            <div className="micro-trust"><span>✓ No account</span><span>✓ No awkward profile</span><span>✓ 18+ only</span></div>
          </div>
        </section>

        <div className="feature-strip">
          <div><span className="feature-icon">♥</span><div><strong>Instant chemistry</strong><small>Someone new in seconds</small></div></div>
          <div><span className="feature-icon">✦</span><div><strong>Stay mysterious</strong><small>No names or profiles</small></div></div>
          <div><span className="feature-icon">∞</span><div><strong>Never know who’s next</strong><small>A fresh conversation every time</small></div></div>
        </div>

        <section className="editorial-section">
          <div className="section-kicker">THE TALKLY RULE</div>
          <h2>Less swiping.<br />More <em>surprising hellos.</em></h2>
          <div className="steps">
            <article><span>01</span><h3>Pick your vibe</h3><p>Text when you want mystery, voice when you want a little spark, or video when you’re feeling bold.</p></article>
            <article><span>02</span><h3>Meet someone random</h3><p>We pair you with one available stranger. No bios to judge. No photos to overthink.</p></article>
            <article><span>03</span><h3>See if you click</h3><p>Say “hey stranger.” Laugh. Flirt. Talk about absolutely nothing. Or move on and meet someone new.</p></article>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">♥</div>
          <p>“You came here to talk to a stranger. You might as well make them blush.”</p>
          <span>— the Talkly mood</span>
        </section>

        <section className="faq-section">
          <div className="section-kicker">BEFORE YOU SAY “HEY”</div>
          <h2>A few little things.</h2>
          <div className="faqwrap">
            <details className="faq"><summary>Do I need an account? <span>+</span></summary><p>Nope. Keep the mystery. Talkly works without registration, email, password, or public profile.</p></details>
            <details className="faq"><summary>Is Talkly free? <span>+</span></summary><p>Yes. Come flirt with fate without paying for a subscription.</p></details>
            <details className="faq"><summary>Can I leave if the vibe is wrong? <span>+</span></summary><p>Absolutely. Chemistry is optional. Use Next Stranger whenever you want a fresh conversation.</p></details>
            <details className="faq"><summary>Is Talkly 18+? <span>+</span></summary><p>Yes. Talkly is for adults. Keep conversations respectful, consensual, and within the rules.</p></details>
          </div>
        </section>

        <div className="ad-slot">ADVERTISEMENT · YOUR NEXT CONVERSATION DESERVES THE SPACE</div>
        <footer className="footer">
          <div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark">t</span><span>talkly</span></Link><p>Talk to someone new. Maybe someone special.</p></div>
          <div className="footerlinks"><Link href="/safety">Safety</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
          <div className="footer-age">18+ <span>•</span> © 2026 Talkly</div>
        </footer>
      </div>
    </main>
  );
}
