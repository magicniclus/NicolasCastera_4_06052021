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
const sectionUn = document.getElementById ('sectionUn');
const contentUn = document.getElementById ('contentUn')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal event
function launchModal() {
  modalbg.style.display = "block";
  sectionUn.classList.add('borderNoneHero');
  contentUn.classList.add('borderNoneContent');
}

// close modal event

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal event


function closeModal() {
  modalbg.style.display = "none";
  sectionUn.classList.remove('borderNoneHero');
  contentUn.classList.remove('borderNoneContent');
  
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
  refut.style.borderColor='rgb(221, 59, 59)';
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
  refut.style.borderColor='rgb(221, 59, 59)';
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
  refut.style.borderColor='rgb(221, 59, 59)';
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

  if(birthdate.value.trim() === ''){
    errorBirth.style.display='block';
    errorBirth.innerText='Veuillez saisir votre date de naissance';
    birthdate.style.borderColor='rgb(221, 59, 59)';
    return false;
  }else{
    errorBirth.style.display='none';
    birthdate.style.borderColor='green';
    return true;
  }
}



//Quantity 

function validateQuantity () {
  const quantity = document.getElementById('quantity');
  const errorQuantity = document.getElementById('error-quantity');

  if(quantity.value.trim() === '' || quantity.value.trim() == 0){
    errorQuantity.style.display='block';
    errorQuantity.innerText="Veuillez saisir un nombre d'année";
    quantity.style.borderColor='rgb(221, 59, 59)';
    return false;
  }else{
    errorQuantity.style.display='none';
    quantity.style.borderColor='green';
    return true;
  }
}



//CheckBox Ville 


function validateCity () {
  let location1 = document.getElementById('location1');
  let location2 = document.getElementById('location2');
  let location3 = document.getElementById('location3');
  let location4 = document.getElementById('location4');
  let location5 = document.getElementById('location5');
  let location6 = document.getElementById('location6');
  let checkboxIconUn = document.getElementById('checkbox-icon-1');
  let checkboxIconDeux = document.getElementById('checkbox-icon-2');
  let checkboxIconTrois = document.getElementById('checkbox-icon-3');
  let checkboxIconQuatre = document.getElementById('checkbox-icon-4');
  let checkboxIconCinq = document.getElementById('checkbox-icon-5');
  let checkboxIconSix = document.getElementById('checkbox-icon-6');
  let errorCity = document.getElementById('error-city');

  if (location1.checked == false && location2.checked == false && location3.checked == false && location4.checked == false && location5.checked == false && location6.checked == false){
    checkboxIconUn.style.borderColor='rgb(221, 59, 59)';
    checkboxIconDeux.style.borderColor='rgb(221, 59, 59)';
    checkboxIconTrois.style.borderColor='rgb(221, 59, 59)';
    checkboxIconQuatre.style.borderColor='rgb(221, 59, 59)';
    checkboxIconCinq.style.borderColor='rgb(221, 59, 59)';
    checkboxIconSix.style.borderColor='rgb(221, 59, 59)';
    errorCity.style.display='block';
    errorCity.innerText='Veuillez cocher au moins une ville';
    return false;
  }else{
    checkboxIconUn.style.borderColor='#279e7a';
    checkboxIconDeux.style.borderColor='#279e7a';
    checkboxIconTrois.style.borderColor='#279e7a';
    checkboxIconQuatre.style.borderColor='#279e7a';
    checkboxIconCinq.style.borderColor='#279e7a';
    checkboxIconSix.style.borderColor='#279e7a';
    errorCity.style.display='none';
    return true;
  };
}



//CheckBox Conditions 

function validateUtilisation (){
  let utilisation = document.getElementById('checkbox1');
  let error = document.getElementById('errorChecked');

  if(utilisation.checked === false){
    error.innerText="Veuillez accepter les conditions d'utilisation";
    error.style.display= 'block';
    error.style.color='rgb(221, 59, 59)';
    return false;
  }else {
    error.style.display='none';
    return true;
  }
}



//Validation formulaire


let form = document.getElementById('form');

form.addEventListener('submit', e => {

  let form = document.getElementById('form');
  let remerciement = document.getElementById('remerciement');
  

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

  if (validateQuantity () === false ){
    e.preventDefault();
  }else{
    e.preventDefault();
  }

  if (validateCity () === false){
    e.preventDefault();
  }else{
    e.preventDefault();
  }

  if (validateUtilisation () === false){
    e.preventDefault();
  }else{
    e.preventDefault();
  }


  if (validateFirst() === true && validateLast() === true && validateMail () === true && validateDate () === true && validateQuantity () === true && validateCity () === true && validateUtilisation () === true){
    form.style.display='none';
    remerciement.style.display='flex';
    document.querySelector('#btn-submit-2').addEventListener('click', function(){
      closeModal();
      remerciement.style.display='none';
      form.style.display='block';
    })
    document.querySelector('.close').addEventListener('click', function(){
      closeModal();
      remerciement.style.display='none';
      form.style.display='block';
    })
    
  }
});



