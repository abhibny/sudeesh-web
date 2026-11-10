import { copyFile, cp, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
await mkdir(dist, { recursive: true });
await Promise.all([
  copyFile(new URL('index.html', root), new URL('index.html', dist)),
  copyFile(new URL('styles.css', root), new URL('styles.css', dist)),
  cp(new URL('assets/', root), new URL('assets/', dist), { recursive: true }),
]);
console.log('Built static page in dist/');
