const signup = document.getElementById("Sign-up");
const success = document.getElementById("success");

const emailConfirmation = document.getElementById("confirmation-email");

const form = document.forms.subscribeForm;

const { email, btnSubmit} = form;

email.addEventListener("keyup", validateEMail);

form.addEventListener("submit", (e) => {
  // console.log(e)
  e.preventDefault();
  if (validateEMail) {
    email.disabled = true;
    btnSubmit.disabled = true;
    btnSubmit.lastElementChild.classList.toggle("hidden");
    signup.classList.add("hidden");
    signup.classList.remove("flex", "md:grid");

    emailConfirmation.innerHTML = email.value;
    success.classList.add("flex");
    success.classList.remove("hidden");
  }
});

const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

function validateEMail() {
  if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Required input");
    btnSubmit.disabled = true;
    return false;
  } else {
    email.setCustomValidity("");
    btnSubmit.disabled = false;
    return true;
  }
}
