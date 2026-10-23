// One console for organisations: the same top bar on every screen, modules on the left, the account on the right.
// <header class="topbar" data-module="offers" data-page="demand" data-org="Example Building Society"></header>
const ROOT = document.currentScript.src.replace(/assets\/orgbar\.js.*$/, '');
const MODULES = [
  ['home', 'Home', 'org/home.html', []],
  ['studies', 'Studies', 'console/studies.html', [['studies', 'Studies', 'console/studies.html'], ['new-study', 'New study', 'console/new-study.html'], ['results', 'Results', 'console/results.html']]],
  ['offers', 'Offers', 'firms/demand.html', [['demand', 'Demand', 'firms/demand.html'], ['pricing', 'Pricing rule', 'firms/pricing.html'], ['accepted', 'Accepted', 'firms/accepted.html']]],
  ['market', 'Marketplace', 'org/marketplace.html', []],
];
for (const bar of document.querySelectorAll('header.topbar[data-module]')) {
  const mod = MODULES.find(([id]) => id === bar.dataset.module) ?? MODULES[0];
  const org = bar.dataset.org ?? 'Example Building Society';
  const initials = org.split(' ').filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
  bar.innerHTML = `<div class="in">
    <a href="${ROOT}org/home.html" class="row" style="gap: 10px; color: #fff; text-decoration: none"><svg width="28" height="28" viewBox="0 0 30 30" aria-hidden="true"><rect width="30" height="30" rx="8" fill="#1E2C40"/><path d="M8 15.5 15 9l7 6.5V22a1 1 0 0 1-1 1h-4v-5h-4v5H9a1 1 0 0 1-1-1z" fill="#3FD3B4"/></svg><b style="font-size: 18px">Harbour</b></a>
    <nav aria-label="Modules">${MODULES.map(([id, label, href]) => `<a href="${ROOT}${href}"${id === mod[0] ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
    <div class="row" style="margin-left: auto; gap: 10px; font-size: 14px; color: #C4CEDA">${org} ▾<span style="width: 32px; height: 32px; border-radius: 50%; background: var(--mint); color: var(--ink); display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px">${initials}</span></div>
  </div>${mod[3].length ? `<div class="sub"><nav aria-label="${mod[1]}">${mod[3].map(([id, label, href]) => `<a href="${ROOT}${href}"${id === bar.dataset.page ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div>` : ''}`;
}
