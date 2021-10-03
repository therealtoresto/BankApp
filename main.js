'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const STATIC_PATH = path.join(process.cwd(), './src');

const MIME_TYPES = {
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
}

const serveFile = name => {
  const filePath = path.join(STATIC_PATH, name);
  if (!filePath.startsWith(STATIC_PATH)) {
    console.log('Can`t be served:', name);
    return 0;
  }
  const stream = fs.createReadStream(filePath);
  console.log('Served:', name);
  return stream;
}

const server = http.createServer((req, res) => {
  console.log('Client connected');

  const { url } = req;
  const name = url === '/' ? 'index.html' : url;
  const fileExt = path.extname(name).substring(1);
  const mimeType = MIME_TYPES[fileExt] || MIME_TYPES.html;
  res.writeHead(200, { 'Content-Type':  mimeType});
  const stream = serveFile(name);
  if (stream) stream.pipe(res);
  
  // res.end(() => {
  //   console.log('client disconnected');
  // });

  });
  server.on('close', () => console.log('Server closed'));
  server.on('error', (err) => {
    throw err;
  });
  server.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
  });