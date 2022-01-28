const tabOne = document.querySelector("#tab-1");
const tabTwo = document.querySelector("#tab-2");
const tabThree = document.querySelector("#tab-3");
const contentOne = document.querySelector("#content-1");
const contentTwo = document.querySelector("#content-2");
const contentThree = document.querySelector("#content-3");

// Scrollable
const scrollTabOne = document.querySelector("#scroll-tab-1");
const scrollTabTwo = document.querySelector("#scroll-tab-2");
const scrollTabThree = document.querySelector("#scroll-tab-3");
const scrollTabFour = document.querySelector("#scroll-tab-4");
const scrollTabFive = document.querySelector("#scroll-tab-5");
const scrollTabSix = document.querySelector("#scroll-tab-6");

tabOne.addEventListener("click", () => {
  tabOne.className = "tab tab-selected";
  tabTwo.className = "tab ";
  tabThree.className = "tab ";

  contentOne.className = "content-container content-active";
  contentTwo.className = "content-container ";
  contentThree.className = "content-container ";
});
tabTwo.addEventListener("click", () => {
  tabOne.className = "tab ";
  tabTwo.className = "tab tab-selected";
  tabThree.className = "tab ";

  contentOne.className = "content-container ";
  contentTwo.className = "content-container content-active";
  contentThree.className = "content-container ";
});
tabThree.addEventListener("click", () => {
  tabOne.className = "tab ";
  tabTwo.className = "tab ";
  tabThree.className = "tab tab-selected";

  contentOne.className = "content-container ";
  contentTwo.className = "content-container ";
  contentThree.className = "content-container content-active";
});

// Scrollable tabs

scrollTabOne.addEventListener("click", () => {
  scrollTabOne.scrollIntoView(true);
});
scrollTabTwo.addEventListener("click", () => {
  scrollTabTwo.scrollIntoView(true);
});
scrollTabThree.addEventListener("click", () => {
  scrollTabThree.scrollIntoView(true);
});
scrollTabFour.addEventListener("click", () => {
  scrollTabFour.scrollIntoView(true);
});
scrollTabFive.addEventListener("click", () => {
  scrollTabFive.scrollIntoView(true);
});
scrollTabSix.addEventListener("click", () => {
  scrollTabSix.scrollIntoView(true);
});

scrollTabOne.addEventListener("click", () => {
  scrollTabOne.className = "tab-scroll tab-selected";
  scrollTabTwo.className = "tab-scroll ";
  scrollTabThree.className = "tab-scroll ";

  contentOne.className = "content-container content-active";
  contentTwo.className = "content-container ";
  contentThree.className = "content-container ";
});
// scrollTabTwo.addEventListener("click", () => {
//   scrollTabTwo.className = "tab-scroll ";
//   scrollTabTwo.className = "tab-scroll tab-selected";
//   scrollTabThree.className = "tab-scroll ";

//   contentOne.className = "content-container ";
//   contentTwo.className = "content-container content-active";
//   contentThree.className = "content-container ";
// });
// scrollTabThree.addEventListener("click", () => {
//   scrollTabThree.className = "tab-scroll ";
//   scrollTabTwo.className = "tab-scroll ";
//   scrollTabThree.className = "tab-scroll tab-selected";

//   contentOne.className = "content-container ";
//   contentTwo.className = "content-container ";
//   contentThree.className = "content-container content-active";
// });
