const form = document.getElementById("myForm");
const personalNumber = document.getElementById("personal_number");
const mobileNumber = document.getElementById("mobile_number");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

const personalNumberError = document.getElementById("personal_number_error");
const mobileNumberError = document.getElementById("mobile_number_error");
const termsError = document.getElementById("terms_error");

// Disable submit button unless Terms and Conditions is checked
terms.addEventListener("change", () => {
  submitBtn.disabled = !terms.checked;
});

form.addEventListener("submit", (e) => {
  let isValid = true;

  // Personal Number Validation
  if (!/^\d{11}$/.test(personalNumber.value)) {
    personalNumberError.textContent = "Personal number must be 11 digits.";
    isValid = false;
  } else {
    personalNumberError.textContent = "";
  }

  // Mobile Number Validation
  if (!/^\d{9}$/.test(mobileNumber.value)) {
    mobileNumberError.textContent = "Mobile number must be 9 digits.";
    isValid = false;
  } else {
    mobileNumberError.textContent = "";
  }

  // Terms and Conditions Validation
  if (!terms.checked) {
    termsError.textContent = "You must agree to the Terms and Conditions.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  if (!isValid) {
    e.preventDefault();
  }
});
