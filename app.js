//First Name
const firstName = document.querySelector(".first-name");
const firstNameLabel = document.querySelector(".firstname-label");
const firstNameError = document.querySelector(".first-name-error");

//Last name 
const lastName = document.querySelector(".last-name");
const lastNameLabel = document.querySelector(".lastname-label");
const lastNameError = document.querySelector(".last-name-error");

//Email
const userEmail = document.querySelector(".user-email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".user-email-error");

//Password
const userPassword = document.querySelector(".user-password");
const passwordLabel = document.querySelector(".password-label");
const passwordError = document.querySelector(".user-password-error");

const submitBtn = document.getElementById("submit-info");
const successMsg = document.querySelector(".success-msg");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordValidation = /^[A-Za-z]\w{7,14}$/;

let formError = function () {
  if (firstName.value.length === 0) {
    firstNameLabel.textContent = "First name cannot be empty";
    firstName.style.borderColor = "red";
    firstNameError.style.display = "inline";

    setTimeout(() => {
      firstNameLabel.textContent = "";
      firstName.style.borderColor = "var(--grayish-blue)";
      firstNameError.style.display = "none";
    }, 2000);
  }

  if (lastName.value.length === 0) {
    lastNameLabel.textContent = "Last name cannot be empty";
    lastName.style.borderColor = "red";
    lastNameError.style.display = "inline";

    setTimeout(() => {
      lastNameLabel.textContent = "";
      lastName.style.borderColor = "var(--grayish-blue)";
      lastNameError.style.display = "none";
    }, 2000);

    if (userEmail.value.length === 0) {
      emailLabel.textContent = "Email cannot be empty";
      userEmail.style.borderColor = "red";
      emailError.style.display = "inline";

      setTimeout(() => {
        emailLabel.textContent = "";
        userEmail.style.borderColor = "var(--grayish-blue)";
        emailError.style.display = "none";
      }, 2000);
    }

    if (userPassword.value.length === 0) {
      passwordLabel.textContent = "Password cannot be empty";
      userPassword.style.borderColor = "red";
      passwordError.style.display = "inline";

      setTimeout(() => {
        passwordLabel.textContent = "";
        userPassword.style.borderColor = "var(--grayish-blue)";
        passwordError.style.display = "none";
      }, 2000);
    }
  }

  if (!userPassword.value.match(passwordValidation) && userPassword.value.length != 0) {
    passwordLabel.textContent = "A password must be between 7-16 characters that starts with a letter(Only letters, numbers & underscore)";
    userPassword.style.borderColor = "red";
    passwordError.style.display = "inline";
    setTimeout(() => {
      passwordLabel.textContent = "";
      userPassword.style.borderColor = "var(--grayish-blue)";
      passwordError.style.display = "none";
    }, 2000)
  } else if (
    firstName.value.length !== 0 &&
    lastName.value.length !== 0 &&
    userEmail.value.length !== 0 &&
    userEmail.value.match(emailValidation) &&
    userPassword.value.match(passwordValidation) &&
    userPassword.value.length !== 0
  ) {
    successMsg.textContent = "Success! Please check your email";
  } else {
    console.log("err");
  }
}

//Click with the mouse
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formError();
});

//Click with Enter
firstName.addEventListener("keyup", function (e) {
  if (e.keycode === 13) {
    e.preventDefault();
    formError();
  }
});

lastName.addEventListener("keyup", function (e) {
  if (e.keycode === 13) {
    e.preventDefault();
    formError();
  }
});

userEmail.addEventListener("keyup", function (e) {
  if (e.keycode === 13) {
    e.preventDefault();
    formError();
  }
});

userPassword.addEventListener("keyup", function (e) {
  if (e.keycode === 13) {
    e.preventDefault();
    formError();
  }
});