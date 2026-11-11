import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const distDir = path.resolve('dist');
const port = 4173;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);
  
  if (!fs.existsSync(filePath)) {
    // try fallback to public or project root for assets
    filePath = path.join(path.resolve(), reqPath);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outPath = path.resolve('.impeccable/review/hero-repro.png');

  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--window-size=1376,768',
      `--screenshot=${outPath}`,
      `http://127.0.0.1:${port}/`
    ], { timeout: 15000 });
    console.log(`Screenshot saved to ${outPath}`);
  } catch (err) {
    console.error('Chrome screenshot failed:', err);
  } finally {
    server.close();
  }
});

