/* =========================================================================
   میکا — قالب حرفه‌ای رزومه و پورتفولیو
   اسکریپت‌های سایت (نسخه فارسی / راست‌به‌چپ)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const root   = document.documentElement;
  const loader = document.querySelector('.site-loader');

  /* -----------------------------------------------------------------------
     ۱. تغییر پوسته (روشن / تاریک) — ذخیره در localStorage
     ----------------------------------------------------------------------- */
  const themeToggle = document.querySelector('#themeToggle');
  const params = new URLSearchParams(window.location.search);
  const requestedTheme = params.get('theme');
  const savedTheme   = localStorage.getItem('mika-theme');
  root.dataset.theme = requestedTheme === 'dark' || requestedTheme === 'light'
    ? requestedTheme
    : (savedTheme || 'light');

  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mika-theme', root.dataset.theme);
  });

  /* -----------------------------------------------------------------------
     ۲. منوی موبایل (باز/بسته شدن)
     ----------------------------------------------------------------------- */
  const menuBtn  = document.querySelector('#menuBtn');
  const navLinks = document.querySelector('#navLinks');

  menuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  // با کلیک روی هر لینک ناوبری، منوی موبایل بسته شود
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks?.classList.remove('open'))
  );

  /* -----------------------------------------------------------------------
     ۳. پیش‌بارگذاری — مخفی‌کردن صفحه‌ی لودر کمی بعد از رویداد "load"
     ----------------------------------------------------------------------- */
  window.addEventListener('load', () => {
    setTimeout(() => loader?.classList.add('done'), 550);
  });

  /* -----------------------------------------------------------------------
     ۴. انیمیشن نمایان‌سازی هنگام اسکرول (IntersectionObserver)
     ----------------------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el, i) => {
    // تأخیر پلکانی برای نمایش گروهی هر ۷ آیتم
    el.style.transitionDelay = (i % 7) * 0.06 + 's';
    revealObserver.observe(el);
  });

  /* -----------------------------------------------------------------------
     ۵. مکان‌نمای سفارشی (نقطه + حلقه) — فقط برای دستگاه‌های دارای ماوس
     ----------------------------------------------------------------------- */
  const cursorDot  = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');

  window.addEventListener('pointermove', e => {
    if (cursorDot)  { cursorDot.style.left  = e.clientX + 'px'; cursorDot.style.top  = e.clientY + 'px'; }
    if (cursorRing) { cursorRing.style.left = e.clientX + 'px'; cursorRing.style.top = e.clientY + 'px'; }
  });

  const interactiveEls = document.querySelectorAll('a,button,.case,.cap');
  interactiveEls.forEach(el => el.addEventListener('mouseenter', () => {
    if (cursorRing) { cursorRing.style.width = '58px'; cursorRing.style.height = '58px'; }
  }));
  interactiveEls.forEach(el => el.addEventListener('mouseleave', () => {
    if (cursorRing) { cursorRing.style.width = '34px'; cursorRing.style.height = '34px'; }
  }));

});
