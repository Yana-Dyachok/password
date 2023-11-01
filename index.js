﻿//make the password visible-------------------------------------------------------------------------------------------------------------------
const imgEye = document.querySelector(".img-eye"),
  inputPassword = document.querySelector(".input-password");

imgEye.addEventListener("click", () => {
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
  imgEye.src = inputPassword.type === "password"
      ? "./assets/icons/icons8-closed-eye-40.png"
      : "./assets/icons/icons8-eye-40.png";
});

//get and check input value--------------------------------------------------------------------------------------------------------------------------------
let passwordValue = inputPassword.value;
const requirementsList = document.querySelector(".requirements-list");
const  btnContinue = document.querySelector('.btn-continue')
btnContinue.disabled=true;
const arrayRgx = [/.{8,}/, /\d/, /[A-Z]/, /[a-z]/, /[^A-Za-z0-9]/];

inputPassword.addEventListener("input", function () {
  passwordValue = inputPassword.value;
  arrayRgx.forEach((regex, i) => {
    requirementsList.children[i].classList.toggle(
      "complete",
      regex.test(passwordValue)
    );
  });
  const allRequirementsComplete = arrayRgx.every(regex => regex.test(passwordValue));
  btnContinue.disabled =!allRequirementsComplete;
});