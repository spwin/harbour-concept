// The app's bottom navigation, the same on every main screen: <nav class="tabbar" data-current="home"></nav>
const TABS = [
  ['home', 'home.html', 'Home', '<path d="M4 10 11 4l7 6v8H4z" fill="FILL" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'],
  ['offers', 'offers.html', 'Offers', '<path d="M4 11.5 11.5 4H18v6.5L10.5 18z" fill="FILL" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="14.5" cy="7.5" r="1.4" fill="DOT"/>'],
  ['requests', 'request.html', 'Requests', '<path d="M5 6h12v9H9l-4 3z" fill="FILL" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'],
  ['money', 'money.html', 'Money', '<rect x="3.5" y="6" width="15" height="10" rx="2" fill="FILL" stroke="currentColor" stroke-width="1.8"/><circle cx="11" cy="11" r="2" fill="DOT"/>'],
  ['data', 'data.html', 'Your data', '<ellipse cx="11" cy="6" rx="6" ry="2.5" fill="FILL" stroke="currentColor" stroke-width="1.8"/><path d="M5 6v10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6" fill="FILL" stroke="currentColor" stroke-width="1.8"/>'],
];
for (const nav of document.querySelectorAll('nav.tabbar')) {
  nav.setAttribute('aria-label', 'Main');
  nav.innerHTML = TABS.map(([id, href, label, svg]) => {
    const on = nav.dataset.current === id;
    const icon = svg.replaceAll('FILL', on ? 'currentColor' : 'none').replaceAll('DOT', on ? '#fff' : 'currentColor');
    return `<a href="${href}"${on ? ' aria-current="page"' : ''}><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">${icon}</svg>${label}</a>`;
  }).join('');
}
