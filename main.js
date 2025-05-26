let openMenuMobile = false;

function toggleMenuMobile(menuToggle) {
  const navList = document.querySelector(".nav__list");
  
  if (!openMenuMobile) {
    navList.style.display = "grid";
    menuToggle.firstElementChild.classList.add("hidden");
    menuToggle.lastElementChild.classList.remove("hidden");
    openMenuMobile = true;
  } else {
    navList.style.display = "none";
    menuToggle.firstElementChild.classList.remove("hidden");
    menuToggle.lastElementChild.classList.add("hidden");
    openMenuMobile = false;
  }
};

function menuToggleAriaControl(menuToggle) {
  if (window.innerWidth <= 426) {
    menuToggle.setAttribute("aria-hidden", "false");
  } else {
    menuToggle.setAttribute("aria-hidden", "true");
  }
  console.log(window.innerWidth);
};



window.addEventListener("DOMContentLoaded", function(ev) {
  const menuToggle = document.querySelector(".menu__toggle");

  menuToggleAriaControl(menuToggle);

  menuToggle.addEventListener("click", toggleMenuMobile.bind(null, menuToggle));

  window.addEventListener("resize", menuToggleAriaControl.bind(null, menuToggle));

});