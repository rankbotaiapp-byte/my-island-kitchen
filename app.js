(function () {
  const cfg = window.APP_CONFIG;
  const app = document.getElementById("app");
  const header = document.getElementById("app-header");
  const root = document.documentElement;

  const neonColor =
    cfg.branding.neon?.color === "match" || !cfg.branding.neon?.color
      ? cfg.branding.primary
      : cfg.branding.neon.color;

  root.style.setProperty("--primary", cfg.branding.primary);
  root.style.setProperty("--accent", cfg.branding.accent);

  if (cfg.branding.neon?.on === false) {
    root.style.setProperty("--neon", "transparent");
    root.style.setProperty("--neon-width", "0px");
  } else {
    root.style.setProperty("--neon", neonColor);
    root.style.setProperty("--neon-width", (cfg.branding.neon?.width || 3) + "px");
  }

  document.body.className = "theme-" + (cfg.branding.theme || "aurora");

  const twinkleField = document.createElement("div");
  twinkleField.className = "twinkle-field";
  document.body.appendChild(twinkleField);
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "twinkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = (Math.random() * 3 + 2) + "s";
    s.style.animationDelay = (Math.random() * 4) + "s";
    twinkleField.appendChild(s);
  }

  function bgShootingStar() {
    const neon = ["#f3ff4d", "#4dff88", "#ff4fd8", "#4dd6ff"];
    const c = neon[Math.floor(Math.random() * neon.length)];
    const longTail = Math.random() > 0.5;
    const s = document.createElement("div");
    s.className = "bg-shooter";
    s.style.left = (Math.random() * 90 + 5) + "vw";
    s.style.top = (Math.random() * 70) + "vh";
    s.style.background = c;
    if (longTail) {
      s.style.boxShadow = `0 0 6px #fff, 0 0 14px ${c}, -60px 0 30px ${c}, -120px 0 50px ${c}, -180px 0 70px ${c}`;
    } else {
      s.style.boxShadow = `0 0 6px #fff, 0 0 12px ${c}, -50px 0 30px ${c}`;
    }
    const sx = -(Math.random() * 350 + 250) + "px";
    const sy = (Math.random() * 250 + 120) + "px";
    s.style.setProperty("--sx", sx);
    s.style.setProperty("--sy", sy);
    s.style.animationDuration = (Math.random() * 1.2 + 1.6) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3000);
  }
  setInterval(() => { if (Math.random() > 0.35) bgShootingStar(); }, 1800);

  document.title = cfg.business.name;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute("content", cfg.branding.primary);

  header.innerHTML = `
    ${cfg.business.logo ? `<img class="logo" src="${cfg.business.logo}" alt="${cfg.business.name}">` : ""}
    <h1>${cfg.business.name}</h1>
    <p>${cfg.business.tagline}</p>`;

  const icon = (name, size = 20) =>
    `<i data-lucide="${name}" width="${size}" height="${size}"></i>`;

  const modules = {
    hero: () => {
      const h = cfg.content.hero || {};
      const btns = (h.buttons || []).map(b =>
        `<a class="hero-btn" href="${b.link || '#'}">${b.icon ? icon(b.icon) : ""} ${b.label}</a>`
      ).join("");
      const bannerStyle = h.banner
        ? ` style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('${h.banner}'); background-size: cover; background-position: center;"`
        : "";
      const bannerClass = h.banner ? " hero-has-banner" : "";
      return `
      <section class="hero-premium${bannerClass}"${bannerStyle}>
        <div class="hero-inner">
          <h2 class="hero-headline">${h.headline || cfg.business.tagline || ""}</h2>
          <p class="hero-sub">${h.subtext || ""}</p>
          <div class="hero-btns">${btns}</div>
        </div>
      </section>`;
    },
    axiomIntro: () => {
      const a = cfg.content.axiomIntro;
      if (!a) return "";
      const points =
