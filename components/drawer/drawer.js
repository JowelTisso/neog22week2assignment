const btnMenu = document.querySelector("#btn-menu");
const sideMenu = document.querySelector("#side-menu");
const modalShadow = document.querySelector("#modal-shadow");
const btnModalMenu = document.querySelector("#btn-modal-menu");

const toggleMenu = () => {
  if (sideMenu.className.includes("hide-sidebar")) {
    sideMenu.className = "sidebar show-sidebar";
  } else {
    sideMenu.className = "sidebar hide-sidebar";
  }
};

const toggleModalMenu = () => {
  if (modalShadow.className.includes("show-modal-menu")) {
    modalShadow.className = "modal-menu hide-modal-menu";
  } else {
    modalShadow.className = "modal-menu show-modal-menu";
  }
};

btnMenu.addEventListener("click", toggleMenu);
btnModalMenu.addEventListener("click", toggleModalMenu);
modalShadow.addEventListener("click", toggleModalMenu);
