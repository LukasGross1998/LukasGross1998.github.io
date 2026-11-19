// Rendert die Inhalte aus content.js in die Seite.
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, ...children) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else n.setAttribute(k, v);
    }
    for (const c of children.flat()) if (c != null) n.append(c);
    return n;
  };
  const tags = (list = []) => el("div", { class: "tags" }, list.map((t) => el("span", { class: "tag" }, t)));
  const validLinks = (links = []) => links.filter((l) => l.url);

  // Kopf & Hero
  document.title = `${S.name} – ${S.role}`;
  $("logo").textContent = S.name;
  $("hero-name").textContent = S.name;
  $("hero-role").textContent = S.role;
  if (S.location) $("hero-role").append(el("span", { class: "hero-location" }, `📍 ${S.location}`));
  if (S.tagline) $("hero-tagline").textContent = S.tagline; else $("hero-tagline").remove();
  $("availability").textContent = S.availability || "";
  (S.certifications || []).forEach((x) => {
    const inner = [el("span", { class: "hero-cert-check", "aria-hidden": "true" }, "✓"), el("span", {}, x.name), x.url ? el("span", { class: "hero-cert-arrow", "aria-hidden": "true" }, "↗") : null];
    $("hero-certs").append(x.url
      ? el("a", { class: "hero-cert", href: x.url, target: "_blank", rel: "noopener", title: "Nachweis auf Credly ansehen" }, ...inner)
      : el("span", { class: "hero-cert" }, ...inner));
  });
  if (S.focus?.length) $("focus").append(el("span", { class: "focus-label" }, "Fokus"), ...S.focus.map((f) => el("span", { class: "focus-chip" }, f)));

  // Über mich
  $("about-text").append(...S.about.map((p) => el("p", {}, p)));
  $("stats").append(...(S.stats || []).map((s) => el("div", { class: "stat" }, el("strong", {}, s.value), el("span", {}, s.label))));

  // Werdegang & Ausbildung (gleiche Timeline-Optik)
  const timeline = (list = []) =>
    list.map((x) =>
      el("li", { class: "tl-item reveal" },
        el("span", { class: "tl-period" }, x.period),
        el("h3", {}, x.title),
        el("p", { class: "tl-company" }, el("b", {}, x.company), x.location ? ` · ${x.location}` : ""),
        x.points?.length ? el("ul", {}, x.points.map((p) => el("li", {}, p))) : null,
        x.tags?.length ? tags(x.tags) : null
      )
    );
  $("timeline").append(...timeline(S.experience));
  $("education-timeline").append(...timeline(S.education));

  // Projekte (kompakt, Details aufklappbar)
  const grid = $("project-grid");
  S.projects.forEach((p) => {
    let media = null;
    const imgs = (p.images || []).map((x) => (typeof x === "string" ? { src: x, caption: "" } : x));
    if (imgs.length) {
      let idx = 0;
      const main = el("img", { src: imgs[0].src, alt: imgs[0].caption || `Screenshot: ${p.title}` });
      const link = el("a", { href: imgs[0].src, target: "_blank", rel: "noopener", class: "media-main", title: "In voller Größe öffnen" }, main);
      const cap = el("p", { class: "media-caption" });
      const counter = el("span", { class: "media-count" });
      const thumbs = el("div", { class: "thumbs" });
      const show = (i) => {
        idx = (i + imgs.length) % imgs.length;
        main.src = imgs[idx].src; main.alt = imgs[idx].caption || p.title; link.href = imgs[idx].src;
        cap.textContent = imgs[idx].caption || "";
        counter.textContent = `${idx + 1} / ${imgs.length}`;
        thumbs.querySelectorAll(".thumb").forEach((b, j) => b.setAttribute("aria-pressed", String(j === idx)));
      };
      media = el("div", { class: "project-media" }, link);
      if (imgs.length > 1) {
        const prev = el("button", { type: "button", class: "media-nav prev", "aria-label": "Vorheriges Bild" }, "‹");
        const next = el("button", { type: "button", class: "media-nav next", "aria-label": "Nächstes Bild" }, "›");
        prev.addEventListener("click", () => show(idx - 1));
        next.addEventListener("click", () => show(idx + 1));
        media.append(prev, next);
        imgs.forEach((im, i) => {
          const t = el("button", { type: "button", class: "thumb", "aria-label": `Bild ${i + 1}: ${im.caption}` },
            el("img", { src: im.src, alt: "", loading: "lazy" }));
          t.addEventListener("click", () => show(i));
          thumbs.append(t);
        });
      }
      media = el("div", {}, media, el("div", { class: "media-meta" }, cap, imgs.length > 1 ? counter : null), imgs.length > 1 ? thumbs : null);
      show(0);
    }

    let results = null;
    if (p.results?.groups?.length) {
      const R = p.results;
      const all = R.groups.flatMap((g) => g.rows);
      const chart = el("div", { class: "rchart" });
      const hint = el("p", { class: "rchart-hint" });
      const toggle = el("div", { class: "filters rchart-toggle", role: "group", "aria-label": "Kennzahl wählen" });
      const draw = (m) => {
        const max = Math.max(...all.map((r) => r[m.key]));
        const scale = Math.ceil(max * 10) / 10;
        chart.replaceChildren(...R.groups.map((g) => {
          const best = Math.max(...g.rows.map((r) => r[m.key]));
          return el("div", { class: "rgroup" + (g.highlight ? " hl" : "") },
            el("div", { class: "rgroup-label" }, g.label),
            ...[...g.rows].sort((a, b) => b[m.key] - a[m.key]).map((r) => {
              const v = r[m.key];
              const other = R.metrics.filter((x) => x !== m).map((x) => `${x.label} ${r[x.key].toFixed(2)}`).join(" · ");
              return el("div", { class: "rrow" + (v === best ? " best" : ""), tabindex: "0", title: `${r.label}: ${m.label} ${v.toFixed(2)} · ${other}` },
                el("span", { class: "rrow-label" }, r.label),
                el("span", { class: "rrow-track" }, el("span", { class: "rrow-bar", style: `width:${(v / scale) * 100}%` })),
                el("span", { class: "rrow-val" }, v.toFixed(2).replace(".", ",")));
            }));
        }));
        hint.textContent = m.hint || "";
        toggle.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.key === m.key)));
      };
      R.metrics.forEach((m) => {
        const b = el("button", { class: "filter", type: "button" }, m.label);
        b.dataset.key = m.key;
        b.addEventListener("click", () => draw(m));
        toggle.append(b);
      });
      results = el("div", { class: "rchart-wrap" }, el("h4", {}, R.title), toggle, hint, chart);
      draw(R.metrics[0]);
    }

    let pipeline = null;
    if (p.pipeline?.steps?.length) {
      const pl = p.pipeline;
      pipeline = el("div", { class: "pipeline" },
        el("h4", {}, pl.title || "Technik"),
        el("ol", { class: "pipeline-steps" },
          pl.steps.map((st, i) => el("li", { class: "pipeline-step" },
            el("span", { class: "step-no" }, String(i + 1).padStart(2, "0")),
            el("strong", {}, st.title),
            el("p", {}, st.text),
            st.tech ? el("span", { class: "step-tech" }, st.tech) : null))),
        pl.note ? el("p", { class: "pipeline-note" }, pl.note) : null);
    }
    const more = media || results || pipeline
      ? el("details", { class: "project-more" },
          el("summary", {}, "Details, Bilder & Technik"),
          el("div", { class: "project-more-body" }, media, results, pipeline))
      : null;
    const card = el("article", { class: "project reveal" + (p.featured ? " featured" : "") },
      el("h3", {}, p.title),
      el("p", {}, p.summary),
      tags(p.tags),
      more,
      validLinks(p.links).length
        ? el("div", { class: "project-links" },
            validLinks(p.links).map((l) => el("a", { href: l.url, target: "_blank", rel: "noopener" }, `${l.label} ↗`)))
        : null
    );
    grid.append(card);
  });

  // Skills
  $("skill-groups").append(
    ...S.skills.map((g) => el("div", { class: "skill-group reveal" }, el("h3", {}, g.group), el("ul", {}, g.items.map((i) => el("li", {}, i)))))
  );

  // Zertifikate
  $("certs").append(
    ...(S.certifications || []).map((x) =>
      el("div", { class: "cert reveal" },
        el("span", { class: "cert-badge", "aria-hidden": "true" }, "✓"),
        el("div", { class: "cert-body" }, el("strong", {}, x.name), el("span", {}, `${x.issuer} · ${x.date}`)),
        x.url ? el("a", { class: "cert-link", href: x.url, target: "_blank", rel: "noopener" }, "Nachweis ansehen ↗") : null))
  );

  // Kontakt
  const c = S.contact;
  $("contact-text").textContent = c.text;
  $("contact-email").textContent = c.email;
  $("contact-email").href = `mailto:${c.email}`;
  const cl = validLinks(c.links).map((l) => el("a", { href: l.url, target: "_blank", rel: "noopener" }, l.label));
  $("contact-links").append(...cl);
  // Lebenslauf: Buttons nur zeigen, wenn die Datei wirklich existiert
  if (c.cv) {
    fetch(c.cv, { method: "HEAD" }).then((r) => {
      if (!r.ok) return;
      const btn = $("hero-secondary");
      btn.textContent = "Lebenslauf (PDF)";
      btn.href = c.cv;
      btn.target = "_blank";
      btn.rel = "noopener";
      $("contact-links").append(el("a", { href: c.cv, target: "_blank", rel: "noopener" }, "Lebenslauf (PDF)"));
    }).catch(() => {});
  }
  $("footer-text").textContent = `© ${new Date().getFullYear()} ${S.name}`;

  // Theme-Umschalter
  $("theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // Mobiles Menü
  const menuBtn = $("menu-toggle"), links = $("nav-links");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Nav-Rahmen beim Scrollen + aktiver Abschnitt
  const nav = document.querySelector(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

  if ("IntersectionObserver" in window) {
    const navLinks = [...links.querySelectorAll("a")];
    const secObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => secObs.observe(s));

    const revObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); revObs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((n) => revObs.observe(n));
  } else {
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("visible"));
  }
})();
