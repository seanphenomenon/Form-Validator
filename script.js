// first, grab everything from the form DOM elements

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Functions

// Show input error message and outline

function showError(input, message) {
  // need to target username parent div (form-control)
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  //   need to target form-control error small css rule in DOM
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input success outline

function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check if email is valid

function isValidEmail(email) {
  // Grabbed from stackoverflow. It's best to use Regex for validation.
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // the test method below will take in input, to see if it matches. if yes, it returns true. if not, it returns false. We will also verify that its a string and lowercase.
  return re.test(String(email).toLowerCase());
}

// Event listeners

form.addEventListener("submit", function (event) {
  //event.preventdefault() will keep page from  actually submitting form and refreshing itself
  event.preventDefault();

  // need to account for fields that are missing text input and display error
  if (username.value === "") {
    showError(username, "Username is required.");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required.");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid.");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required.");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password is incorrect. Please try again.");
  } else {
    showSuccess(password2);
  }
});
