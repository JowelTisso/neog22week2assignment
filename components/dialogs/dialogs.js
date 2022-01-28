const dialogBackdrop = document.querySelector("#dialog-backdrop");
const dialogBackdropSimple = document.querySelector("#dialog-backdrop-simple");
const dialogBackdropConfirm = document.querySelector(
  "#dialog-backdrop-confirm"
);
const btnAlert = document.querySelector("#btn-alert");
const btnSimple = document.querySelector("#btn-simple");
const btnConfirm = document.querySelector("#btn-confirm");

dialogBackdrop.addEventListener("click", () => {
  dialogBackdrop.className = "dialog-container hide-dialog";
});
btnAlert.addEventListener("click", () => {
  dialogBackdrop.className = "dialog-container show-dialog";
});

dialogBackdropSimple.addEventListener("click", () => {
  dialogBackdropSimple.className = "dialog-container hide-dialog";
});
btnSimple.addEventListener("click", () => {
  dialogBackdropSimple.className = "dialog-container show-dialog";
});

dialogBackdropConfirm.addEventListener("click", () => {
  dialogBackdropConfirm.className = "dialog-container hide-dialog";
});
btnConfirm.addEventListener("click", () => {
  dialogBackdropConfirm.className = "dialog-container show-dialog";
});
