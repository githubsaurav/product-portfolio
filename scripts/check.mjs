import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function files(dir){let out=[];for(const entry of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);out.push(...(entry.isDirectory()?await files(p):[p]));}return out;}
const errors=[];
const pages=(await files(root)).filter(p=>p.endsWith('.html'));
for(const page of pages){
  const text=await readFile(page,'utf8');
  if(!/<title>[^<]+<\/title>/.test(text))errors.push(`${page}: missing title`);
  if((text.match(/<h1[\s>]/g)||[]).length!==1)errors.push(`${page}: expected one h1`);
  if(/<!-- PROJECTS -->/.test(text))errors.push(`${page}: unbuilt project gallery`);
  for(const [,url] of text.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)){
    const file=path.join(root,url==='/'?'index.html':url);
    try{await access(file);}catch{errors.push(`${page}: missing ${url}`);}
  }
  for(const tag of text.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g))if(!tag[0].includes('noopener'))errors.push(`${page}: unsafe external target`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Verified ${pages.length} pages: local links/assets, headings, metadata, and external target safety.`);
