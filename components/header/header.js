const shortHeaderContainer = document.querySelector("#short-header-container");
const shortHeader = document.querySelector("#short-header");
const shortHeaderTitle = document.querySelector("#short-hr-title");

// header-short

// hide-title

shortHeaderContainer.addEventListener("scroll", () => {
  if (shortHeaderContainer.scrollTop < 100) {
    shortHeader.className = "content-header header-fixed";
    shortHeaderTitle.className = "header-title-dr";
  }

  if (
    shortHeaderContainer.scrollTop > 0 &&
    shortHeaderContainer.scrollTop < 200
  ) {
    shortHeader.className = "content-header header-fixed header-short";
    shortHeaderTitle.className = "header-title-dr hide-title";
  }
});
