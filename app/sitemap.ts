import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
 const base='https://talkly3.onrender.com';
 const pages=['','/stranger-chat','/random-chat','/chat-with-strangers','/text','/voice','/video','/safety','/privacy','/terms'];
 return pages.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===''?'daily':'monthly',priority:path===''?1:path==='/stranger-chat'||path==='/random-chat'||path==='/chat-with-strangers'?0.9:0.6}));
}
