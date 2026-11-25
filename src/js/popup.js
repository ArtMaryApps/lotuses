"use strict";

const buttonDetails = document.getElementById("jsButtonDetails");
const popupDetails = document.querySelector("#jsPopupDetails");
const close = document.querySelector("#jsClose");

function showPopup(popup) {
  popup.classList.add("overlay--open");
}

function hidePopup(popup) {
  popup.classList.remove("overlay--open");
}

buttonDetails.addEventListener("click", () => {
  showPopup(popupDetails);
  buttonDetails.blur();
});

close.addEventListener("click", () => hidePopup(popupDetails));

document.addEventListener("keyup", (e) => {
  if (
    e.code === "Escape" &&
    getComputedStyle(popupDetails).visibility === "visible"
  ) {
    hidePopup(popupDetails);
  }
});

popupDetails.addEventListener("click", (e) => {
  if (!e.target.closest(".overlay__popup")) {
    hidePopup(e.target.closest(".overlay"));
  }
});
