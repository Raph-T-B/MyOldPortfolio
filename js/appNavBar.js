const nav = document.querySelector("nav");
const underline = document.querySelector(".underline");
const links = document.querySelectorAll("nav a");
const activeLink = document.querySelector("nav a.active");
function moveUnderline(link) {
  const rect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  underline.style.width = rect.width + "px";
  underline.style.left = rect.left - navRect.left + "px";
}
// Position initiale sur le lien actif
if (activeLink) {
  moveUnderline(activeLink);
}
// Survol : déplacer temporairement le span
links.forEach(link => {
  link.addEventListener("mouseover", () => moveUnderline(link));
});
// Quand la souris quitte la nav, revenir sur le lien actif
nav.addEventListener("mouseleave", () => {
  if (activeLink) {
    moveUnderline(activeLink);
  } else {
    underline.style.width = "0";
  }
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll vers le bas → cacher la navbar
    nav.style.top = "-80px"; // ajuste selon la hauteur de ta nav
  } else {
    // Scroll vers le haut → montrer la navbar
    nav.style.top = "0";
  }

  lastScroll = currentScroll;
});