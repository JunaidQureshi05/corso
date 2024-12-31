// Add custom JavaScript here

function addEventListeners() {
  let nav = document.querySelector("nav");
  if (window.innerWidth <= 500) {
    nav.classList.add("bg-dark");
  }

  window.addEventListener("scroll", () => {
    console.log(window.scrollY > 50);

    if (window.scrollY > 50) {
      nav.classList.add("bg-dark");
    } else {
      nav.classList.remove("bg-dark");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 500) {
      nav.classList.add("bg-dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", addEventListeners);
