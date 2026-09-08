import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://talkly3.onrender.com'),
  title: 'Talkly — Random Chat With Someone New | Text, Voice & Video',
  description: 'Talk to someone new on Talkly. Meet random strangers instantly with free anonymous text, voice and video chat. No signup, no profile, just a conversation. 18+.',
  keywords: ['random chat','talk to strangers','chat with strangers','anonymous chat','random text chat','stranger chat','free random chat','online stranger chat','voice chat strangers','video chat strangers'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Talkly — Meet a stranger. Maybe spark something.',
    description: 'No profiles. No pressure. Just chemistry. Meet someone random and start talking.',
    url: 'https://talkly3.onrender.com/',
    siteName: 'Talkly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talkly — Meet someone new',
    description: 'Random anonymous text, voice and video chat. No signup. 18+.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
