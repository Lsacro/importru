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
    filePath = path.join(path.resolve(), reqPath);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, '127.0.0.1', () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const tmpOut = 'C:\\Users\\diabl\\hero-repro.png';

  try {
    execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--virtual-time-budget=2500',
      `--screenshot=${tmpOut}`,
      '--window-size=1376,768',
      `http://127.0.0.1:${port}/`
    ], { timeout: 15000 });

    if (fs.existsSync(tmpOut)) {
      const dest = path.resolve('.impeccable/review/hero-repro.png');
      fs.copyFileSync(tmpOut, dest);
      fs.unlinkSync(tmpOut);
      console.log('Successfully captured to .impeccable/review/hero-repro.png');
    }
  } catch (err) {
    console.error('Edge screenshot error:', err.message);
  } finally {
    server.close();
  }
});

