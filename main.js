'use strict';

import http from 'http';
import fs from 'fs';
import path from 'path';
import { setData , getData } from './src/scripts/database.js';

const PORT = 3000;
const STATIC_PATH = path.join(process.cwd(), './src');

const MIME_TYPES = {
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  mjs: 'text/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  ico: 'image/ico'
};

const routing = {
  '/': 'index.html',
  '/banks': '/pages/banks.html',
  '/calculator': '/pages/calculator.html',
  '/banks/table': () => getData(),
};

const types = {
  object: JSON.stringify,
  string: s => s,
  number: n => n + '',
  undefined: () => 'not found',
  function : async (fn) => {
      await fn();
  },
};

const router = async client => {
  const route = routing[client.req.url];
  const result = await route();
  // const type = typeof route;
  // const renderer = types[type];
  // console.table(result);
  return result;
};

const serveFile = name => {
  const filePath = path.join(STATIC_PATH, name)
  if (!filePath.startsWith(STATIC_PATH)) {
    console.log('Can`t be served:', name);
    return 0;
  }
  const stream = fs.createReadStream(filePath);
  console.log('Served:', name);
  return stream;
}

const server = http.createServer((req, res) => {
  const { url } = req;
  const name = !routing[url] ? url : routing[url];
  if (typeof name === 'function') {
        const result = router({ req, res });
        result.then(data => res.end(JSON.stringify(data)));
  }
  if (typeof name === 'string') {
    const fileExt = path.extname(name).substring(1);
    const mimeType = MIME_TYPES[fileExt] || MIME_TYPES.html;
    res.writeHead(200, { 'Content-Type':  mimeType });
    const stream = serveFile(name);
    if (stream) {
      stream.pipe(res);
    }
  } 
});
server.on('close', () => console.log('Server closed'));
server.on('error', err => { throw err });
server.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});