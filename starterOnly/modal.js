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
  let errorText = document.getElementById('error');

  if(first.value.trim() === '' || first.value.trim() === ' ' || regexNameIs.test(first.value.trim()) === false){
    refutSetUpName (first);
    errorText.style.display='block';
    errorText.innerText='Veuillez saisir votre prénom'
    return false;
  }else{
    validateSetUpName(first);
    errorText.style.display='none';
    return true;
  }
}

function validateSetUpName (validate) {
  validate.style.borderColor='green';
}

function refutSetUpName (refut) {
  refut.style.borderColor='red';
}




//Nom

function validateLast () {
  let last =  document.getElementById('last');
  let regexNameIs = /^[a-zA-Z]{2}/;
  let errorTextLast = document.getElementById('error-last');

  if(last.value.trim() === '' || last.value.trim() === ' ' || regexNameIs.test(last.value.trim()) === false){
    refutSetUpName (last);
    errorTextLast.style.display='block';
    errorTextLast.innerText='Veuillez saisir votre nom'
    return false;
  }else{
    validateSetUpName(last);
    errorTextLast.style.display='none';
    return true;
  }
}

function validateSetUpName (validate) {
  validate.style.borderColor='green';
}

function refutSetUpName (refut) {
  refut.style.borderColor='red';
}




//Email

function validateMail () {
  let email =  document.getElementById('email');
  let regexMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
  let errorEmail = document.getElementById('error-email');

  if(regexMail.test(email.value.trim()) === false){
    refutSetUpName (email);
    errorEmail.style.display='block';
    errorEmail.innerText='Veuillez saisir un email valide';
    return false;
  }else{
    validateSetUpName(email);
    errorEmail.style.display='none';
    return true;
  }
}

function validateSetUpName (validate) {
  validate.style.borderColor='green';
}

function refutSetUpName (refut) {
  refut.style.borderColor='red';
}




//Date

function validateDate () {
  const birthdate = document.getElementById('birthdate');
  // const today = new Date().toISOString().split("T")[0]; //enlever
  let errorBirth = document.getElementById('error-birth');

  // birthdate.max = today;

  // if(birthdate.value.trim() === '' || birthdate.date.value.trim() === ' '){
  //   errorBirth.style.display='block';
  //   errorBirth.innerText='Veuillez saisir votre date de naissance';
  //   birthdate.style.borderColor='red';
  //   return false;
  // }else{
  //   errorBirth.style.display='none';
  //   birthdate.style.borderColor='green';
  //   return true;
  // }

  if(birthdate.value.trim() === '' || birthdate.date.value.trim() === ' '){
    errorBirth.style.display='block';
    errorBirth.innerText='Veuillez saisir votre date de naissance';
    birthdate.style.borderColor='red';
    return false;
  }else{
    errorBirth.style.display='none';
    birthdate.style.borderColor='green';
    return true;
  }
}



//Quantity 

function Quantity () {
  const quantity = document.getElementById('quantity');
  const errorQuantity = document.getElementById('error-quantity');

  if(quantity.value.trim() === '' || quantity.value.trim() === 0){
    errorQuantity.style.display='block';
    errorQuantity.innerText="Veuillez saisir un nombre d'année";
    quantity.style.borderColor='red';
    return false;
  }else{
    errorQuantity.style.display='none';
    quantity.style.borderColor='green';
    return true;
  }
}



//Validation formulaire

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    if (validateFirst() === false ){
        e.preventDefault();
    }else{
        e.preventDefault();
    }

    if (validateLast() === false ){
      e.preventDefault();
    }else{
      e.preventDefault();
    }

    if (validateMail() === false ){
      e.preventDefault();
    }else{
      e.preventDefault();
    }

    if (validateDate () === false ){
      e.preventDefault();
  }else{
      e.preventDefault();
  }

  if (Quantity () === false ){
    e.preventDefault();
  }else{
    e.preventDefault();
  }
});





