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

const themeSelect = document.querySelector('#theme-select');
if (themeSelect) {
  try {
    const saved = localStorage.getItem('research-site-theme');
    themeSelect.value = saved === 'light' || saved === 'dark' ? saved : 'system';
  } catch (_) {}
  themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('research-site-theme', theme); } catch (_) {}
  });
}
