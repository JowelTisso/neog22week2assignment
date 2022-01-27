const btnHide = document.querySelector("#btn-hide");
const badgeIcon = document.querySelector("#badge-icon");

const hideBadge = () => {
  if (!badgeIcon.className.includes("bd-hide")) {
    badgeIcon.className = "badge bd-hide";
  } else {
    badgeIcon.className = "badge";
  }
};

btnHide.addEventListener("click", hideBadge);
