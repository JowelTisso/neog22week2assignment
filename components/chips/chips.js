const inputTxt = document.querySelector("#input-txt");
const chipsBox = document.querySelector("#chips-box");

inputTxt.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (inputTxt.value.trim().length > 0) {
      addChip();
      inputTxt.value = "";
    }
  }
});

const addChip = () => {
  const chipName = document.createElement("p");
  chipName.className = "chips-word";
  chipName.append(inputTxt.value);

  const chipsIcon = document.createElement("i");
  chipsIcon.className = "fas fa-times-circle fa-lg light-icon";
  chipsIcon.id = "cross-icon";

  const chip = document.createElement("div");
  chip.className = "chip";
  chip.appendChild(chipName);
  chip.appendChild(chipsIcon);

  chipsBox.prepend(chip);
};

const removeChip = (e) => {
  if (e.target && e.target.id === "cross-icon") {
    const crossIcon = e.target;
    const chip = crossIcon.parentElement;
    chip.remove();
  }
};

chipsBox.addEventListener("click", removeChip);
