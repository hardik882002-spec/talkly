'use client';
import {useEffect,useState} from 'react';

type Stats={online:number;rooms:number;waiting:number;reports:number;uptime:string;timestamp:string};

export default function Admin(){
 const [stats,setStats]=useState<Stats|null>(null); const [error,setError]=useState('');
 useEffect(()=>{const load=async()=>{try{const r=await fetch('/api/admin'); if(!r.ok)throw new Error('Admin endpoint unavailable'); setStats(await r.json())}catch(e){setError(e instanceof Error?e.message:'Unable to load stats')}}; load(); const t=setInterval(load,5000); return()=>clearInterval(t)},[]);
 return <main style={{minHeight:'100vh',background:'#08090d',color:'#fff',padding:'40px 22px',fontFamily:'system-ui'}}><div style={{maxWidth:900,margin:'auto'}}><div style={{color:'#ff72ae',fontSize:12,letterSpacing:'.15em'}}>TALKLY CONTROL ROOM</div><h1 style={{fontSize:'clamp(36px,6vw,64px)',margin:'10px 0'}}>Live traffic.</h1><p style={{color:'#888',marginBottom:30}}>Auto-refreshes every 5 seconds. This is operational traffic, not Google Search traffic.</p>{error&&<div style={{padding:16,border:'1px solid #733',borderRadius:12,color:'#ff9b9b'}}>{error}</div>}<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:14}}>{[['Online now',stats?.online??'—'],['Active rooms',stats?.rooms??'—'],['Waiting',stats?.waiting??'—'],['Reports',stats?.reports??'—']].map(([a,b])=><div key={String(a)} style={{padding:22,border:'1px solid #ffffff12',borderRadius:18,background:'#111219'}}><div style={{color:'#888',fontSize:13}}>{a}</div><div style={{fontSize:42,fontWeight:700,marginTop:8}}>{b}</div></div>)}</div><div style={{marginTop:18,padding:20,border:'1px solid #ffffff12',borderRadius:18,background:'#111219',color:'#888'}}>Server uptime: <strong style={{color:'#fff'}}>{stats?.uptime??'—'}</strong><br/>Last update: <strong style={{color:'#fff'}}>{stats?.timestamp?new Date(stats.timestamp).toLocaleTimeString():'—'}</strong></div></div></main>
}
