const themes = [
  {
    id: "deep-navy-orange",
    logo: "./assets/logos/01_deep_navy_orange_neon_amber.png",
    napkin: "./assets/napkins/napkin-theme-01.png",
    primary: "#071B4A",
    secondary: "#E76A32",
    accent: "#FFB000"
  },
  {
    id: "blue-orange",
    logo: "./assets/logos/02_blue_orange_electric_cyan.png",
    napkin: "./assets/napkins/napkin-theme-02.png",
    primary: "#085CCD",
    secondary: "#E76A32",
    accent: "#00C7FF"
  },
  {
    id: "deep-cyan-burnt-orange",
    logo: "./assets/logos/03_deep_cyan_burnt_orange_lime.png",
    napkin: "./assets/napkins/napkin-theme-03.png",
    primary: "#00606C",
    secondary: "#D84E1F",
    accent: "#97CD00"
  },
  {
    id: "light-blue-orange",
    logo: "./assets/logos/04_light_blue_orange_neon_blue.png",
    napkin: "./assets/napkins/napkin-theme-04.png",
    primary: "#2F6FAE",
    secondary: "#E76A32",
    accent: "#5A8FCE"
  },
  {
    id: "amethyst-teal",
    logo: "./assets/logos/06_amethyst_purple_teal_chartreuse.png",
    napkin: "./assets/napkins/napkin-theme-06.png",
    primary: "#5B239A",
    secondary: "#00777E",
    accent: "#AED600"
  }
];

const SESSION_KEY = "czielerworks-theme";

function readSavedThemeId() {
  // The inline script in <head> picks the theme first; reuse its choice.
  const fromHead = document.documentElement.dataset.theme;
  if (fromHead) return fromHead;
  try {
    return sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null; // Storage can be blocked (private browsing, strict settings).
  }
}

function chooseTheme() {
  const saved = themes.find(theme => theme.id === readSavedThemeId());
  if (saved) return saved;

  const selected = themes[Math.floor(Math.random() * themes.length)];
  try {
    sessionStorage.setItem(SESSION_KEY, selected.id);
  } catch {
    // Without storage the theme simply may change on the next page load.
  }
  return selected;
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--text", theme.primary);

  ["heroLogo", "footerLogo"].forEach(id => {
    const img = document.getElementById(id);
    if (img) img.src = theme.logo;
  });

  document.documentElement.dataset.theme = theme.id;
  document.body.dataset.theme = theme.id;

  const napkinArt = document.getElementById("napkinArt");
  if (napkinArt && theme.napkin) napkinArt.src = theme.napkin;
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupThemeSwitch() {
  const button = document.getElementById("themeSwitch");
  if (!button) return;

  button.addEventListener("click", () => {
    const current = themes.findIndex(theme => theme.id === document.documentElement.dataset.theme);
    const next = themes[(current + 1) % themes.length];
    applyTheme(next);
    try {
      sessionStorage.setItem(SESSION_KEY, next.id);
    } catch {
      // Without storage the new colors last until the page reloads.
    }
  });
}

function setCopyrightYear() {
  const year = document.getElementById("copyrightYear");
  if (year) year.textContent = String(new Date().getFullYear());
}

applyTheme(chooseTheme());
setupNavigation();
setupThemeSwitch();
setCopyrightYear();
