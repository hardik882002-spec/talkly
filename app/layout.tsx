import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Talk to Strangers Online — Free Random Chat | Talkly',description:'Talk to random people online instantly. Anonymous text, voice and video chat with no signup.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
