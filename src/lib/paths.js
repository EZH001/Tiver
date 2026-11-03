/** Vite BASE_URL, e.g. `/` or `/tiver/app/`. */
export function appBase() {
  return (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
}

/** App-relative path (`/welcome`) → URL path with base (`/tiver/app/welcome`). */
export function withBase(path = '/') {
  const raw = String(path || '/');
  const m = raw.match(/^([^?#]*)([?#].*)?$/);
  let logical = m[1] || '/';
  const suffix = m[2] || '';
  if (!logical.startsWith('/')) logical = `/${logical}`;
  if (logical.length > 1 && logical.endsWith('/')) logical = logical.slice(0, -1);
  const base = appBase();
  if (!base) return `${logical}${suffix}`;
  if (logical === '/') return `${base}/${suffix}`;
  return `${base}${logical}${suffix}`;
}

/** Browser pathname → app-relative path (strip deploy base). */
export function stripBase(pathname = '/') {
  const base = appBase();
  let path = pathname || '/';
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/';
  }
  if (!path.startsWith('/')) path = `/${path}`;
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path || '/';
}
