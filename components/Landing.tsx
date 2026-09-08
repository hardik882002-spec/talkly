'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
let socket: Socket | undefined;
export default function Landing() {
  const [mode, setMode] = useState<'text' | 'voice' | 'video'>('text');
  const [online, setOnline] = useState(0);
  const router = useRouter();
  useEffect(() => { socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || window.location.origin, { transports: ['websocket'] }); socket.on('presence', setOnline); return () => { socket?.disconnect(); socket = undefined; }; }, []);
  const start = () => router.push('/' + mode);
  return <main className="landing-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <div className="landing-container">
      <nav className="nav"><Link href="/" className="brand"><span className="brand-mark">t</span><span>talkly</span></Link><div className="navlinks"><button onClick={() => setMode('text')}>Text</button><button onClick={() => setMode('voice')}>Voice</button><button onClick={() => setMode('video')}>Video</button></div><div className="online-pill"><span className="pulse-dot" /> {online || 0} online</div></nav>
      <section className="hero"><div className="hero-badge"><span>✦</span> Anonymous conversations, instantly</div><h1>Someone out there<br /><em>is waiting to talk.</em></h1><p className="hero-copy">Meet a completely random stranger and have a real conversation. No profiles. No awkward sign-up. Just talk.</p>
        <div className="chat-card"><div className="card-topline"><span className="live-dot" /> LIVE <span className="topline-sep">•</span> {online || 0} people are here right now</div><div className="mode-tabs">{(['text', 'voice', 'video'] as const).map(x => <button key={x} className={mode === x ? 'mode-tab active' : 'mode-tab'} onClick={() => setMode(x)}><span className="mode-icon">{x === 'text' ? 'Aa' : x === 'voice' ? '◖)' : '◉'}</span><span>{x === 'text' ? 'Text chat' : x === 'voice' ? 'Voice' : 'Video'}</span></button>)}</div><button className="primary-cta" onClick={start}>Start {mode} chat <span>↗</span></button><div className="micro-trust"><span>✓ No account</span><span>✓ No profile</span><span>✓ Free to use</span></div></div>
      </section>
      <div className="feature-strip"><div><span className="feature-icon">⚡</span><div><strong>Instant matching</strong><small>Meet someone in seconds</small></div></div><div><span className="feature-icon">◎</span><div><strong>Truly anonymous</strong><small>No names or profiles</small></div></div><div><span className="feature-icon">◌</span><div><strong>Worldwide</strong><small>A different person every time</small></div></div></div>
      <section className="editorial-section"><div className="section-kicker">HOW TALKLY WORKS</div><h2>Simple enough to<br />just <em>start talking.</em></h2><div className="steps"><article><span>01</span><h3>Choose your way</h3><p>Pick text, voice, or video. Start with whatever feels comfortable.</p></article><article><span>02</span><h3>Get matched</h3><p>Talkly finds one available stranger and connects you privately.</p></article><article><span>03</span><h3>See where it goes</h3><p>Say hello, have a conversation, or move on whenever you want.</p></article></div></section>
      <section className="quote-section"><div className="quote-mark">“</div><p>Sometimes the most interesting person you'll meet today is someone you've never heard of.</p><span>— the idea behind Talkly</span></section>
      <section className="faq-section"><div className="section-kicker">QUESTIONS</div><h2>Good to know.</h2><div className="faqwrap"><details className="faq"><summary>Do I need an account? <span>+</span></summary><p>No. Talkly works without registration, email, password, or profile.</p></details><details className="faq"><summary>Is Talkly free? <span>+</span></summary><p>Yes. The basic random chat experience is free to use.</p></details><details className="faq"><summary>Can I leave a conversation? <span>+</span></summary><p>Anytime. Use Next Stranger to instantly look for someone new, or End Chat to leave.</p></details><details className="faq"><summary>How do I stay safe? <span>+</span></summary><p>Never share sensitive personal information. You can report inappropriate behaviour at any time.</p></details></div></section>
      <div className="ad-slot">ADVERTISEMENT</div><footer className="footer"><div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark">t</span><span>talkly</span></Link><p>Talk to someone new.</p></div><div className="footerlinks"><Link href="/safety">Safety</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><div className="footer-age">18+ <span>•</span> © 2026 Talkly</div></footer>
    </div></main>;
}
