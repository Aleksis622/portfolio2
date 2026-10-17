export const EMAIL = "ipb23.a.eglitis@vtdt.edu.lv";
// The CV that matches the page language
export const CV_URL = { lv: "/A.Eglitis_CV_lv.pdf", en: "/A.Eglitis_CV_en.pdf" };

// label is a key in src/i18n/strings.js
export const navLinks = [
  { href: "#home", label: "navHome", icon: "home" },
  { href: "#about", label: "navAbout", icon: "user" },
  { href: "#works", label: "navProjects", icon: "folder" },
  { href: "#contact", label: "navContact", icon: "mail" }
];

export const skillGroups = [
  { title: "skillFrontend", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "skillBackend", skills: ["Laravel", "PHP", "MySQL"] },
  { title: "skillTesting", skills: ["PHPUnit", "Vitest", "Playwright"] }
];

export const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);
