import { withBase as u } from '../lib/paths.js';
/** Шапка публичных (маркетинговых) страниц — единая точка правки. */
export function marketingSiteHeader() {
  return `
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <a href="${u('/welcome')}" class="site-logo">Tiver</a>
      </div>
    </header>
  `;
}
