// script.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section, .hero");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shrink-under-glass");
        } else {
          entry.target.classList.remove("shrink-under-glass");
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: `-${header.offsetHeight}px 0px 0px 0px`, // detect overlap with nav bar
      threshold: 0.1
    }
  );

  sections.forEach(section => observer.observe(section));
});