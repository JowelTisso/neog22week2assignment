const closeBtn = document.querySelector("#sb-close-btn");
const btnLeading = document.querySelector("#btn-leading");
const btnBaseline = document.querySelector("#btn-baseline");
const btnStacked = document.querySelector("#btn-stacked");
const snackbar = document.querySelector("#snackbar");
const snackbarMsg = document.querySelector("#snackbar-msg");

btnLeading.addEventListener("click", () => {
  snackbar.className = "snackbar sb-leading show-snackbar";
});

btnBaseline.addEventListener("click", () => {
  snackbar.className = "snackbar show-snackbar";
});

btnStacked.addEventListener("click", () => {
  snackbar.className = "snackbar show-snackbar";
  snackbarMsg.className = "snackbar-msg sb-msg-stacked";
});

closeBtn.addEventListener("click", () => {
  snackbar.className = "snackbar";
  snackbarMsg.className = "snackbar-msg";
});
