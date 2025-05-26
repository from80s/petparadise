let openMenuMobile = false;

function toggleMenuMobile(menuToggle, navList) {
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

function menuControl(navList) {
  if (window.innerWidth >= 768) {
    navList.style.display = "grid";
  } else if (window.innerWidth <= 426) {
    navList.style.display = "none";
  }
}

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
  const navList = document.querySelector(".nav__list");

  menuToggleAriaControl(menuToggle);
  menuControl(navList);

  menuToggle.addEventListener("click", toggleMenuMobile.bind(null, menuToggle, navList));

  window.addEventListener("resize", function(ev) {
    menuToggleAriaControl(menuToggle);
    menuControl(navList);
  });

});