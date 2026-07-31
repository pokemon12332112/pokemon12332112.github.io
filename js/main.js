(() => {
  'use strict';

  const data = window.SITE_DATA;
  if (!data) {
    console.error('SITE_DATA is missing.');
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function externalAttrs(url) {
    return url && /^https?:\/\//.test(url)
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
  }

  function button(label, url, primary = false) {
    if (!url) return '';
    return `<a class="button${primary ? ' button-primary' : ''}" href="${url}"${externalAttrs(url)}>${label}<span aria-hidden="true">↗</span></a>`;
  }

  function highlightName(authors) {
    if (!authors || !data.name || data.name === 'YOUR NAME') return authors || '';
    const exact = new RegExp(escapeRegExp(data.name), 'g');
    return authors.replace(exact, `<span class="me">${data.name}</span>`);
  }

  function publicationLink(link) {
    if (link.url) {
      return `<a href="${link.url}"${externalAttrs(link.url)}>${link.label} ↗</a>`;
    }
    if (link.pending) {
      return `<span class="pub-link-disabled" title="Link will be added after publication">${link.label} · coming soon</span>`;
    }
    return '';
  }

  function render() {
    document.title = data.name;
    $('#nav-name').textContent = data.name;
    $('#footer-name').textContent = data.name;
    $('#hero-eyebrow').textContent = data.hero.eyebrow;
    $('#hero-intro').textContent = data.hero.intro;
    $('#portrait-caption').textContent = data.hero.status;
    $('#contact-text').textContent = data.contact.text;
    $('#current-year').textContent = new Date().getFullYear();

    const description = `${data.name} — graduate researcher in computer vision, multimodal learning, medical AI, and trustworthy artificial intelligence.`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', data.name);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    if (data.siteUrl) {
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', data.siteUrl);
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', data.siteUrl);
    }

    const portrait = $('#portrait');
    portrait.src = data.photo || data.photoFallback;
    portrait.alt = `Portrait of ${data.name}`;
    portrait.addEventListener('error', () => {
      if (!portrait.src.endsWith(data.photoFallback)) portrait.src = data.photoFallback;
    }, { once: true });

    const heroButtons = [
      button('View publications', '#publications', true),
      button('GitHub', data.links.github),
      button('Google Scholar', data.links.scholar),
      button('CV', data.links.cv)
    ].join('');
    $('#hero-actions').innerHTML = heroButtons;

    const cvNav = $('#cv-nav');
    if (data.links.cv) {
      cvNav.href = data.links.cv;
      cvNav.hidden = false;
    }

    $('#about-copy').innerHTML = data.about.map((paragraph) => `<p>${paragraph}</p>`).join('');

    $('#news-list').innerHTML = data.news.map((item) => `
      <li>
        <time>${item.date}</time>
        <p>${item.text}</p>
      </li>
    `).join('');

    $('#publication-list').innerHTML = data.publications.map((pub) => `
      <article class="publication reveal">
        <div class="publication-visual">
          <img src="${pub.image}" alt="Abstract illustration for ${pub.title}" loading="lazy" width="800" height="500">
        </div>
        <div>
          <div class="pub-meta">
            <span class="venue-badge">${pub.badge}</span>
            <span class="pub-year">${pub.year}</span>
          </div>
          <h3>${pub.title}</h3>
          <p class="pub-authors">${highlightName(pub.authors)}</p>
          <p class="pub-venue">${pub.venue}</p>
          <div class="pub-links">
            ${pub.links.map(publicationLink).join('')}
          </div>
        </div>
      </article>
    `).join('');

    $('#research-grid').innerHTML = data.research.map((item, index) => `
      <article class="research-card reveal">
        <p class="research-number">0${index + 1}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `).join('');

    $('#experience-list').innerHTML = data.experience.map((item) => `
      <article class="experience-item reveal">
        <div class="item-period">${item.period}</div>
        <div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-subtitle">${item.subtitle}</p>
          <p class="item-description">${item.description}</p>
        </div>
        <div class="item-place">${item.place}</div>
      </article>
    `).join('');

    const awardsSection = $('#awards');
    if (!data.awards || data.awards.length === 0) {
      awardsSection.hidden = true;
      const awardsNav = document.querySelector('a[href="#awards"]');
      if (awardsNav) awardsNav.hidden = true;
    } else {
      awardsSection.hidden = false;
      const awardsNav = document.querySelector('a[href="#awards"]');
      if (awardsNav) awardsNav.hidden = false;
    }

    $('#award-list').innerHTML = (data.awards || []).map((item) => `
      <article class="award-item reveal">
        <div class="item-period">${item.year}</div>
        <div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-subtitle">${item.organization}</p>
          <p class="item-description">${item.description}</p>
        </div>
        <div class="award-icon" aria-hidden="true">${item.icon}</div>
      </article>
    `).join('');

    const contactButtons = [
      button('Email me', data.links.email ? `mailto:${data.links.email}` : ''),
      button('GitHub', data.links.github),
      button('LinkedIn', data.links.linkedin),
      button('Google Scholar', data.links.scholar)
    ].join('');
    $('#contact-links').innerHTML = contactButtons;
  }

  function initMenu() {
    const buttonEl = $('#menu-button');
    const nav = $('#site-nav');
    buttonEl.addEventListener('click', () => {
      const open = buttonEl.getAttribute('aria-expanded') === 'true';
      buttonEl.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      buttonEl.setAttribute('aria-expanded', 'false');
    }));
  }

  function initTheme() {
    $('#theme-button').addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  function initScrollEffects() {
    const header = $('.site-header');
    const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });

    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -35px' });
    items.forEach((item) => observer.observe(item));
  }

  render();
  initMenu();
  initTheme();
  initScrollEffects();
})();
