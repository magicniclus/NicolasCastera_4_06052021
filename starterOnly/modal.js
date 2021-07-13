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
    errorText.innerText='Veuillez entrer votre prénom'
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
    errorTextLast.innerText='Veuillez entrer votre nom'
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


//Validation formulaire

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    if (validateFirst() === false ){
        e.preventDefault();
        alert('non');
    }else{
        e.preventDefault();
        alert('oui');
    }

    if (validateLast() === false ){
      e.preventDefault();
      alert('non 2')
    }else{
      e.preventDefault();
      alert('oui2')
    }
});





