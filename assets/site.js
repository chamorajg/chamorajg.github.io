// Progressive enhancements; content and links work without JavaScript.
const toc = document.querySelector('#article-toc');
if (toc) {
  const headings = document.querySelectorAll('.prose h2[id]');
  headings.forEach((heading) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.append(link);
    toc.querySelector('ol').append(item);
  });
  toc.hidden = headings.length === 0;
}

const themeButton = document.querySelector('.theme-toggle');
if (themeButton) {
  const modes = ['system', 'light', 'dark'];
  const root = document.documentElement;
  const icon = themeButton.querySelector('use');
  let nextMode;

  function showTheme(preference) {
    const mode = modes.includes(preference) ? preference : 'system';
    if (mode === 'system') delete root.dataset.theme;
    else root.dataset.theme = mode;
    nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
    icon.setAttribute('href', '#theme-' + mode);
    themeButton.setAttribute('aria-label', `Theme: ${mode}. Switch to ${nextMode}.`);
  }

  showTheme(root.dataset.theme);
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const chosen = nextMode;
    showTheme(chosen);
    try { localStorage.setItem('research-site-theme', chosen); } catch (_) {}
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'research-site-theme' || event.key === null) showTheme(event.newValue);
  });
}
