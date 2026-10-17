import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 4185);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.txt':'text/plain; charset=utf-8','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
  try {
    const url=new URL(req.url,'http://localhost');
    const relative=decodeURIComponent(url.pathname).replace(/^\/+/, '');
    let file=path.resolve(root,relative || 'index.html');
    if(!file.startsWith(root)){res.writeHead(403);res.end('Forbidden');return;}
    try { if((await stat(file)).isDirectory()) file=path.join(file,'index.html'); } catch { if(!path.extname(file)) file+='.html'; }
    const data=await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(data);
  } catch {
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
    res.end(await readFile(path.join(root,'404.html'),'utf8').catch(()=> 'Not found'));
  }
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio preview: http://127.0.0.1:${port}`));
