const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};


ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});



ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const rdr2 = document.querySelector(".rdr2__flex");

const rdr2Content = Array.from(rdr2.children);

rdr2Content.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  rdr2.appendChild(duplicateNode);
});
