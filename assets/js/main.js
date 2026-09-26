/* Shared layout + page renderers. Content lives in data.js. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const page = document.body.dataset.page;
  let io; // IntersectionObserver for .reveal, created lazily in observe()
  const tk = (n) => "৳" + Number(n).toLocaleString("en-US");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const courseUrl = (c) => `${SITE.origin}/courses/${c.slug}/`;
  const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || "";

  /* ---------- Header ---------- */
  const navItems = [
    { href: "index.html", label: "Home", key: "home" },
    { label: "Courses", key: "courses", children: [
      { href: "courses.html", label: "All Courses" },
      ...CATEGORIES.slice(0, 4).map((c) => ({ href: `courses.html?cat=${c.id}`, label: c.name })),
    ] },
    { label: "HSC Batches", key: "batch", children: Object.keys(BATCHES).map((b) => ({ href: `batch.html?b=${b}`, label: `HSC ${b}` })) },
    { href: "mentors.html", label: "Mentors", key: "mentors" },
    { href: "shop.html", label: "Publications", key: "shop" },
    { href: "about.html", label: "About", key: "about" },
  ];

  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="${SITE.name} home">
        <img src="${SITE.logo}" alt="" width="36" height="36">
        <span>EDED <b>GROUP</b></span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${navItems.map((i) => i.children
          ? `<div class="dropdown"><button type="button" aria-haspopup="true" class="${page === i.key ? "active" : ""}">${i.label} ▾</button>
              <div class="dropdown-menu">${i.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("")}</div></div>`
          : `<a href="${i.href}" class="${page === i.key ? "active" : ""}">${i.label}</a>`).join("")}
      </nav>
      <a class="btn btn-primary btn-sm nav-cta" href="${SITE.dashboard}">My Account</a>
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
    </div>
    <nav class="mobile-nav" aria-label="Mobile">
      ${navItems.map((i) => i.children
        ? `<a href="${i.children[0].href}">${i.label}</a>${i.children.map((c) => `<a class="sub" href="${c.href}">${c.label}</a>`).join("")}`
        : `<a href="${i.href}">${i.label}</a>`).join("")}
      <a class="btn btn-primary" style="margin-top:10px" href="${SITE.dashboard}">My Account</a>
    </nav>`;
  document.body.prepend(header);
  const glow = document.createElement("div");
  glow.className = "glow";
  document.body.prepend(glow);

  const menuBtn = $(".menu-btn", header);
  menuBtn.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Footer ---------- */
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="about">
          <a class="brand" href="index.html"><img src="${SITE.logo}" alt="" width="36" height="36"><span>EDED <b>GROUP</b></span></a>
          <p class="bn" style="margin-top:14px">${SITE.tagline}</p>
          <p>Compact HSC and university admission preparation for Physics, Chemistry, Math and Biology.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li><a href="courses.html?cat=aca2ad">Academic to Admission</a></li>
            <li><a href="courses.html?cat=revision">HSC Compact Revision</a></li>
            <li><a href="courses.html?cat=admission">Compact Admission</a></li>
            <li><a href="mentors.html">Mentors</a></li>
            <li><a href="${SITE.affiliate}">Refer &amp; Earn</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="about.html">About EDED GROUP</a></li>
            <li><a href="legal.html?p=terms">Terms and conditions</a></li>
            <li><a href="legal.html?p=privacy">Privacy policy</a></li>
            <li><a href="legal.html?p=refund">Refund policy</a></li>
          </ul>
        </div>
        <div class="contact">
          <h4>Contact</h4>
          <ul>
            <li>${SITE.address}</li>
            <li><a href="https://wa.me/${SITE.whatsapp.replace("+", "")}">WhatsApp: ${SITE.whatsappLabel}</a></li>
            <li><a href="tel:${SITE.phone}">Phone: ${SITE.phone}</a></li>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>Trade license: ${SITE.tradeLicense}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
        <span>Payments via bKash &amp; SSLCommerz</span>
      </div>
    </div>`;
  document.body.append(footer);

  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = `https://wa.me/${SITE.whatsapp.replace("+", "")}`;
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4"/></svg>`;
  document.body.append(wa);

  /* ---------- Components ---------- */
  function courseCard(c) {
    const off = c.regular && c.price ? Math.round((1 - c.price / c.regular) * 100) : 0;
    const media = c.img
      ? `<img src="${c.img}" alt="" loading="lazy" onerror="this.parentNode.classList.add('placeholder');this.parentNode.textContent='EDED'">`
      : "EDED";
    const priceHtml = c.price === 0
      ? `<b>Free</b>`
      : c.price == null ? `<b style="font-size:16px">Enrolled only</b>`
      : `<b>${tk(c.price)}</b>${c.regular > c.price ? `<s>${tk(c.regular)}</s><span class="off">-${off}%</span>` : ""}`;
    return `
      <article class="card reveal">
        ${c.badge ? `<span class="badge">${c.badge}</span>` : ""}
        <a class="card-media ${c.img ? "" : "placeholder"}" href="${courseUrl(c)}" tabindex="-1" aria-hidden="true">${media}</a>
        <div class="card-body">
          <div class="card-meta">
            ${c.batch ? `<span>HSC ${c.batch}</span>` : ""}<span>${c.lessons} lessons</span>${c.students ? `<span>${c.students.toLocaleString()} students</span>` : ""}
          </div>
          <h3 class="card-title"><a href="${courseUrl(c)}">${esc(c.title)}</a></h3>
          <p class="card-sub">${esc(c.subjects)}</p>
        </div>
        <div class="card-foot">
          <div class="price">${priceHtml}</div>
          <a class="btn btn-ghost btn-sm" href="${courseUrl(c)}">${c.price === 0 ? "Join" : "Enroll"}</a>
        </div>
      </article>`;
  }

  function productCard(p) {
    const off = Math.round((1 - p.price / p.regular) * 100);
    const url = `${SITE.origin}/product/${p.slug}/`;
    return `
      <article class="card reveal">
        <span class="badge">-${off}%</span>
        <a class="card-media ${p.img ? "" : "placeholder"}" href="${url}" style="${p.physical ? "aspect-ratio:3/4" : ""}" tabindex="-1" aria-hidden="true">
          ${p.img ? `<img src="${p.img}" alt="" loading="lazy">` : "EDED"}
        </a>
        <div class="card-body">
          <div class="card-meta"><span>${p.cat}</span>${p.physical ? "<span>Printed · Home delivery</span>" : "<span>Digital</span>"}</div>
          <h3 class="card-title"><a href="${url}">${esc(p.name)}</a></h3>
        </div>
        <div class="card-foot">
          <div class="price"><b>${tk(p.price)}</b><s>${tk(p.regular)}</s></div>
          <a class="btn btn-primary btn-sm" href="${url}">Buy now</a>
        </div>
      </article>`;
  }

  const mentorCard = (m) => `
    <article class="mentor reveal">
      <div class="ph"><img src="${m.img}" alt="${esc(m.name)}" loading="lazy"></div>
      <h3>${esc(m.name)}</h3>
      <p>Mentor, EDED GROUP</p>
      <a class="btn btn-ghost btn-sm btn-block" href="${SITE.appointment}">Book a session</a>
    </article>`;

  function reviewsMarquee(el) {
    if (!el) return;
    const half = Math.ceil(REVIEWS.length / 2);
    const row = (list) => `<div class="marquee-track">${[...list, ...list].map((src) =>
      `<button class="review" type="button" data-src="${src}"><img src="${src}" alt="Student review screenshot" loading="lazy"></button>`).join("")}</div>`;
    el.innerHTML = row(REVIEWS.slice(0, half)) + row(REVIEWS.slice(half));
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<img alt="Student review">`;
    document.body.append(lb);
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".review");
      if (!b) return;
      $("img", lb).src = b.dataset.src;
      lb.classList.add("open");
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.remove("open"));
  }

  const active = COURSES.filter((c) => !c.legacy);

  /* ---------- Pages ---------- */
  const pages = {
    home() {
      const students = COURSES.reduce((s, c) => s + (c.students || 0), 0);
      const lessons = COURSES.reduce((s, c) => s + (c.lessons || 0), 0);
      $("#stat-students").textContent = Math.floor(students / 100) * 100 + "+";
      $("#stat-lessons").textContent = Math.floor(lessons / 100) * 100 + "+";
      $("#stat-courses").textContent = active.length;
      $("#batches").innerHTML = Object.entries(BATCHES).map(([b, d]) => `
        <a class="batch-card" href="batch.html?b=${b}">
          <span class="emoji" aria-hidden="true">${d.emoji}</span>
          <div><h3>HSC ${b}</h3><p>HSC ${String(b).replace(/\d/g, (n) => "০১২৩৪৫৬৭৮৯"[n])} · ${d.title.replace(/^HSC \d+ /, "")}</p></div>
          <span class="arrow" aria-hidden="true">→</span>
        </a>`).join("");
      for (const id of ["admission", "aca2ad", "revision"]) {
        const el = $(`#rail-${id}`);
        if (el) el.innerHTML = active.filter((c) => c.cat === id).slice(0, 3).map(courseCard).join("");
      }
      $("#mentors-preview").innerHTML = MENTORS.slice(0, 3).map(mentorCard).join("");
      reviewsMarquee($("#reviews"));
    },

    courses() {
      const params = new URLSearchParams(location.search);
      let cat = params.get("cat") || "all";
      let q = "";
      const filters = $("#filters");
      filters.innerHTML = [{ id: "all", name: "All" }, ...CATEGORIES].map((c) =>
        `<button type="button" data-cat="${c.id}">${c.name}</button>`).join("");
      const render = () => {
        $$("button", filters).forEach((b) => b.classList.toggle("on", b.dataset.cat === cat));
        const match = (c) => (cat === "all" || c.cat === cat) && (!q || (c.title + " " + c.subjects).toLowerCase().includes(q));
        const list = active.filter(match);
        $("#course-grid").innerHTML = list.length ? list.map(courseCard).join("") : `<p class="empty">No courses match your search.</p>`;
        const old = COURSES.filter((c) => c.legacy && match(c));
        $("#legacy").hidden = !old.length;
        $("#legacy-grid").innerHTML = old.map(courseCard).join("");
        $("#result-count").textContent = `${list.length} course${list.length === 1 ? "" : "s"}`;
        observe();
      };
      filters.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        cat = b.dataset.cat;
        history.replaceState(null, "", cat === "all" ? "courses.html" : `courses.html?cat=${cat}`);
        render();
      });
      $("#search").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); render(); });
      render();
    },

    shop() {
      $("#shop-grid").innerHTML = PRODUCTS.map(productCard).join("");
      $("#shop-courses").innerHTML = active.filter((c) => c.cat === "a2z").map(courseCard).join("");
    },

    mentors() {
      $("#mentor-grid").innerHTML = MENTORS.map(mentorCard).join("");
    },

    batch() {
      const b = new URLSearchParams(location.search).get("b") || "26";
      const d = BATCHES[b] || BATCHES[26];
      const key = BATCHES[b] ? b : "26";
      document.title = `${d.title} | ${SITE.name}`;
      $("#b-title").innerHTML = `HSC ${key} <span class="grad">${d.title.replace(/^HSC \d+ /, "")}</span>`;
      $("#b-price").innerHTML = `<span class="big">${tk(d.price)}</span><s>${tk(d.regular)}</s>`;
      $("#b-coupon").textContent = d.coupon;
      $("#b-coupon-off").textContent = `কুপন ব্যবহার করলে আরও ${d.couponOff} টাকা ডিসকাউন্ট পাবে!`;
      $("#b-buy").href = d.buy;
      $("#b-copy").addEventListener("click", async (e) => {
        try { await navigator.clipboard.writeText(d.coupon); e.target.textContent = "Copied ✓"; }
        catch { e.target.textContent = d.coupon; }
      });

      // Countdown to the end of the current month (offer window)
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const tick = () => {
        let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
        const parts = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
        $$("#b-count b").forEach((el, i) => (el.textContent = String(parts[i]).padStart(2, "0")));
      };
      tick();
      setInterval(tick, 1000);

      const extras = [];
      if (d.points) {
        extras.push(`<section class="section"><div class="container">
          <div class="section-head"><div><span class="eyebrow">Why EDED</span><h2 class="bn">কেন কমপ্যাক্ট ইঞ্জিনিয়ারিং এবং ভার্সিটি ব্যাচ আলাদা?</h2></div></div>
          <div class="features">${d.points.map((p, i) => `<div class="feature reveal"><div class="ic">${["⚡", "📚", "🎯"][i]}</div><h3>${p.h}</h3><p>${p.p}</p></div>`).join("")}</div>
        </div></section>`);
      }
      if (d.weekly) {
        const w = d.weekly;
        extras.push(`<section class="section section-alt"><div class="container">
          <div class="section-head"><div><span class="eyebrow">Weekly tracker</span><h2 class="bn">উদ্ভাস উইকলির পড়া জমে যাচ্ছে? Try EDED</h2>
          <p class="bn">W1–W${w.done - 1}: কমপ্লিট · W${w.done}: Class Uploaded · বাকি: ${w.total - w.done}টি উইকলি</p></div></div>
          <div class="weeks">${Array.from({ length: w.total }, (_, i) => `<div class="${i + 1 < w.done ? "done" : i + 1 === w.done ? "now" : ""}">W${i + 1}</div>`).join("")}</div>
        </div></section>`);
      }
      if (d.bundle) {
        const total = d.bundle.reduce((s, x) => s + x.value, 0);
        extras.push(`<section class="section"><div class="container" style="max-width:760px">
          <div class="section-head"><div><span class="eyebrow">Bundle</span><h2 class="bn">এই বান্ডেলের অন্তর্ভুক্ত কোর্সসমূহ</h2></div></div>
          <div class="bundle">
            ${d.bundle.map((x) => `<div class="bundle-row"><span>${x.name}</span><s>${tk(x.value)}</s></div>`).join("")}
            <div class="bundle-row"><span class="bn">আলাদাভাবে কিনলে মোট মূল্য</span><s>${tk(total)}</s></div>
            <div class="bundle-total"><span class="bn">বান্ডেলে পাচ্ছ মাত্র</span><span>${tk(d.price)}</span></div>
          </div>
        </div></section>`);
      }
      $("#b-extras").innerHTML = extras.join("");

      $("#b-demos").innerHTML = DEMOS.map((x) => `
        <div class="feature reveal"><div class="ic">▶</div><h3>${x.subject}</h3><p>${x.topic}</p>
        <p style="margin-top:10px;font-size:13px;color:var(--dim)">Foundation Class · EDED Courses</p></div>`).join("");
      const list = COURSES.filter((c) => String(c.batch) === key && !c.legacy);
      $("#b-courses").innerHTML = list.map(courseCard).join("");
      reviewsMarquee($("#reviews"));
    },

    legal() {
      const p = new URLSearchParams(location.search).get("p") || "terms";
      const tpl = $(`#legal-${p}`) || $("#legal-terms");
      $("#legal-body").innerHTML = tpl.innerHTML;
      $("#legal-title").textContent = tpl.dataset.title;
      document.title = `${tpl.dataset.title} | ${SITE.name}`;
      $$(`.filters a`).forEach((a) => a.classList.toggle("on", a.href.endsWith(`p=${p}`)));
    },
  };

  pages[page]?.();

  /* ---------- Reveal on scroll ---------- */
  function observe() {
    if (!("IntersectionObserver" in window)) return $$(".reveal").forEach((el) => el.classList.add("in"));
    io ||= new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -40px" });
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
  }
  observe();
})();
