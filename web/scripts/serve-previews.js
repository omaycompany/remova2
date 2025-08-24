#!/usr/bin/env node

/**
 * Simple server to preview generated PDFs
 * Usage: node scripts/serve-previews.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const PREVIEW_DIR = path.join(__dirname, '../public/docs/previews');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(PREVIEW_DIR, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🌐 Preview server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${PREVIEW_DIR}`);
  console.log('✨ Open your browser to see the beautiful PDF previews!');
});
