function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal event
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

// closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// // close modal event

// function closeModal() {
//   modalbg.style.display = "none";
// }