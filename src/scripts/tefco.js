/* ═══════════════════════════════════════════════════════════
   TEFCO — Shared behaviors
   Pair with tefco.css. Include at the end of <body>:
     <script src="tefco.js"></script>
   Provides: header scroll state, mobile menu, injected quote
   modal + mobile call bar, [data-open-quote] buttons,
   reveal-on-scroll, [data-parallax] images, ESC handling.
═══════════════════════════════════════════════════════════ */
(function () {
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ── inject mobile call bar ── */
  document.body.insertAdjacentHTML('beforeend', `
<div class="call-bar">
  <a class="call" href="tel:8016211010">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Call Now
  </a>
  <button class="quote" data-open-quote>Free Estimate</button>
</div>`);

  /* ── inject quote modal ── */
  document.body.insertAdjacentHTML('beforeend', `
<div class="overlay" id="quoteModal">
  <div class="backdrop" data-close-quote></div>
  <div class="panel">
    <div class="qm-head">
      <div>
        <h3>Get an Estimate</h3>
        <p>Fill out the form and one of our experienced staff members will take the time to understand your vision and provide a detailed free estimate.</p>
      </div>
      <button class="btn-x" data-close-quote title="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
    <div class="qm-body no-scrollbar">
      <form class="qm-form" id="quoteForm" novalidate>
        <div class="form-err" id="formErr">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <span id="formErrMsg"></span>
        </div>
        <div class="frow">
          <div class="fgroup">
            <label>Name <b>*</b></label>
            <input type="text" name="name" placeholder="e.g. John Smith" required>
          </div>
          <div class="fgroup">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="(801) 555-0000" style="font-family: var(--font-mono);">
          </div>
        </div>
        <div class="frow">
          <div class="fgroup">
            <label>Email Address <b>*</b></label>
            <input type="email" name="email" placeholder="john@example.com" required>
          </div>
          <div class="fgroup">
            <label>Project Address</label>
            <input type="text" name="address" placeholder="Street, City, UT">
          </div>
        </div>
        <div class="fgroup">
          <label>Tell Us About Your Project <b>*</b></label>
          <textarea name="description" rows="4" placeholder="Tell us about your railing, gate, security door, powder coating, or custom fabrication project..." required></textarea>
        </div>
        <div class="qm-submit-row">
          <button type="submit" class="btn btn-solid" id="btnSubmit">
            <span id="btnSubmitLabel">Submit</span>
          </button>
        </div>
      </form>
      <div class="qm-success" id="qmSuccess">
        <div class="big-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <div style="max-width:448px;">
          <h4>Request Received!</h4>
          <p class="sdesc">Thank you for choosing TEFCO. We've registered your project request and one of our experienced staff members will be in touch shortly to discuss your vision and provide a free estimate.</p>
        </div>
        <div class="refbox">ESTIMATE REQUEST REFERENCE:<b id="refNumber"></b></div>
        <div style="padding-top:16px;">
          <button class="btn btn-solid btn-sm" id="btnSuccessClose">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>`);

  /* ── header scroll state ── */
  const header = $('.site-header');
  function onHeaderScroll() {
    if (header && !header.classList.contains('solid')) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  }
  window.addEventListener('scroll', onHeaderScroll, { passive: true });
  onHeaderScroll();

  /* ── mobile menu ── */
  const mobileDrawer = $('#mobileDrawer');
  const burger = $('#burger');
  let mobileOpen = false;
  function closeMobile() {
    mobileOpen = false;
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    const o = $('#burgerOpen'), c = $('#burgerClose');
    if (o) o.style.display = '';
    if (c) c.style.display = 'none';
  }
  if (burger) {
    burger.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      mobileDrawer.classList.toggle('open', mobileOpen);
      $('#burgerOpen').style.display = mobileOpen ? 'none' : '';
      $('#burgerClose').style.display = mobileOpen ? '' : 'none';
    });
  }

  /* ── quote modal ── */
  const quoteModal = $('#quoteModal');
  function openQuote() {
    $('#quoteForm').style.display = '';
    $('#qmSuccess').classList.remove('show');
    quoteModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeQuote() {
    quoteModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  /* delegated so buttons anywhere (incl. injected) work */
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-quote]')) { closeMobile(); openQuote(); }
    if (e.target.closest('[data-close-quote]')) closeQuote();
  });

  $('#quoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const err = $('#formErr');
    if (!f.elements.name.value || !f.elements.email.value || !f.elements.description.value) {
      $('#formErrMsg').textContent = 'Please fill in the required fields (Name, Email, Project Description)';
      err.classList.add('show');
      return;
    }
    err.classList.remove('show');
    const btn = $('#btnSubmit');
    btn.disabled = true;
    $('#btnSubmitLabel').textContent = 'Submitting...';

    const showSuccess = () => {
      btn.disabled = false;
      $('#btnSubmitLabel').textContent = 'Submit';
      f.style.display = 'none';
      $('#refNumber').textContent = 'TF-' + Math.floor(100000 + Math.random() * 900000);
      $('#qmSuccess').classList.add('show');
    };

    // POST to Netlify Forms — the "estimate" form is registered via the hidden
    // static form in BaseLayout. Fall back to the success state on error so the
    // user is never stuck (e.g. on local dev where the endpoint isn't present).
    const data = new FormData(f);
    data.append('form-name', 'estimate');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(showSuccess)
      .catch(showSuccess);
  });
  $('#btnSuccessClose').addEventListener('click', () => {
    $('#quoteForm').reset();
    closeQuote();
  });

  /* ── reveal-on-scroll ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '-40px' });
  $$('.reveal').forEach((el) => io.observe(el));

  /* ── parallax for [data-parallax] images (inside .split-photo or any overflow:hidden box) ── */
  const clampVal = (v, a, b) => Math.min(b, Math.max(a, v));
  const pItems = $$('[data-parallax]');
  function tickParallax() {
    const vh = window.innerHeight;
    pItems.forEach((img) => {
      const box = img.parentElement;
      const r = box.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = clampVal((vh - r.top) / (vh + r.height), 0, 1);
      const strength = parseFloat(img.dataset.parallax) || 0.82;
      const drift = (p - 0.5) * r.height * strength;
      const zoom = 1.02 + p * 0.05;
      img.style.transform = `translateY(${drift}px) scale(${zoom})`;
    });
  }
  if (pItems.length) {
    window.addEventListener('scroll', tickParallax, { passive: true });
    window.addEventListener('resize', tickParallax);
    tickParallax();
  }

  /* ── before/after sliders ── */
  $$('.ba-slider').forEach((slider) => {
    const after = slider.querySelector('.ba-after');
    const handle = slider.querySelector('.ba-handle');
    if (!after || !handle) return;
    let dragging = false;
    const setPos = (clientX) => {
      const r = slider.getBoundingClientRect();
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.min(100, Math.max(0, pct));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = pct + '%';
    };
    const start = (e) => { dragging = true; setPos((e.touches ? e.touches[0] : e).clientX); };
    const move = (e) => { if (dragging) setPos((e.touches ? e.touches[0] : e).clientX); };
    const end = () => { dragging = false; };
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);
  });

  /* ── photo gallery: category filter + full-screen lightbox ── */
  const gMasonry = $('#galleryMasonry');
  if (gMasonry) {
    const items = $$('.g-item', gMasonry);
    const glb = $('#glb');
    const glbImg = $('#glbImg');
    const glbCap = $('#glbCap');
    const glbCount = $('#glbCount');
    const empty = $('#galleryEmpty');
    let visible = items.slice();
    let idx = 0;

    $$('.gallery-filter button').forEach((btn) => btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      $$('.gallery-filter button').forEach((b) => b.classList.toggle('active', b === btn));
      items.forEach((it) => it.classList.toggle('hide', cat !== 'all' && it.dataset.cat !== cat));
      visible = items.filter((it) => !it.classList.contains('hide'));
      if (empty) empty.style.display = visible.length ? 'none' : 'block';
    }));

    const render = () => {
      const it = visible[idx];
      const img = it.querySelector('img');
      glbImg.src = img.dataset.full || img.src;
      glbImg.alt = img.alt;
      glbCap.innerHTML = (it.dataset.title ? '<b>' + it.dataset.title + '</b> — ' : '') + (it.dataset.cat || '');
      glbCount.textContent = (idx + 1) + ' / ' + visible.length;
    };
    const openGlb = (i) => { idx = i; render(); glb.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeGlb = () => { glb.classList.remove('open'); document.body.style.overflow = ''; };
    const navGlb = (d) => { idx = (idx + d + visible.length) % visible.length; render(); };

    items.forEach((it) => it.addEventListener('click', () => openGlb(visible.indexOf(it))));
    $('#glbX').addEventListener('click', closeGlb);
    $('#glbPrev').addEventListener('click', (e) => { e.stopPropagation(); navGlb(-1); });
    $('#glbNext').addEventListener('click', (e) => { e.stopPropagation(); navGlb(1); });
    glb.addEventListener('click', (e) => { if (e.target === glb) closeGlb(); });
    document.addEventListener('keydown', (e) => {
      if (!glb.classList.contains('open')) return;
      if (e.key === 'Escape') closeGlb();
      else if (e.key === 'ArrowLeft') navGlb(-1);
      else if (e.key === 'ArrowRight') navGlb(1);
    });
  }

  /* ── ESC closes everything ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeQuote(); closeMobile(); }
  });
})();
