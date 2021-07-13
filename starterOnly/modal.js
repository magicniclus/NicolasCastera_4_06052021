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

function validateFirst () {
  let first =  document.getElementById('first');
  let regexNameIs = /^[a-zA-Z]{2}/;

  if(first.value === '' || first.value === ' ' || regexNameIs.test(first.value) === false){
    refutSetUpName (first);
    return false;
  }else{
    validateSetUpName(first);
    return true;
  }
}

function validateSetUpName (validate) {
  validate.style.borderColor='green';
}

function refutSetUpName (refut) {
  refut.style.borderColor='red';
}



//Validation formulaire

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    if (validateFirst() === false){
        e.preventDefault();
        alert('non');
    }else{
        e.preventDefault();
        alert('oui');
    }
});





