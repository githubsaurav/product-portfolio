const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  cards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
    if (!card.hidden) count++;
  });
  document.querySelector('#work-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'} to explore`;
}));
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (mobileNav && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
const clipboardButton = document.querySelector('[data-copy-email]');
clipboardButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(clipboardButton.dataset.copyEmail);
    clipboardButton.textContent = 'Email copied ✓';
    status.textContent = 'Email address copied to clipboard.';
  } catch {
    status.textContent = 'Copy unavailable. Select the email address above to copy it, or open it to send an email.';
    clipboardButton.textContent = 'Select the address above to copy';
  }
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
