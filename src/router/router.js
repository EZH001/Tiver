import { routes } from './routes.js';
import { getSession } from '../session/sessionStore.js';
import { renderGuestShell } from '../pages/guest/guestShell.js';
import { stripBase, withBase } from '../lib/paths.js';

let outlet = null;

function findOutlet() {
  if (!outlet) outlet = document.getElementById('router-outlet');
  return outlet;
}

function normalizePath(pathname) {
  const path = stripBase(pathname);
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

function replacePath(logical) {
  window.history.replaceState(null, '', withBase(logical));
}

function matchRoute(pathname) {
  const path = normalizePath(pathname);

  if (path === '/') {
    replacePath('/welcome');
    return routes['/welcome'];
  }

  if (path === '/guest') {
    replacePath('/guest/feed');
    return routes['/guest/feed'];
  }

  if (path === '/app') {
    replacePath('/app/feed');
    return routes['/app/feed'];
  }

  const guestComm = /^\/guest\/community\/([^/]+)$/.exec(path);
  if (guestComm) {
    const communitySlug = decodeURIComponent(guestComm[1]);
    return { view: (ctx) => renderGuestShell({ ...ctx, segment: 'community', communitySlug }) };
  }

  const guestFriend = /^\/guest\/friend\/([^/]+)$/.exec(path);
  if (guestFriend) {
    const friendSlug = decodeURIComponent(guestFriend[1]);
    return { view: (ctx) => renderGuestShell({ ...ctx, segment: 'friend', friendSlug }) };
  }

  const guestGame = /^\/guest\/game\/([^/]+)$/.exec(path);
  if (guestGame) {
    const gameId = decodeURIComponent(guestGame[1]);
    return { view: (ctx) => renderGuestShell({ ...ctx, segment: 'game', gameId }) };
  }

  if (routes[path]) return routes[path];
  return routes['/404'];
}

export function navigate(to, { replace = false } = {}) {
  const raw = String(to || '/');
  const hashIdx = raw.indexOf('#');
  const queryIdx = raw.indexOf('?');
  let cut = raw.length;
  if (hashIdx >= 0) cut = Math.min(cut, hashIdx);
  if (queryIdx >= 0) cut = Math.min(cut, queryIdx);
  const pathPart = raw.slice(0, cut);
  const suffix = raw.slice(cut);
  let logical = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  logical = stripBase(logical);
  const next = `${withBase(logical)}${suffix}`;
  if (replace) window.history.replaceState(null, '', next);
  else window.history.pushState(null, '', next);
  render();
}

export function initRouter() {
  window.addEventListener('popstate', () => render());
  render();
}

export function render() {
  const el = findOutlet();
  if (!el) return;

  const path = normalizePath(window.location.pathname);

  if (path.startsWith('/app')) {
    const s = getSession();
    if (s.mode !== 'user' || !s.token) {
      replacePath('/login');
      el.replaceChildren();
      const route = routes['/login'];
      const node = route.view({ path: '/login' });
      if (node instanceof Node) el.appendChild(node);
      return;
    }
  }

  const route = matchRoute(path);

  el.replaceChildren();
  const node = route.view({ path });
  if (node instanceof Node) el.appendChild(node);
  else if (typeof node === 'string') {
    const wrap = document.createElement('div');
    wrap.innerHTML = node;
    el.append(...wrap.childNodes);
  }
}
