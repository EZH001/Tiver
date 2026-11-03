import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const appDir = path.join(root, 'docs', 'app');
const BASE = '/tiver/app';

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function rewriteHtml(html) {
  let s = html;
  s = s.replace(/(href|src|action)=(["'])\/(?!\/)(?!tiver\/)/gi, `$1=$2${BASE}/`);
  s = s.replace(/url\((['"]?)\/(?!\/)(?!tiver\/)/gi, `url($1${BASE}/`);
  return s;
}

if (!fs.existsSync(appDir)) {
  console.error('docs/app missing — run vite build first');
  process.exit(1);
}

fs.copyFileSync(path.join(appDir, 'index.html'), path.join(appDir, '404.html'));
console.log('copied index.html → 404.html');

const files = walk(path.join(appDir, 'archive')).filter((f) => /\.(html|css)$/i.test(f));
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const next = rewriteHtml(raw);
  if (next !== raw) {
    fs.writeFileSync(file, next);
    console.log('rewrote', path.relative(root, file));
  }
}

console.log('pages postbuild ok →', BASE);
