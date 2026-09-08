import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://talkly3.onrender.com'),
  title: 'Talkly — Stranger Chat & Random Chat Online',
  description: 'Stranger chat made simple. Talk to strangers online with free anonymous random chat — no signup, no profile, no swiping. Text, voice and video chat for adults 18+.',
  keywords: ['stranger chat','random chat','talk to strangers','chat with strangers','chat with me','anonymous chat','random text chat','free random chat','online stranger chat','voice chat strangers','video chat strangers'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Talkly — Stranger Chat & Random Chat Online',
    description: 'Talk to strangers online. Free anonymous random chat with no signup or profile. 18+.',
    url: 'https://talkly3.onrender.com/',
    siteName: 'Talkly',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Talkly — Stranger Chat & Random Chat', description: 'Talk to strangers online with free anonymous random chat. 18+.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
