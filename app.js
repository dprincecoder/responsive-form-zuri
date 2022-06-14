//bring in DOM elements
const form = document.querySelector(".form-body");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

//add event listener to form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

//set error functions
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisply = inputControl.querySelector(".error-message");

  inputControl.classList.add("error-message");
  errorDisply.innerText = message;
  inputControl.classList.remove("success");
};

//set success functions
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisply = inputControl.querySelector(".error-message");

  inputControl.classList.add("success");
  errorDisply.innerText = "";
  inputControl.classList.remove("error-message");
};

//set valid email function
const isValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

//validateInputs
const validateInputs = () => {
  //trim all whitespace
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  //check if all fields are filled
  if (firstnameValue === "") {
    setError(firstname, "First name cannot be empty");
  } else {
    setSuccess(firstname);
  }
  if (lastnameValue === "") {
    setError(lastname, "Last name cannot be empty");
  } else {
    setSuccess(lastname);
  }
  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }
};
