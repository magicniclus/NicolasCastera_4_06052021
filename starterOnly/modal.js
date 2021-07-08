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
const enterPrenom = document.getElementsByClassName ('penom');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal event
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal event

function closeModal() {
  modalbg.style.display = "none";
}

//Prenom

let myForm = document.getElementsByClassName('form');

myForm.addEventListener('submit', function(e){
  let firstName = document.getElementById('first');
  let errorMessage = document.getElementsByClassName('error');
  if(firstName.value===' '){
    e.preventDefault();
    errorMessage.innerText="Entrez un pseudo valide";
  }else{
    e.returnValue();
  }
})




